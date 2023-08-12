import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { BsFillLockFill } from 'react-icons/bs';

function Register ()
{
    const navigate = useNavigate();
    const [ username, setUsername ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ usernameError, setUsernameError ] = useState( '' );
    const [ emailError, setEmailError ] = useState( '' );
    const [ passwordError, setPasswordError ] = useState( '' );

                                       
    const handleRegister = () =>
    {
        // Reset previous error messages
        setUsernameError( '' );
        setEmailError( '' );
        setPasswordError( '' );

        // Validate input fields
        if ( username.trim() === '' )
        {
            setUsernameError( 'Người dùng cần nhập tài khoản' );
        }
        if ( email.trim() === '' )
        {
            setEmailError( 'Người dùng cần nhập email' );
        }
        if ( password.trim() === '' )
        {
            setPasswordError( 'Người dùng cần nhập mật khẩu' );
        }

        // Check if there are any errors
        if ( username.trim() === '' || email.trim() === '' || password.trim() === '' )
        {
            // Ngăn chặn chuyển hướng nếu có lỗi
            return;
        } else
        {
            // Perform registration logic here
            console.log( 'Registration successful' );
            navigate( '/' ); // Chuyển hướng đến "/login"
        }
    };

    return (
        <div className="login">
            <h1>
                <div className="form_register">
                    <h3>ĐĂNG KÝ</h3>
                    <div className="inp_login">
                        <input
                            type="text"
                            placeholder="Tên tài khoản"
                            value={ username }
                            onChange={ ( e ) => setUsername( e.target.value ) }
                        />
                        <i className="fa-solid fa-user icon_register_user"></i>
                        <div className="bgr_error">
                            { usernameError && <p className="error">{ usernameError }</p> }
                        </div>
                        <input
                            type="email"
                            placeholder="Tài khoản"
                            value={ email }
                            onChange={ ( e ) => setEmail( e.target.value ) }
                        />
                        <i className="fa-solid fa-envelope icon_register_mail"></i>
                        <div className="bgr_error">
                            { emailError && <p className="error">{ emailError }</p> }
                        </div>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={ password }
                            onChange={ ( e ) => setPassword( e.target.value ) }
                        />
                        <BsFillLockFill className="icon_register_pass" />
                        <div className="bgr_error">
                            { passwordError && <p className="error">{ passwordError }</p> }
                        </div>
                    </div>
                    <div className="forgot_pass">
                        <div className="forgot">
                            <input type="checkbox" />
                            Tôi đồng ý với các Điều khoản & Điều kiện
                        </div>
                    </div>
                    <button className="login_acc" onClick={ handleRegister }>
                        Đăng ký
                    </button>
                    <br />
                    <div className="rgt">
                        <p>
                            Đặng nhập tài khoản.
                            <a>
                                <Link to="/" className="test_rgt">
                                    Đăng nhập
                                </Link>
                            </a>
                        </p>
                    </div>
                </div>
            </h1>
        </div>
    );
}

export default Register;
