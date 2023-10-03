import './style.css'
import { Form, Input, Button, Space, } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { BiUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBuildingFillCheck, BsKeyFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { changePasswordAction } from '../../../../redux/action';

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const MenuUserPassWord = styled.div`
    display: flex;
    font-weight: bold;
    text-align: center;
    align-items: center;
    width: 95%;
    height: 40px;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
    margin-top: 15px;

    &:hover {
    background-color: #ebb576;
    }

    ${( props ) =>
        props.active &&
        css`
        background-color: #ebb576;
        `}
`

function Password ()
{
    const [ changePasswordForm ] = Form.useForm();
    const { userInfo, changePasswordData } = useSelector( ( state ) => state.auth );
    const dispatch = useDispatch();
    

    useEffect( () =>
    {
        if ( changePasswordData.error )
        {
            changePasswordForm.setFields( [
                {
                    name: "password",
                    errors: [ "Mật khẩu đã tồn tại!" ],
                },
            ] );
        }
    }, [ changePasswordData.error ] );

    const handleChangePassword = ( values ) =>
    {
        dispatch(
            changePasswordAction( {
                id: userInfo.data.id,
                data: {
                    email: userInfo.data.email,
                    password: values.password,
                    newPassword: values.newPassword,
                },
                callback: () => changePasswordForm.resetFields(),
            } )
        );
    };

    const { pathname } = useLocation()



    return (
        <div className="userPassWord">
            { userInfo.data.id ? (
                <>
                    <div className='userPassWordLeft'>
                        <div className="menuLeft">
                            <div className="menuNameUser">
                                <div className="menuNameUserLeft">
                                    <BiUser className='menuNameUserIcon' />
                                </div>
                                <div className="menuNameUserRight">
                                    <div className='menuNameUserTop'>
                                        Tên của bạn
                                    </div>
                                    <hr className='hr' />
                                    <div className='menuNameUserBottom'>
                                        { userInfo.data.user }
                                    </div>
                                </div>
                            </div>
                            <Link to={ "/info" }>
                                <MenuUserPassWord active={ pathname === "/info" }>
                                    <div className='bgrIcon1'>
                                        <AiOutlineUser />
                                    </div>
                                    <p className='text123'>Thông tin người dùng</p>
                                </MenuUserPassWord>
                            </Link>
                            <Link to={ "/PassWord" }>
                                <MenuUserPassWord active={ pathname === "/PassWord"}>
                                    <div className='bgrIcon2'>
                                        <BsKeyFill />
                                    </div>
                                    <p className='text123'>Đổi mật khẩu</p>
                                </MenuUserPassWord>
                            </Link>
                        </div>
                    </div>
                    <div className='userPassWordRight'>
                        <Form
                            className='passWordRight'
                            layout="vertical"
                            name="changePasswordForm"
                            form={ changePasswordForm }
                            onFinish={ ( values ) => handleChangePassword( values ) }
                        >
                            <Space>
                                <Form.Item
                                    label="MẬT KHẨU CŨ"
                                    name="password"
                                    rules={ [
                                        {
                                            required: true,
                                            message: "Nhập lại mật khẩu",
                                        }
                                        ,
                                        {
                                            min: 6,
                                            message: "Mật khẩu phải có ít nhất 6 ký tự",
                                        },
                                    ] }
                                >
                                    <Input.Password
                                        placeholder='Nhập mật khẩu cũ'
                                        prefix={ <LockOutlined /> }
                                        className='inpPassWord'
                                    ></Input.Password>
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item
                                    label="MẬT KHẨU MỚI"
                                    name="newPassword"
                                    rules={ [
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu mới!",
                                        },
                                        {
                                            min: 6,
                                            message: "Mật khẩu phải có ít nhất 6 ký tự",
                                        },
                                    ] }
                                >
                                    <Input.Password
                                        placeholder='Nhập mật khẩu mới'
                                        prefix={ <LockOutlined /> }
                                        className='inpPassWord'
                                    ></Input.Password>
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item
                                    label="NHẬP LẠI MẬT KHẨU MỚI"
                                    name="confirmNewPassword"
                                    hasFeedback
                                    rules={ [
                                        {
                                            required: true,
                                            message: "Vui lòng nhập lại mật khẩu mới!",
                                        },
                                        ( { getFieldValue } ) => ( {
                                            validator ( _, value )
                                            {
                                                if ( !value || getFieldValue( "newPassword" ) === value )
                                                {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    "Mật khẩu mới vừa nhập không trùng khớp!"
                                                );
                                            },
                                        } ),
                                    ] }
                                >
                                    <Input.Password
                                        placeholder='Nhập mật lại mật khẩu mới'
                                        prefix={ <LockOutlined /> }
                                        className='inpPassWord'
                                    ></Input.Password>
                                </Form.Item>
                            </Space>
                            <Button
                                style={ { background: "#ebb576" } }
                                type='primary'
                                htmlType='submit'
                                loading={ changePasswordData.load }
                            >
                                Đổi mật khẩu
                            </Button>
                        </Form>
                    </div>
                </>
            ) : ( <></> ) }
        </div>
    )
}

export default Password;