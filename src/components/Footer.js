import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60px;
  background-color: #f2e9e4;
  color: #9a8c98;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Footer() {
    return(
        <FooterWrap>
            맨 위로
        </FooterWrap>
    )
}

export default Footer