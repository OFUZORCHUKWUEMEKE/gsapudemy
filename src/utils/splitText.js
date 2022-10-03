import { useRef } from "react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// d initialize it to an empty Array


function useArrayRef() {
    // create a ref array an
    const refs = useRef([])
    refs.current = []
    return (refs,(ref)=>ref && refs.current.push(ref))
}

export const SplitText = ({ children }) => {

    const triggerRef = useRef()
    console.log(children)
    let words = children.split(" ")
    console.log(words)
    return words.map((word, index) => (
        <span ref={triggerRef} key={children + 1} style={{ display: 'inline-block', overflow: "hidden" }}>
            <span style={{ display: 'inline-block', willChange: 'transform' }}>
                {word + index != words.length - 1 ? "\u00a0" : ''}
            </span>
        </span>
    ))

}