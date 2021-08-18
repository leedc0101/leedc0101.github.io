import React from 'react'
import styled from "styled-components";

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: midnightblue;
    color: white;
    height: 60px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 100%;
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
`


function Header() {


    return (
       <HeaderWrap>
          <Wrap>
             <div>동창</div>
              <Menu>
                <MenuItem>About</MenuItem>
                <MenuItem>Post</MenuItem>
                <MenuItem>Works</MenuItem>
             </Menu>
          </Wrap>
       </HeaderWrap>
    )
}

export default Header