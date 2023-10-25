import React from 'react'
import styled from 'styled-components'

const Header  = styled.div`
    width: 100%; border-top: 5px solid #009223; height: 164px;
    /* ::after{
        content: "";
        position: absolute;
        width: 100%; height: 1px; background-color: #ddd;
        z-index: 2; top: 169px;
    } */
`

const HeaderWrap = styled.div`
    width: 1170px; margin: 0 auto; height: 100%; display: flex; position: relative; flex-wrap: wrap;
`
const Logo = styled.div`
    flex-basis: 100%; text-align: center; margin-top: 35px;
`

const Member = styled.div`
    position: absolute; right: 25px; top: 40px;
    ul{
        display: flex; align-items: center;
        li{
            position: relative; font-size: 13px;
            &:nth-child(2){
                margin-left: 30px; margin-right: 15px;
                &::after{
                    content: ""; position: absolute; width: 3px; height: 3px; background-color: #ddd; left: -16px; top: 50%; margin-top: -2px;
                }
            }
            &:nth-child(3) img{
                font-size: 0; width: 30px; height: 30px;
            }
        }
    }
`
const Navi = styled.div`
    flex-basis: 100%; display: flex; height: 59px; padding-top: 16px; padding-bottom: 10px; position: relative; z-index: 9;
    ul{
        display: flex; width: 990px; margin: 0 auto; height: 69px; justify-content: space-between; align-items: center;
        li{
            flex-basis: 165px; text-align: center; font-weight: bold; font-size: 18px; letter-spacing: -0.04em; height: 69px; line-height: 67px; cursor: pointer; color: #292929;
        }
    }
`
const Submenu = styled.div`
    width: 100%; background-color: white; transition: 0.2s; padding-top: 40px; margin-top: -41px; height: 0; overflow: hidden; position: relative; z-index: 1;
`
const SubmenuWrap = styled.div`
    width: 990px; margin: 0 auto; display: flex; justify-content: space-between;
    ul{
        flex-basis: 165px; text-align: center; padding-top: 20px;
        li{
            height: 35px; transition: 0.2s; opacity: 0;
        }
    }
`

function Nav() {

    const NavList = ["메뉴소개", "이용방법", "새소식", "써브웨이", "가맹점", "온라인 주문"]

    const SubmenuList = [
        ["샌드위치", "랩 · 기타", "샐러드", "아침메뉴", "스마일 썹", "단체메뉴"],
        ["써브웨이 이용방법", "단체메뉴 이용방법", "신선한 재료 소개", "App 이용방법"],
        ["이벤트 · 프로모션", "뉴스 · 공지사항", "광고영상"],
        ["써브웨이 역사", "써브웨이 약속", "샌드위치 아티스트 지원", "매장찾기"],
        ["써브웨이 프랜차이즈", "가맹관련 FAQ", "가맹신청 · 문의", "지사안내", "사업설명회"],
        ["FAST-SUB", "HOME-SUB", "단체주문"]
    ]

    return (
        <>
            <Header>
                <HeaderWrap>
                    <Logo>
                        <img src="./../Images/logo_w.png" alt="logo" />
                    </Logo>
                    <Member>
                        <ul>
                            <li>로그인</li>
                            <li>회원가입</li>
                            <li><img src="./../Images/icon_global.png" alt="icon_global" /></li>
                        </ul>
                    </Member>
                    <Navi>
                        <ul>
                            {
                                NavList.map((e,i)=>{
                                    return(
                                        <li key={i}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                    </Navi>
                </HeaderWrap>
                <Submenu>
                    <SubmenuWrap>
                        {
                            SubmenuList.map((e,i)=>{
                                return(
                                    <ul key={i}>
                                        {
                                            e.map((el,index)=>{
                                                return(
                                                    <li key={index}>{el}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </SubmenuWrap>
                </Submenu>
            </Header>
        </>
    )
}

export default Nav