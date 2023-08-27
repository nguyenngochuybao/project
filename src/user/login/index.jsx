import { Link } from 'react-router-dom';
import { Form, Input, Button, Divider, Typography } from "antd"
import { AiOutlineGoogle, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import './style.css';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { loginRequest } from '../../redux/auth';
function Login ()
{

    const dispatch = useDispatch();
    const navigate = useNavigate()

    
    const click = ( values ) =>
    {
        console.log( values )
        dispatch(
            loginRequest(
                {
                    data: {
                        Email: values.Email,
                        password: values.password
                    }
                    ,
                    callback: () => navigate( "/home" )
                }
            )
        )
    }

    return (
        <>
            <div className="appBg">
                <Form className="loginForm" onFinish={ (values)=> click(values) }>
                    <Typography.Title style={ { color: "#ebb576",fontWeight: "bold" } }>ĐĂNG NHẬP</Typography.Title>
                    <Form.Item
                        rules={ [ {
                            required: true,
                            type: 'email',
                            message: "vui lòng nhập lại Email"
                        } ] }
                      
                        name={ "Email" }
                    >
                        <Input
                            style={ { border: "#ebb576" } }
                            placeholder=' Nhập tên Email'
                            prefix={ <MailOutlined /> }
                        />
                    </Form.Item>
                    <Form.Item
                        rules={ [ {
                            required: true,
                            message: "vui lòng nhập lại mật khẩu"
                        } ] }
                        name={ 'password' }>
                        <Input.Password
                            style={ { border: "#ebb576"}}
                            placeholder='Nhập mật Khẩu'
                            prefix={ <LockOutlined /> }
                        />
                    </Form.Item>
                    {/* <Link to={ "/home" }>
                        <Button style={ { background: "#ebb576"}} type='primary' htmlType='submit' block>
                            Đăng nhập
                        </Button>
                    </Link> */}
                    <Button style={ { background: "#ebb576" } } type='primary' htmlType='submit' block >
                        Đăng nhập
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
                        <p className='textColor'>Bạn đã có tài khoản chưa?.
                            <Link to="/register" className="test_rgt">
                                Đăng ký
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
