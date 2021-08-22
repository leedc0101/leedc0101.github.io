import React, {useState} from 'react'
import styled from "styled-components";
import About from "./About";
import Toys from "./Toys";
import Works from "./Works";
import {useMediaQuery} from "react-responsive";
import src from '../assets/menu.png'
import {AnimatePresence, motion} from 'framer-motion'

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #22223B;
  color:white;
  height: 70px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
  @media only screen and (max-width: 700px){
    justify-content: space-between;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 100%;
`

const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 20px;
  @media only screen and (max-width: 700px){
    height: 40px;
  }
  &:hover {
    background-color: #4A4E69;
  }
`

const Modal = styled.div`
  width: 100%;
  background-color: #4a4e69;
`

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
  @media only screen and (max-width: 500px){
    margin-top: 90px;
  }
`

function Header() {
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)

    const isBigScreen = useMediaQuery({minDeviceWidth: 700})
    const content = [
        <About/>,
        <Works/>,
        <Toys/>
    ]

    return (
        <div>
            <AnimatePresence>
                { !isBigScreen && active && (
                    <motion.div
                    style={{width:"100%"}}
                    initial={{top:0}}
                    animate={{position:"fixed", left:0, top:30, zIndex:1}}
                    exit={{top:-90}}
                    >
                        <Modal>
                            <MenuItem></MenuItem>
                            <MenuItem onClick={() => {
                                index !== 0 && setIndex(0)
                                setActive(!active)
                            }} style={index === 0 ? {color:"#ffffff"} : {color:"#9A8C98"}}>
                                About
                            </MenuItem>
                            <MenuItem onClick={() => {
                                index !== 1 && setIndex(1)
                                setActive(!active)
                            }} style={index === 1 ? {color:"#ffffff"} : {color:"#9A8C98"}}>
                                Post
                            </MenuItem>
                            <MenuItem onClick={() => {
                                index !== 2 && setIndex(2)
                                setActive(!active)
                            }} style={index === 2 ? {color:"#ffffff"} : {color:"#9A8C98"}}>
                                Works
                            </MenuItem>
                        </Modal>
                    </motion.div>
                )}
            </AnimatePresence>
            <HeaderWrap>
                <Wrap>
                    { isBigScreen ? (
                        <>
                            <div>Dong Chang Lee</div>
                            <Menu>
                                <MenuItem onClick={() => {index !== 0 && setIndex(0)}}>About</MenuItem>
                                <MenuItem onClick={() => {index !== 1 && setIndex(1)}}>Works</MenuItem>
                                <MenuItem onClick={() => {index !== 2 && setIndex(2)}}>Toys</MenuItem>
                            </Menu>
                        </>
                    ) :(
                        <>
                            <div>Dong Chang Lee</div>
                            <div onClick={() => setActive(!active)}>
                                <img src={src} style={{height:"20px", width:"25px"}}/>
                            </div>
                        </>
                    )}
                </Wrap>
            </HeaderWrap>
            <ContentWrap>
                <motion.div key={index} initial={{opacity:0}} transition={{duration:0.5}} animate={{opacity:1}} exit={{opacity:0}}>
                    {content[index]}
                </motion.div>
            </ContentWrap>
        </div>
    )
}

export default Header