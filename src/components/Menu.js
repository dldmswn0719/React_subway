import React from 'react'
import styled from 'styled-components'

const MenuList = styled.div`
    background-color: #fff; width: 100%; padding-bottom: 60px; height: 560px;
`

const ListItems = styled.div`
    width: 1170px; margin: 0 auto; padding-top: 60px; padding-bottom: 33px; display: flex; justify-content: space-between;
    h3{
        color: #292929; font-size: 40px; font-family: "font_sw",sans-serif;
        padding-top: 17px; padding-left: 25px; margin-bottom: 1px; height: 60px;
        background: url("./../Images/bul_tit.png") 0 12px no-repeat;
    }
    ul{
        display: flex; margin-top: 44px;
        li{
            padding-left: 25px; margin-left: 23px; font-weight: 300; position: relative;
            &:not(:last-child)::after{
                content: ""; position: absolute; width: 1px; height: 15px; background-color: #ddd; right: -24px; top: 3px;
            }
            p{
                width: 100%; letter-spacing: -0.03em;
                &:active{
                    color: #009223; font-weight: bold;
                }
            }
        }
    }
`

const MenuContent = styled.div`
    width: 100%; height: 320px; position: relative; overflow: hidden;
`

const MenuContentWrap = styled.div`
    width: 1200px; height: 100%; position: absolute; left: 50%; transform: translateX(-50%); display: none;
    &:nth-child(1){display: block;}
`

const MenuWrap = styled.div`
    width: 100%; height: 100%; overflow: hidden;
`

const MenuArea = styled.div`
    width: 200%; display: flex; position: relative;
`

const MenuBox = styled.div`
    flex-basis: 260px; height: 320px; margin-left: 30px; padding: 0 5px; cursor: pointer; text-align: center; position: relative;
    &::after{
        content: "";
        position: absolute; width: 98px; height: 98px; background-image: url("./../Images/btn_more.png"); left: 50%; top: 50%;
        margin: -22px 0 0 -42px; opacity: 0;
    }
    img{width: 100%; height: 182px;}
    h3{color: #292929; font-size: 18px; margin-top: -1px; margin-bottom: 8px;}
    p{color: #999; font-size: 13px; line-height: 21px; letter-spacing: -0.04em;}
    &:hover::after{opacity: 1;}
    &:hover img{width: 340px; height: 238px;}
    &:hover h3{font-size: 22px; margin-top: 10px;}
    &:hover p{display: none;}
`

function Menu() {

    const MenuBoxList = [
        {
            "img" : "",
            "title" : "",
            "desc" : ""
        }
    ]

    return (
        <>
            <MenuList>
                <ListItems>
                    <h3>Subway's Menu</h3>
                    <ul>
                        <li><p>클래식</p></li>
                        <li><p>프레쉬&amp;라이트</p></li>
                        <li><p>프리미엄</p></li>
                        <li><p>아침메뉴</p></li>
                    </ul>
                </ListItems>
                <MenuContent>
                    <MenuContentWrap>
                        <MenuWrap>
                            <MenuArea>
                                <MenuBox>
                                    <img src="" alt="" />
                                    <h3></h3>
                                    <p></p>
                                    <p></p>
                                </MenuBox>
                            </MenuArea>
                        </MenuWrap>
                    </MenuContentWrap>
                </MenuContent>
            </MenuList>
        </>
    )
}

export default Menu