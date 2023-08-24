import './style.css';
import { CiCircleRemove } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { removeProduct, updateCartItem } from '../../redux/orderSlice';
import { Form, Input, Space, Button, Divider, Typography } from "antd"




function OrderPage ()
{

    const { TextArea } = Input;

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

                                </td>
                                <td className="img_item_order">
                                    <img src={ product.image } className="img-order" alt="" />
                                </td>

                                <td className="order_product_item">{ product.name }</td>
                                <td className="order_product_price">{ product.price.toLocaleString() } VNĐ</td>
                                <td className="order_product_quality">
                                    <tr className="up_down">

                                        <td className="up_down_item">{ product.quantity }</td>

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
                        <Form className="form_order" layout="vertical">
                            <Space size={ 10 }>
                                <Form.Item
                                    label="Họ và tên"
                                    name={ "name" }
                                    rules={ [ {
                                        required: true,
                                        message: "Vui lòng nhập vào"
                                    } ] }
                                >
                                    <Input
                                        className='inpAntd'
                                        placeholder='Họ và tên'

                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Số điện thoại"
                                    name={ "phoneNumber" }
                                    rules={ [ {
                                        required: true,
                                        message: "Vui lòng nhập vào"
                                    } ] }
                                >
                                    <Input
                                        className='inpAntd'
                                        placeholder='Họ và tên'
                                    />
                                </Form.Item>

                            </Space>
                            <Space>
                                <Form.Item
                                    className='labelAntd'
                                    label="Địa chỉ Email"
                                    name={ "Email" }
                                    hasFeedback
                                    rules={ [ {
                                        required: true,
                                        message: "vui lòng nhập Email"
                                    },
                                    {
                                        type: 'email',
                                        message: "vui lòng nhập đúng Email"
                                    } ] }
                                >
                                    <Input
                                        className='inpAntd2'
                                        placeholder='Email của bạn'

                                    />
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item
                                    className='labelAntd'
                                    label="Địa chỉ Nhận hàng"
                                    name={ "text" }
                                    rules={ [ {
                                        required: true,
                                        message: "Vui lòng nhập vào"
                                    } ] }
                                >
                                    <Input
                                        className='inpAntd2'
                                        placeholder='Địa chỉ nhập hàng'

                                    />
                                </Form.Item>
                            </Space>
                            <TextArea
                                rows={ 4 }
                                className='textAntd'
                                placeholder='Ghi chú đơn hàng'
                            />
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
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default OrderPage;