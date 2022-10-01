import React, { useEffect, useRef } from 'react'
import BackgroundHero from './BackgroundHero';
import ForegroundHero from './ForegroundHero'
import MidgroundHero from './MidgroundHero';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';



const StyledSVGWrapper = styled.div`
   position: relative;
   width: 50vw;
   height: 30vw;
`
function ParallaxHeroSection() {
    const forgroundHeroRef = useRef()
    useEffect(() => {
        const onMove = ({ clientX, clientY }) => {
            forgroundHeroRef.current.moveTo(clientX / 4, clientY / 8)
        }
      
        const onLeave = () => {
            forgroundHeroRef.current.moveTo(0, 0)
        }
        document.addEventListener('mousemove', onMove)
        document.body.addEventListener('mouseleave', onLeave)
        return () => {
            document.removeEventListener("mousedown", onMove)
            document.removeEventListener("mouseleave", onLeave)
        }

    }, [])
    return (
        <>
            <StyledSVGWrapper>
                <BackgroundHero />
                <MidgroundHero />
                <ForegroundHero ref={forgroundHeroRef} />
            </StyledSVGWrapper>


        </>
    )


}

export default ParallaxHeroSection;