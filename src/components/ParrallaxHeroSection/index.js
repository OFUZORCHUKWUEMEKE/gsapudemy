import React from 'react'
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
    return (
        <>
            <StyledSVGWrapper>
                <BackgroundHero />
                <MidgroundHero />
                <ForegroundHero />
            </StyledSVGWrapper>


        </>
    )


}

export default ParallaxHeroSection;