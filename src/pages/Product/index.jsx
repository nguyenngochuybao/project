import './style.css';
import data from "../../db/data.json";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/orderSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProductPage ()
{
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
        if ( sortOption === "price-desc" )
        {
            return b.price - a.price;
        } else if ( sortOption === "price-asc" )
        {
            return a.price - b.price;
        }  else
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
                                <div className="ctn-detail-container">
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
                                        </>
                                    ) }
                                    <br />
                                    <textarea className="text-detail"></textarea>
                                </div>
                            </div>
                            <button
                                className="onClickImage_btn"
                                onClick={ () => setOpenImage( false ) }
                            >
                                X
                            </button>
                        </div>
                        <div className="onClickImage_test"></div>
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
