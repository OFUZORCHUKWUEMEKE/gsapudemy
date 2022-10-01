import logo from './assets/logo.svg'
import './App.css';
import styled from 'styled-components';
import ParallaxHeroSection from './components/ParrallaxHeroSection';
import ContentSection from './components/ContenSection';
import CrossRevealSection from './components/CrossRevealSection';
import FaceOne from './assets/images/faceOne.png'
import landscape from './assets/images/landscapeOne.png'
import landscapeTwo from './assets/images/landscapeTwo.png'
import ProductSection from './components/ProductSection';


const StyledHeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    img{
      height: 25vmin;
      pointer-events: none;
    }
`
const StyledTitle = styled.h1`
 color: black;
 font-size: 2rem;
 font-weight: 400;
 letter-spacing: 4px;
 text-align: center;
 text-transform: uppercase;
 padding-top: 4rem;
`

function App() {
  return (
    <>
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ProductSection/>
      <ContentSection title={"Take Care"} text={"Crocs™ official online store has an exciting range of clogs, shoes,sandals, boots,flip flops,flats,sneakers for men,women & ki"} />
      <CrossRevealSection face={FaceOne}
        landscape={landscape}
        name={"Chritian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossReveal={"xPercent"}
      />
      <ContentSection title={"Take Care"} text={"Crocs™ official online store has an exciting range of clogs, shoes,sandals, boots,flip flops,flats,sneakers for men,women & ki"} />
      <CrossRevealSection face={FaceOne}
        landscape={landscapeTwo}
        name={"Chritian Guard"}
        job={"Founder"}
        sentenceOne={"We only launch"}
        sentenceTwo={"what we love"}
        crossReveal={"yPercent"}
      />
    </>
  );
}

export default App;
