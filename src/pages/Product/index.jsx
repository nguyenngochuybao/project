import './style.css';
import data from "../../db/data.json";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/orderSlice';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, useRef } from "react";
import { DiCoda } from "react-icons/di";
import 'react-toastify/dist/ReactToastify.css';
import { Radio, Form, Space, RadioChangeEvent } from 'antd';




// const plainOptions1 = [ 'Cay', 'Không Cay' ];
// const plainOptions2 = [ 'Rau', 'Không Rau' ];

function ProductPage ()
{

    const [ spicy, setSpicy ] = useState( "Cay" );

    console.log( "Giá trị của value1:", spicy );
    const [ vegetable, setVegetable ] = useState( 'Rau' );



    const onChange1 = ( e ) =>
    {
        console.log( "hello", e.target.value );
        setSpicy( e.target.value );
    };

    const onChange2 = ( { target: { value } } ) =>
    {
        setVegetable( value );
    };







    let menuRef = useRef()

    useEffect( () =>
    {
        let handler = ( event ) =>
        {
            if ( !menuRef.current.contains( event.target ) )
            {
                setOpenImage( false )
            }

        }
        document.addEventListener( "mousedown", handler );
        return () =>
        {
            document.removeEventListener( "mousedown", handler )
        }
    } )

    const dispatch = useDispatch();
    const [ openImage, setOpenImage ] = useState( false );
    const [ selectedProduct, setSelectedProduct ] = useState( null );
    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ sortOption, setSortOption ] = useState( '' );

    const handleAddToCart = ( product ) =>
    {
        dispatch(
            addProduct( {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                spicy: spicy,
                vegetable: vegetable,
                quantity: 1
            } )
        );

        toast.success( 'Đã thêm vào giỏ hàng', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        } );
    };

    const onOpenImage = ( product ) =>
    {
        setOpenImage( true );
        setSelectedProduct( product );
    };



    // search
    const handleSearch = ( event ) =>
    {
        setSearchTerm( event.target.value );
    };

    const handleSortChange = ( event ) =>
    {
        setSortOption( event.target.value );
    };

    const products = data.products;

    const sortedProducts = [ ...products ];

    sortedProducts.sort( ( a, b ) =>
    {
        // giảm
        if ( sortOption === "price-desc" )
        {
            return b.price - a.price;
            // tăng
        } else if ( sortOption === "price-asc" )
        {
            return a.price - b.price;
        } else
        {
            return 0;
        }
    } );

    return (
        <>
            <div className="page-product">
                <div className='page-product-img'>
                    <p className="product-img-content1">
                        CỬA HÀNG
                    </p>
                    <p className="product-img-content2">
                        Trang chủ<i>.</i>Cửa hàng
                    </p>
                </div>

                <div className="page-product-search">
                    <input
                        type="text"
                        className='inp-search'
                        placeholder='Tím kiếm'
                        onChange={ handleSearch }
                    />
                    <div className="search-icon">
                        <AiOutlineSearch />
                    </div>
                    <select className='search-select' onChange={ handleSortChange }>
                        <option value="" selected>Chọn để sắp xếp</option>
                        <option value="price-desc">Giá tiền nhiều nhất</option>
                        <option value="price-asc">Giá tiền thấp nhất</option>
                    </select>
                </div>

                <div className='page-product-item'>
                    <div className="product_buy_page">
                        { sortedProducts
                            .filter( ( product ) =>
                                product.name.toLowerCase().includes( searchTerm.toLowerCase() )
                            )
                            .map( ( product ) => (
                                <div className='banhmy-product-page' key={ product.id }>
                                    <img className='product-img-page' src={ product.image } alt={ product.name } />
                                    <div className='buy-icon-page'></div>
                                    <div
                                        className="buy-icon-btn-page"
                                        onClick={ () => onOpenImage( product ) }
                                    >
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div className='title-price-page'>
                                        <p className='title-price-content-page'>{ product.name }</p>
                                        <p className='title-price-item-page'>{ product.price.toLocaleString() } VNĐ</p>
                                    </div>
                                </div>
                            ) ) }
                    </div>

                    <div className={ openImage ? "modelOpen" : "modelClose" }>
                        <div className="onClickImage">
                            <div className="detail-content">
                                <div ref={ menuRef } className="ctn-detail-container">
                                    { selectedProduct && (
                                        <>
                                            <div className="detail-product">
                                                <img src={ selectedProduct.image } alt={ selectedProduct.name } />
                                            </div>
                                            <h2 className="tilte-detail">{ selectedProduct.name }</h2>
                                            <p className="price-detail">{ selectedProduct.price.toLocaleString() } VNĐ</p>
                                            <p className="nd-detail">{ selectedProduct.content }</p>
                                            <button
                                                key={ selectedProduct.id }
                                                className="btn-detail"
                                                onClick={ () => handleAddToCart( selectedProduct ) }
                                            >
                                                <BsCart4 /> MUA NGAY
                                            </button>
                                            <br />
                                            <div className="productToping">
                                                <div className="leftProduct">

                                                    <div className="cay1">
                                                        <label style={ { marginRight: "30px" } }><i class="fa-solid fa-pepper-hot spicyIcon"></i>Cay</label>
                                                    </div>
                                                    <>
                                                        <Radio.Group
                                                            onChange={ onChange1 }
                                                            value={ spicy }
                                                        >
                                                            <Space direction='vertical'>
                                                                <Radio value="Cay">Cay</Radio>
                                                                <Radio value="Không Cay">Không Cay</Radio>
                                                            </Space>
                                                        </Radio.Group>
                                                    </>

                                                </div>
                                                <div className="rightProduct">
                                                    <div className="rau1">
                                                        <label style={ { marginRight: "30px" } }><DiCoda className='rau' />Rau</label>
                                                    </div>
                                                    <Radio.Group
                                                        className='ant-radio-group-rau'
                                                        onChange={ onChange2 }
                                                        value={ vegetable }
                                                    >
                                                        <Space direction='vertical'>
                                                            <Radio value="Rau">Rau</Radio>
                                                            <Radio value="Không Rau">Không Rau</Radio>
                                                        </Space>
                                                    </Radio.Group>


                                                </div>
                                            </div>

                                        </>
                                    ) }


                                </div>
                            </div>
                            <button
                                className="onClickImage_btn"
                                onClick={ () => setOpenImage( false ) }
                            >
                                X
                            </button>
                        </div>
                        <div className="onClickImage_test" ></div>
                    </div>
                    <ToastContainer />
                </div>
                <div className='paging'>
                    <button className='paging-btn'>1</button>
                    <button className='paging-btn'>2</button>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
