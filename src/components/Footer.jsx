import React from 'react'
import logo from '../assets/images/Logo-2.png';
import { Link } from 'react-router-dom';
import Grid from '../components/Grid';



const footerAboutLink = [
    {
        display:"Giới Thiệu",
        path:"/about"
    },
    {
        display:"Liên hệ",
        path:"/about"
    },
    {
        display:"Tuyển dụng",
        path:"/about"
    },
    {
        display:"Tin tức",
        path:"/about"
    },
    {
        display:"Hệ thống cửa hàng",
        path:"/about"
    }
]

const footerCustomLists = [
    {
        display:"Chính sách đổi trả",
        path:"/about"
    },
    {
        display:"Chính sách bảo hành",
        path:"/about"
    },
    {
        display:"Chính sách hoàn tiền",
        path:"/about"
    },
    
]
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={10}
            >
                <div className="">
                    <div className="footer__title">
                        Tổng đài hổ trợ
                    </div>
                    <div className="footer__content">
                        <p>Liên hệ dặt hàng <strong>0998334254</strong></p>
                        <p>Thắc mắt đơn hàng <strong>0998334254</strong></p>
                        <p>Góp ý kiếu nại <strong>0998334254</strong></p>
                        
                    </div>
                </div>
                <div className="">
                    <div className="footer__title">
                        Về Yolo
                    </div>
                    <div className="footer__content">
                        {
                            footerAboutLink.map((item,index)=>{
                              return(
                                <p key={index}>
                                    <Link to={item.path}>
                                      {item.display}
                                    </Link>
                                </p>
                              )
                                        
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <div className="footer__title">
                        Chăm sóc khách hàng
                    </div>
                    <div className="footer__content">
                        {
                            footerCustomLists.map((item,index)=>{
                              return(
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p> 
                              )
                                       
                            })
                        }
                    </div>
                </div>
                <div className="footer__about">
                  <p>
                      <Link to={"/"}>
                          <img src={logo} alt="" className='footer__logo'/>
                      </Link>
                  </p>
                  <p>
                    Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu 
                    người tiêu dùng Việt . Hãy càng YoLo hướng đến một cuộc sống năng động,
                    tích cực hơn 
                  </p>
                </div>
            </Grid>
        </div>
    </footer>
  )
}

export default Footer