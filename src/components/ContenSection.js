import React from 'react'
import styled from 'styled-components'
import { SplitText } from '../utils/splitText'

const StyledContentSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .content__wrapper{
    max-width: 980px;
    h2{
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #acacac;
    }
    h3{
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #080f0f;
    }
  }
`
const ContentSection = (props) => {
  return (
    <StyledContentSection>
      <div className='content__wrapper'>
        <h2>{props.title}</h2>
        <SplitText>{props.text}</SplitText>


      </div>
    </StyledContentSection>

  )
}

export default ContentSection