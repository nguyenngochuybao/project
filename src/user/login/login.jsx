import { Link } from 'react-router-dom';

import './style.css';
import { BsFillLockFill } from 'react-icons/bs';

function Login ()
{
   

    return (
        <>
            <div className="login">
                <h1>
                    <div className="form_login">
                        <h3>ĐĂNG NHẬP</h3>
                        <div className="inp_login">
                            <input type="email" placeholder="Tài khoản"  />
                            <i className="fa-solid fa-envelope icon_login_mail"></i>
                            <br />
                            <input type="password" placeholder="Mật khẩu" />
                            <BsFillLockFill className="icon_login_pass" />
                        </div>
                        <div className="forgot_pass">
                            <div className="forgot">
                                <input type="checkbox" />
                                Nhớ tài khoản
                            </div>
                            <div className="forgot">
                                <a className="test_rgt">Quên mật khẩu</a>
                            </div>
                        </div>
                        <Link to="/home">
                            <button className="login_acc">
                                Đăng nhập
                            </button>
                        </Link>
                    
                        <br />
                        <div className="rgt">
                            <p>
                                Bạn đã có tài khoản chưa?.
                                <a>
                                    <Link to="/register" className="test_rgt">
                                        Đăng ký
                                    </Link>
                                </a>
                            </p>
                        </div>
                    </div>
                </h1>
            </div>
        </>
    );
}

export default Login;
