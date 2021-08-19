import styled from "styled-components";
import selfie from "../assets/img.jpeg"
import {introText} from "../texts";
import {useMediaQuery} from "react-responsive";

const AboutWrap = styled.div`
  display:grid;
  grid-template-areas: 
          "intro image"
          "links image";
  margin: 30px;
  grid-gap :20px;
  @media only screen and (max-width: 500px){
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
  line-height: 1.5;
`

const LinksWrap = styled.div`
  display: flex;
  grid-area: links;
  a {
    text-decoration: none; 
  }
`

const IntroText = styled.div`
  white-space: pre-line;
  font-size: 1vw;
`

function About() {
    const isBigScreen = useMediaQuery({minDeviceWidth: 500})

    return(
        <AboutWrap>
            <IntroWrap>
                <IntroText>
                    {introText}
                </IntroText>
            </IntroWrap>
            <ImageWrap>
                {isBigScreen ? (
                    <img style={{height:"20vw", width:"20vw"}} src={selfie}/>
                ) : (
                    <img style={{height:"30vw", width:"30vw"}} src={selfie}/>
                )}
            </ImageWrap>
            <LinksWrap>
                <a href="https://velog.io/@leedc0101">velog</a>
            </LinksWrap>
        </AboutWrap>
    )
}

export default About