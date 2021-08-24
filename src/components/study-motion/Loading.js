import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const TestWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingBox = styled(motion.div)`
  background-image: linear-gradient(to right, #434343 0%, black 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  height: 80px;
  width: 80px;
`

function Loading() {
    return (
        <TestWrap>
            <LoadingBox
                animate={{
                    scale: [1, 1.5, 1.5, 1.5, 1, 1],
                    rotate: [0, 0, 360, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    loop: Infinity,
                    repeatDelay: 1
                }}
            >
                Loading
            </LoadingBox>
        </TestWrap>
    )
}

export default Loading