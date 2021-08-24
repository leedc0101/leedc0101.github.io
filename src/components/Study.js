import React from "react";
import styled from "styled-components";
import Loading from "./study-motion/Loading";

const StudyWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 6fr;
  grid-template-areas:
          " left name right "
          " center center center";
  width: 90vw;
  height: 80vh;
`

const NameWrap = styled.div`
  grid-area: name;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftWrap = styled.div`
  grid-area: left;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightWrap = styled.div`
  grid-area: right;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterWrap = styled.div`
  grid-area: center;
  display: flex;
  justify-content: center;
  align-items: center;
`


function Study() {
    return(
        <StudyWrap>
            <NameWrap>
                Item Name
            </NameWrap>
            <CenterWrap>
                <Loading/>
            </CenterWrap>
            <LeftWrap>
                Left Arrow
            </LeftWrap>
            <RightWrap>
                Right Arrow
            </RightWrap>
        </StudyWrap>
    )
}

export default Study