import './style.css'
import data from '../../../db/data.json'
import { BsCart4 } from "react-icons/bs";
import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/orderSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { current } from "@reduxjs/toolkit";



function LatestProducts ()
{
    const dispatch = useDispatch();

    const [ openImage, setOpenImage ] = useState( false )

    const [ selectedProduct, setSelectedProduct ] = useState( null );


    const handleAddToCart = ( product ) =>
    {
        dispatch(
            addProduct( {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: product.quantity
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



    const LatestProducts = data.latestProducts;

    

    return (
        <>
            <div className="latestProducts">
                <h2 className='title-h2'>
                    Latest Products
                </h2>
                <div className='page-product-item'>
                    <div className="product_buy_page">

                        { LatestProducts.map( ( product ) => (
                            <div className='banhmy-product-page' key={ product.id }>
                                <img className='product-img-page' src={ product.image } />
                                <div className='buy-icon-page'></div>
                                <div className="buy-icon-btn-page"
                                    onClick={ () => onOpenImage( product )
                                    }>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className='title-price-page'>
                                    <p className='title-price-content-page'>{ product.name }</p>
                                    <p className='title-price-item-page'>{ product.price.toLocaleString() }VNĐ</p>
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
                                                <img src={ selectedProduct.image } alt="" />
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
               
            </div>
        </>
    );
}

export default LatestProducts;
