import styled from "styled-components";
import selfie from "../assets/img.jpeg"
import {introText} from "../texts";

const AboutWrap = styled.div`
  display:grid;
  grid-template-areas: 
          "intro image"
          "links image";
  grid-gap :20px;
  @media only screen and (max-width: 700px){
    grid-template-areas: 
            "image"
            "intro"
            "links";
  }
`

const ImageWrap = styled.div`
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;
`

const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: intro;
  line-height: 2;
`

const LinksWrap = styled.div`
  grid-area: links;
  font-size: 1.5vw;
  line-height: 2;
  a {
    text-decoration: none;
    color:#9A8C98;
  }
  @media only screen and (max-width: 700px){
    font-size: 3.5vw;
  }
`

const IntroText = styled.div`
  white-space: pre-line;
  font-size: 1.2vw;
  @media only screen and (max-width: 700px){
    font-size: 3.5vw;
  }
`

const HeaderText = styled.div`
  font-size: 3vw;
  font-weight: bold;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
`

const StyledImg = styled.img`
  height:20vw; 
  width:20vw;
  @media only screen and (max-width: 700px){
    height: 30vw;
    width: 30vw;
  }
`

function About() {
    return(
        <AboutWrap>
            <IntroWrap>
                <IntroText>
                    <HeaderText>이동창</HeaderText>
                    {introText}
                </IntroText>
            </IntroWrap>
            <ImageWrap>
                <StyledImg src={selfie}/>
            </ImageWrap>
            <LinksWrap>
                <h2>Links</h2>
                <a href="https://github.com/leedc0101" target="_blank">
                    <div>GitHub</div>
                </a>
                <a href="https://velog.io/@leedc0101" target="_blank">
                    <div>Velog</div>
                </a>
            </LinksWrap>
        </AboutWrap>
    )
}

export default About