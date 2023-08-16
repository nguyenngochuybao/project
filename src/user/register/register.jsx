import { Link } from 'react-router-dom';
import { Form, Input, Button, Divider, Typography } from "antd"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import './style.css';


function Register ()
{


    return (
        <div className="login">
            <Form className="loginForm" onFinish={ Register }>
                <Typography.Title style={ { color: "#ebb576", fontWeight: "bold" } }>ĐĂNG KÝ</Typography.Title>
                <Form.Item
                    rules={ [ {
                        required: true,
                        type: 'email',
                        message: "vui lòng nhập tên người dùng"
                    } ] }
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
                        type: 'email',
                        message: "vui lòng nhập lại tài khoản"
                    } ] }
                    name={ "Email" }
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
                        message: "vui lòng nhập lại mật khẩu"
                    } ] }
                    name={ 'Pass' }>
                    <Input.Password
                        style={ { border: "#ebb576" } }
                        placeholder='Nhập mật Khẩu'
                        prefix={ <LockOutlined /> }
                    />
                </Form.Item>
                <Button style={ { background: "#ebb576" } } type='primary' htmlType='submit' block>
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
                        <Link to="/" className="test_rgt">
                            Đăng nhập
                        </Link></p>
                </div>
            </Form>
        </div>
    );
}

export default Register;
