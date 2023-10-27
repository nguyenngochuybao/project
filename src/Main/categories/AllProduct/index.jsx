import './style.css';
import data from "../../../db/data.json";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/orderSlice';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect, useRef } from "react";
import { DiCoda } from "react-icons/di";
import 'react-toastify/dist/ReactToastify.css';


function AllProducts ()
{
    const products = data.products;

    const [ SelectedCay, setSelectedCay ] = useState( 'cay1' );
    const [ SelectedRau, setSelectedRau ] = useState( 'rau1' );

    const handleRadioChange = ( key, event ) =>
    {
        if ( key === "cay" )
        {
            setSelectedCay( event.target.value )
        } else if ( key === "rau" )
        {
            setSelectedRau( event.target.value )
        } 
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



    return (
        <>
            <div className="page-product">
                <h2 className='title-h2'>
                    Tất Cả Các Sản Phẩm
                </h2>
                <div className='page-product-item'>
                    <div className="product_buy_page">
                        { 
                            
                            products.map( ( product ) => (
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
                                                    <label><i class="fa-solid fa-pepper-hot spicy"></i>Cay</label>
                                                    <input
                                                        type="radio"
                                                        name='cay'
                                                        value="cay1"
                                                        checked={ SelectedCay === 'cay1' }
                                                        onChange={ ( value ) => handleRadioChange( "cay", value ) }
                                                    />
                                                    <br />
                                                    <label><DiCoda className='rau' />Rau</label>
                                                    <input
                                                        type="radio"
                                                        name='rau'
                                                        value="rau1"
                                                        checked={ SelectedRau === 'rau1' }
                                                        onChange={ ( value ) => handleRadioChange( "rau", value ) }
                                                    />
                                                    <br />

                                                   
                                                </div>
                                                <div className="rightProduct">
                                                    <label className='koCay'>Không Cay</label>
                                                    <input
                                                        type="radio"
                                                        name='cay'
                                                        value="cay2"
                                                        checked={ SelectedCay === 'cay2' }
                                                        onChange={ ( value ) => handleRadioChange( "cay", value ) }
                                                    />
                                                    <label className='koCay'>Không Rau</label>
                                                    <input
                                                        type="radio"
                                                        name='rau'
                                                        value="rau2"
                                                        checked={ SelectedRau === 'rau2' }
                                                        onChange={ ( value ) => handleRadioChange( "rau", value ) }
                                                    />
                                                    
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
            </div>
        </>
    );
}

export default AllProducts;
