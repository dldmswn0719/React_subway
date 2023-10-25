import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from 'styled-components';

const SlideContent = styled.div`
    width: 100%; height: 440px; position: relative; overflow: hidden; top: 1px;
`

const QuickMenu = styled.div`
    width: 1170px; margin: -29px auto 0; position: relative; z-index: 9; display: flex; justify-content: flex-end;
    ul{
        display: flex; flex-basis: 600px;
        li{
            flex-basis: 50%; height: 80px; text-align: center;
            &:nth-child(1){
                background-color: #ffce32; border-top-left-radius: 30px; letter-spacing: -0.02em;
                p{
                    color: #292929;
                    &::before{
                        width: 24px; height: 30px; background-image: url("./../Images/icon_map.png");
                        margin-right: 13px; vertical-align: middle; top: -2px;
                        content: ""; display: inline-block; position: relative;
                    }
                }
            }
            &:nth-child(2){
                background-color: #009223; border-bottom-right-radius: 30px; letter-spacing: -0.06em;
                p{
                    color: #fff;
                    &::before{
                        width: 34px; height: 30px; background-image: url("./../Images/icon_franchise.png");
                        margin-right: 13px; vertical-align: middle; top: -2px;
                        content: ""; display: inline-block; position: relative;
                    }
                }
            }
            p{
                font-size: 22px; padding-top: 26px; display: inline-block; width: 100%; font-weight: bold;
            }
        }
    }
`

function Slide() {
    
    return (
        <>
            <SlideContent>
                <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                id="swiper"
                >
                    <SwiperSlide>
                        <img src="./../Images/slideimg.jpg" alt="slide1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./../Images/slide2img.jpg" alt="slide2" />
                    </SwiperSlide>
                </Swiper>
            </SlideContent>
            <QuickMenu>
                <ul>
                    <li>
                        <p>매장찾기</p>
                    </li>
                    <li>
                        <p>가맹신청 · 문의</p>
                    </li>
                </ul>
            </QuickMenu>
        
        </>
    )
}

export default Slide
