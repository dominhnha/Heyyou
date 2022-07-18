import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useEffect,useCallback } from 'react';
import Button from './Button';
const HeroSlider = props => {
    const data = props.data;
    const [activeSlider,setActiveSlider] = useState(0);

    const timeOut = props.timeOut ? props.timeOut :3000;

    const nextSlide = useCallback(
      () => {
        const index = activeSlider +  1 ===data.length ? 0 : activeSlider + 1;
        setActiveSlider(index);
      },
      [activeSlider,data],
    )
    
    const preSlide = ()=>{
        const index = activeSlider - 1 <0 ? data.length - 1 : activeSlider - 1;
        setActiveSlider(index);
    }

    useEffect(() => {
     let sliderAuto
      if(props.auto){
            sliderAuto = setInterval(()=>{
                nextSlide();
            },timeOut);
      }
    
      return () => {
        clearInterval(sliderAuto);
      }
    }, [nextSlide,timeOut,props]);
    
  return (
        <div className="hero-slider">
            {
                data.map((item,index)=>{
                    return(
                        <HeroSliderItem key={index} item={item} active ={index === activeSlider} />
                    )
                })
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        <div className="hero-slider__control__item" onClick={()=>{preSlide()}}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div className="hero-slider__control__item">
                            <div className="index">
                                {
                                    `${ activeSlider + 1 }/${ data.length}`
                                }
                                
                            </div>
                        </div>
                        <div className="hero-slider__control__item" onClick={()=>{nextSlide()}}>
                            <i className="bx bx-chevron-right"></i>
                        </div>
                    </div>
                ) : null
            }
        </div>
  )
}

HeroSlider.propTypes = {
    data:PropTypes.array.isRequired,
    control:PropTypes.bool,
    auto:PropTypes.bool,
    timeOut:PropTypes.number,
}
const HeroSliderItem = (props)=>{
    return(
        <div className={`hero-slider__item ${props.active ? ` active` : ""}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                    <span>{props.item.title}</span>
                </div>
                <div className="hero-slider__item__info__description">
                    <span>{props.item.description}</span>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <Button
                            backgroundColor={props.item.color}
                            icon={`bx bx-cart`}
                            animate={true}
                        >
                            Xem chi Tiết
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={`shape bg-${props.item.color}`}></div>
                <img src={props.item.img} alt="" /> 
            </div>
        </div>
    )
}
export default HeroSlider