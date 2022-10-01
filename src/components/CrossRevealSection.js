import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const StyledCrossRevealConatainer = styled.section`
   position: relative;
   padding-bottom: 56.25%;
   .crossRevealImage{
      width: 100%;
      height: 100%;
   }
.afterImage{
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%,0px);
}   
.afterImage img{
    transform: translate(-100%,0);

}
.crossRevealImage img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}
.person__content{
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;
    .person__name{
        font-weight: 700;
        line-height: 1.3;
        font-size: 17px;
    }
    .person__job{
        line-height: 1.3;
        font-weight: 400;
        letter-spacing: -0.022em;
        font-size:17px;
    }
    
}
.landscape__wrapper{
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 90%;
        margin: 00;
        .quote__sentence{
            line-height: 1.03;
            font-weight: 700;
            font-size: 80px;
            letter-spacing: -0.015em;
            color: white;
        }
        .author__name{
            line-height: 1.14;
            font-weight: 700;
            font-size: 28px;
            letter-spacing:0;
            padding-top: 20px;
            color: white;
        }
    }
`

const CrossRevealSection = ({ face, landscape, name, job, sentenceOne, sentenceTwo,crossReveal }) => {
    // animate the container one way
    const containerRef = useRef()
    // animate the image the opposite way at the same time
    const imageRef = useRef()
    // specify the point we want our animation to start
    const triggerRef = useRef()
    //  target the person container
    const personRef = useRef()
    // target the quote container
    const quoteRef = useRef()

    useEffect(() => {
        const crossRevealTween = gsap.timeline(
            {
                defaults: { ease: "none" },
                scrollTrigger:{
                    trigger:triggerRef.current,
                    start:"center center",
                    end:()=>"+=" + triggerRef.current.offsetWidth,
                    scrub:true,
                    anticipatePin:1,
                    pin:true
                }
            }
        )
        // animate the container one way
        crossRevealTween.fromTo(containerRef.current,{[crossReveal]:100,x:0},{[crossReveal]:0})
        .fromTo(imageRef.current,{[crossReveal]:-100,x:0},{[crossReveal]:0},0)
    },[crossReveal])
    return (
        <StyledCrossRevealConatainer ref={triggerRef}>
            <div className='crossRevealImage'>
                <img src={face} alt="" />
                <div className='person__content' ref={personRef}>
                    <h3 className='person__name'>{name}</h3>
                    <p className='person__job'>{job}</p>
                </div>
                <div className='crossRevealImage afterImage' ref={containerRef}>
                    <img src={landscape} ref={imageRef}/>
                </div>
                <div className='landscape__wrapper'>
                    <p className='quote__sentence'>{sentenceOne}
                        <br />
                        {sentenceTwo}
                    </p>
                    <p className='author__name'>{name}</p>
                </div>
            </div>
        </StyledCrossRevealConatainer>
    )
}

export default CrossRevealSection