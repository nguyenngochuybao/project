import './style.css'
import { CiCircleRemove } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeProduct, updateCartItem, removeAllProducts } from '../../redux/orderSlice';




function Cart ()
{


    const navigate = useNavigate();

    const buyNavigate = () =>
    {
        navigate( "/order" )
    }

    const handleNavigate = () =>
    {
        navigate( "/product" )
    }


    const dispatch = useDispatch();
    const { cartList } = useSelector( ( state ) => state.order );


    const handleRemove = ( product ) =>
    {
        dispatch( removeProduct( { id: product.id } ) );
    };

    const handleRemoveAll = () =>
    {
        dispatch(
            removeAllProducts()
        );

    };


    const total = cartList?.reduce( ( acc, product ) =>
        acc + product.price * product.quantity, 0 );

    return (
        <div className="page-order">
            <div className='page-order-img'>
                <p className="order-img-content1">
                    GIỎ HÀNG
                </p>
                <p className="order-img-content2">
                    Trang chủ<i>.</i>Giỏ hàng
                </p>
            </div>
            <div className='page-order-item'>
                <h2 className='title-h2'>
                    GIỎ HÀNG
                </h2>
                { cartList && cartList.length > 0 ? (
                    <div className="order_cart">
                        <table className="border_table">
                            <tr className="order_product_title">
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th className="order_sanpham">SẢN PHẨM</th>
                                <th>GHI CHÚ</th>
                                <th>GIÁ</th>
                                <th>SỐ LƯỢNG</th>
                                <th>TỔNG CỘNG</th>
                            </tr>
                            { cartList?.map( ( product ) => (
                                <tr key={ product.id }>
                                    <td className="icon_remove_td">
                                        <CiCircleRemove className="icon_remove" onClick={ () => handleRemove( product ) } />
                                    </td>
                                    <td className="img_item_order">
                                        <img src={ product.image } className="img-order" alt="" />
                                    </td>
                                    <td className="order_product_item">{ product.name }</td>
                                    <td className='attention'>
                                        <div className="spicy"><p>{ product.spicy }</p></div>
                                        <div className="vegetable"><p>{ product.vegetable }</p></div>
                                    </td>
                                    <td className="order_product_price">{ product.price.toLocaleString() } VNĐ</td>
                                    <td className="order_product_quality">
                                        <tr className="up_down">
                                            <td className="down" onClick={ () => dispatch( updateCartItem(
                                                {
                                                    id: product.id,
                                                    quantity: product.quantity > 1 ? product.quantity - 1 : 1,
                                                }
                                            ) ) }>
                                                -
                                            </td>
                                            <td className="up_down_item">{ product.quantity }</td>
                                            <td className="up" onClick={ () => dispatch( updateCartItem(
                                                {
                                                    id: product.id,
                                                    quantity: product.quantity + 1,
                                                }
                                            ) ) }>
                                                +
                                            </td>
                                        </tr>
                                    </td>
                                    <td className="order_product_total">{ ( product.price * product.quantity ).toLocaleString() } VNĐ</td>
                                </tr>
                            ) ) }
                        </table>
                        <div className="total">
                            <p>Tổng giá</p>
                            <p>{ total.toLocaleString() } VNĐ</p>
                        </div>
                        <div className='cartBuyFrom'>
                            <button className="removeAll" onClick={ () => handleRemoveAll() }>Xóa tất cả</button>
                            <button className="buyCart" onClick={ () => buyNavigate() }>Mua</button>
                        </div>
                    </div>
                ) :
                    <div className="order_cart">
                        <div className='boxCart'>
                            <img className='imgBoxCart' src="data:image/png;base64,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" />
                        </div>
                        <div className='testBoxCart'>
                            <p>Giỏ hàng của bạn còn trống</p>
                            <button className='btnBoxCart' onClick={ () => handleNavigate() }>Mua ngay</button>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Cart;