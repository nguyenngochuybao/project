import './style.css'
import { Form, Input, Button, Space, } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { BiUser } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { BsBuildingFillCheck, BsKeyFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { updateUserInfoAction, getCityListAction } from '../../../../redux/action';

import styled, { css } from 'styled-components';


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

    ${ ( props ) =>
        props.active &&
        css`
        background-color: #ebb576;
        `}
`

function Info ()
{
    const [ AccountForm ] = Form.useForm();

    const { pathname } = useLocation()

    const { userInfo } = useSelector( ( state ) => state.auth )


    const dispatch = useDispatch();


    const initialValues = {
        id: userInfo.data.id,
        fullName: userInfo.data.user,
        email: userInfo.data.email,
    };

    useEffect( () =>
    {
        if ( userInfo.data.id )
        {
            AccountForm.resetFields();
        }
    }, [ userInfo.data ] );

    useEffect( () =>
    {
        dispatch( getCityListAction() );
    }, [] );

    const handleSubmitAccountForm = ( values ) =>
    {
        const { fullName } = values;
        dispatch(
            updateUserInfoAction( {
                id: initialValues.id,
                user: fullName,
            } )
        );
    };
    console.log( updateUserInfoAction )


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
                                <MenuUserPassWord active={ pathname === "/PassWord" }>
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
                            name="AccountForm"
                            form={ AccountForm }
                            initialValues={ initialValues }
                            onFinish={ ( values ) => handleSubmitAccountForm( values ) }
                        >
                            <Space>
                                <Form.Item
                                    label="TÊN NGƯỜI DÙNG"
                                    name="fullName"
                                    rules={ [
                                        {
                                            required: true,
                                            message: "Nhập tên người dùng vào",
                                        }
                                        ,
                                        {
                                            min: 6,
                                            message: "Tên người dùng phải có ít nhất 6 ký tự",
                                        },
                                    ] }
                                >
                                    <Input
                                        prefix={ <UserOutlined /> }
                                        className='inpPassWord'

                                    ></Input>
                                </Form.Item>
                            </Space>
                            <Space>
                                <Form.Item
                                    label="EMAIL CỦA BẠN"
                                    name="email"
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
                                    <Input disabled
                                        prefix={ <MailOutlined /> }
                                        className='inpPassWord'
                                    ></Input>
                                </Form.Item>
                            </Space>
                            <Button style={ { background: "#ebb576" } } type='primary' htmlType='submit'  >
                                Đổi thông tin
                            </Button>
                        </Form>
                    </div>
                </>
            ) : ( <></> ) }
        </div>
    )
}

export default Info;