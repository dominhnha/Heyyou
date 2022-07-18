import React from 'react'
import logo from '../assets/images/Logo-2.png';
import { Link, useLocation } from 'react-router-dom';
import { useRef,useEffect } from 'react';
const mainNav = [
    {
        display:"Trang chủ",
        path:"/",
    },
    {
        display:"Sản phẩm",
        path:"/catalog",
    },
    {
        display:"Phụ kiện",
        path:"/accessories",
    },
    {
        display:"Liên hệ",
        path:"/contact",
    },
]

const Header = () => {
    const pathName = useLocation();
    const activeNav = mainNav.findIndex((e)=>{
        return e.path == pathName.pathname;
    });

   const headerRef = React.useRef(null);

   useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
             headerRef.current.classList.add('shrink');
        }else{
            headerRef.current.classList.remove("shrink");
        }
    })
    return ()=>{
         window.removeEventListener("scroll");
    }
   },[]);

   const menuLeft = useRef(null)

   const menuToggle = () => menuLeft.current.classList.toggle('active');

   const removeToggle = ()=>{
    document.querySelector(".header").classList.remove("active")
   }
  return (
    <div className="header" ref={headerRef}>
        <div className="container">
            <div className="header__logo">
                <Link to={"/"}>
                    <img src={logo} alt="Logo Yody" />
                </Link>
            </div>
            <div className="header__menu">
                <div className="header__menu__mobile-toggle" onClick={()=>menuToggle()}>
                    <i className='bx bx-menu-alt-left' ></i>
                </div>
                <div className="header__menu__left" onClick={()=>menuToggle()} ref={menuLeft}>
                    <div className="header__menu__left__close">
                        <i className='bx bx-chevron-left' ></i>
                    </div>
                    {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={()=>{removeToggle()}}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                </div>
                <div className="header__menu__right">
                    <div className="header__menu__item header__menu__right-item">
                        <i className="bx bx-search"></i>
                    </div>
                    <div className="header__menu__item header__menu__right-item">
                        <Link to="/cart">
                            <i className='bx bx-shopping-bag' ></i>
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right-item">
                        <i className="bx bx-user"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header