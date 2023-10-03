import './style.css'
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { BsBuildingFillCheck, BsKeyFill } from "react-icons/bs";
import React, { Component } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loguotAction } from '../../../redux/action';





function Menu ()
{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () =>
    {
        dispatch( loguotAction() );
        navigate( "/login" );
    };

    const { userInfo } = useSelector( ( state ) => state.auth )
    console.log( userInfo.data )

    return (
        <>

            <div className="menu">
                <div className="menu-item">
                    <Link to={ '/' } className='menu-nav-item'><AiFillHome className='icon-menu' /> TRANG CHỦ</Link>
                </div>
                <div className="menu-item">
                    <Link to={ '/product' } className='menu-nav-item'><i class="fa-solid fa-shop icon-menu"></i> CỬA HÀNG</Link>
                </div>
                <div className="menu-item">
                    <Link to={ '/cart' } className='menu-nav-item'>
                        <button className='menu-nav-item-btn'>
                            <AiFillShopping className='icon-menu' /> GIỎ HÀNG
                        </button>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link to={ '/order' } className='menu-nav-item'>
                        {/* <button className='menu-nav-item-btn'>
                            <BsBuildingFillCheck className='icon-menu' /> THANH TOÁN
                        </button> */}
                    </Link>
                </div>
            </div>
            <div className='user'>
                {/* <div className='user-cart'>
                    <Link to={ "/cart" }>
                        <AiOutlineShopping className='user-cart-icon' />
                    </Link>
                </div> */}
                <div className="ctn_user">
                    { userInfo.data.id ? (
                        <>
                            <div className='name_icon_user'>
                                <BiUser className="iconUser" />
                                <div className="nameUser">
                                    { userInfo.data.user }
                                </div>
                                <div className='userMenu'>
                                    <Link to={"info"}>
                                        <div className="thongtin_sanpham">
                                            <div className='bgrIcon1'>
                                                <AiOutlineUser />
                                            </div>
                                            <p>Thông tin người dùng</p>
                                        </div>
                                    </Link>
                                    <Link to={"/PassWord"}>
                                        <div className='iconPass'>
                                            <div className='bgrIcon2'>
                                                <BsKeyFill />
                                            </div>
                                            <p>Đổi mật khẩu</p>
                                        </div>
                                    </Link>
                                    <div className='logout'>
                                        <div className='bgrIcon3'>
                                            <BiLogIn />
                                        </div>
                                        <p onClick={ () => handleLogout() }>Đăng xuất</p>
                                    </div>
                                </div>
                            </div>

                        </>

                    ) :
                        (
                            <div className="user_dkdn">
                                <Link to={ "/register" } className="user_dkdn"><p>Đăng kí</p></Link>
                                <Link to={ "/login" } className="user_dkdn"><p>Đăng nhập</p></Link>
                            </div>
                        )
                    }


                </div>
            </div>
        </>
    )
}

export default Menu;