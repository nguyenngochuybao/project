import './style.css'
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { BsBuildingFillCheck } from "react-icons/bs";
import React, { Component } from "react";




function Menu ()
{
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
                        <button className='menu-nav-item-btn'>
                            <BsBuildingFillCheck className='icon-menu' /> THANH TOÁN
                        </button>
                    </Link>
                </div>
            </div>
            <div className='user'>
                <div className="ctn_user">
                    <div className="user_dkdn">
                        <Link to={ "/register" } className="user_dkdn"><p>Đăng kí</p></Link>
                        <Link to={ "/login" } className="user_dkdn"><p>Đăng nhập</p></Link>
                    </div>
                    <div className='user-cart'>
                        <Link to={"/cart"}>
                            <AiOutlineShopping className='user-cart-icon' />
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Menu;