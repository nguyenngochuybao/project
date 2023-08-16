import './style.css';
import { CiCircleRemove } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { removeProduct, updateCartItem } from '../../redux/orderSlice';




function OrderPage ()
{
    const dispatch = useDispatch();
    const { cartList } = useSelector( ( state ) => state.order );

    const handleRemove = ( product ) =>
    {
        dispatch( removeProduct( { id: product.id } ) );
    };

    const total = cartList?.reduce( ( acc, product ) =>
        acc + product.price * product.quantity, 0 );

    return (
        <div className="page-order">
            <div className='page-order-img'>
                <p className="order-img-content1">
                    THANH TOÁN
                </p>
                <p className="order-img-content2">
                    Trang chủ<i>.</i>Thanh toán
                </p>
            </div>
            <div className='thanh_toan'>
                <h2 className='title-h2'>
                    ĐƠN HÀNG THANH TOÁN
                </h2>
                <div className="order_cart">
                    <table className="border_table">

                        { cartList?.map( ( product ) => (
                            <tr key={ product.id }>
                                <td className="icon_remove_td">
                                    <CiCircleRemove className="icon_remove" onClick={ () => handleRemove( product ) } />
                                </td>
                                <td className="img_item_order">
                                    <img src={ product.image } className="img-order" alt="" />
                                </td>

                                <td className="order_product_item">{ product.name }</td>
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
                    <div className='order_info'>
                        <h2 className='title-h2'>
                            THÔNG TIN NGƯỜI MUA
                        </h2>
                        <div className="form_order">
                            <input type="text" className='inp_orders' placeholder='Họ và tên' />
                            <input type="text" className='inp_orders' placeholder='Số điện thoại' />
                            <br />
                            <input type="text" className='inp_order' placeholder='Địa chỉ Email' />
                            <br />
                            <input type="text" className='inp_order' placeholder='Địa chỉ nhận hàng' />
                            <br />
                            <textarea placeholder='Ghi chú đơn hàng' className='inp_test_order'></textarea>
                            <br />
                            <div className='sale_text'>
                                <p className='sale_text_p'>* Mã giảm giá</p>
                            </div>
                            <input type="text" className='sale_order' placeholder='Mã giảm giá' />
                            <button className='btn_sale'>Áp dụng</button>
                            <div className="total_order">          
                                <p className='sale_text_p'>Tổng giá:</p> 
                                <p className='order_vnd'>{ total.toLocaleString() } VNĐ</p>
                            </div>
                            <button className='thanh_toan_ngay'>
                                THANH TOÁN NGAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default OrderPage;