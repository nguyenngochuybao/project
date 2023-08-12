import './style.css'
import { CiCircleRemove } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { removeProduct, updateCartItem } from '../../redux/orderSlice';



function Cart ()
{

    const dispatch = useDispatch();
    const { cartList } = useSelector( ( state ) => state.order );
    const [ quantities, setQuantities ] = useState( {} );


    // useEffect( () =>
    // {
    //     const savedCartItems = localStorage.getItem( 'cartItems' );
    //     if ( savedCartItems )
    //     {
    //         setQuantities( JSON.parse( savedCartItems ) );
    //     }
    // }, [] );

    // // Save cart items to localStorage whenever quantities change
    // useEffect( () =>
    // {
    //     localStorage.setItem( 'cartItems', JSON.stringify( quantities ) );
    // }, [ quantities ] );

    


    const handleRemove = ( product ) =>
    {
        dispatch( removeProduct( { id: product.id } ) );
    };





    // Calculate the total price based on the quantities and prices of the products
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
                <div className="order_cart">
                    <table className="border_table">
                        <tr className="order_product_title">
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th className="order_sanpham">SẢN PHẨM</th>
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
                                <td className="order_product_price">{ product.price.toLocaleString() } VNĐ</td>
                                <td className="order_product_quality">
                                    <tr className="up_down">
                                        <td className="down" onClick={ () => dispatch( updateCartItem(
                                            {
                                                id: product.id,
                                                quantity: product.quantity > 1 ? product.quantity - 1 :1,
                                            }   
                                        ))}>
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
                                <td className="order_product_total">{ (product.price * product.quantity).toLocaleString() } VNĐ</td>
                            </tr>
                        ) ) }
                    </table>
                    <div className="total">
                        <p>Tổng giá</p>
                        <p>{ total.toLocaleString() } VNĐ</p>
                    </div>
                    <button className="buy">Mua</button>
                </div>

            </div>
        </div>
    )
}

export default Cart;