import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Divider, Typography } from "antd"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useState } from 'react';
import { registerRequest } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import './style.css';


function Register ()
{
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const click = ( values ) =>
    {
        console.log( values )
        dispatch(
            registerRequest(
                {
                    data: {
                        user: values.user,
                        email: values.email,
                        password: values.password
                    }
                    ,
                    callback: () => navigate( "/login" )
                }
            )
        )
    }

    return (
        <div className="login">
            <Form className="loginForm"
                onFinish={ ( values ) => click( values ) }
                autoComplete='off'
                name='registerFrom'
            >
                <Typography.Title style={ { color: "#ebb576", fontWeight: "bold" } }>ĐĂNG KÝ</Typography.Title>
                <Form.Item
                    rules={ [ {
                        required: true,
                        message: "vui lòng nhập tên người dùng"
                    },
                    {
                        min: 6,
                        message: "Tên người dùng phải có ít nhất 6 ký tự",
                    },
                    ] }
                    name={ "user" }
                >
                    <Input
                        style={ { border: "#ebb576" } }
                        placeholder=' Nhập tên người dùng'
                        prefix={ <UserOutlined /> }
                    />
                </Form.Item>
                <Form.Item
                    rules={ [ {
                        required: true,
                        message: "vui lòng nhập Email"
                    },
                    {
                        type: 'email',
                        message: "vui lòng nhập đúng Email"
                    } ] }
                    name={ "email" }
                >
                    <Input
                        style={ { border: "#ebb576" } }
                        placeholder=' Nhập Email của bạn'
                        prefix={ <MailOutlined /> }
                    />
                </Form.Item>
                <Form.Item
                    rules={ [ {
                        required: true,
                        message: "vui lòng nhập mật khẩu"
                    } ] }
                    name={ 'password' }>
                    <Input.Password
                        style={ { border: "#ebb576" } }
                        placeholder='Nhập mật Khẩu'
                        prefix={ <LockOutlined /> }
                    />
                </Form.Item>
                <Form.Item
                    rules={ [ {
                        required: true,
                        message: "vui lòng nhập lại mật khẩu"
                    },
                    ( { getFieldValue } ) => ( {
                        validator ( _, value )
                        {
                            if ( !value || getFieldValue( "password" ) === value )
                            {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error( "Mật khẩu bạn vừa nhập không trùng khớp!" )
                            );
                        },
                    } ), ] }
                    name={ 'confirm' }
                    hasFeedback
                >
                    <Input.Password
                        style={ { border: "#ebb576" } }
                        placeholder='Nhập lại mật Khẩu'
                        prefix={ <LockOutlined /> }
                    />
                </Form.Item>
                <Button style={ { background: "#ebb576" } } type='primary' htmlType='submit' block >
                    Đăng ký
                </Button>
                <Divider style={ { borderColor: "#ebb576", color: "#ebb576" } }>Đăng nhập bằng</Divider>
                <div className='socialogin'>
                    <AiOutlineGoogle
                        className='sociaIcon'
                        style={ { color: "red" } }
                    />
                    <AiFillFacebook
                        className='sociaIcon'
                        style={ { color: "blue" } }
                    />
                    <AiOutlineTwitter
                        className='sociaIcon'
                        style={ { color: "cyan" } }
                    />
                </div>
                <div>
                    <p className='textColor'>Đăng nhập tài khoản.
                        <Link to="/login" className="test_rgt">
                            Đăng nhập
                        </Link></p>
                </div>
            </Form>
        </div>
    );
}

export default Register;
