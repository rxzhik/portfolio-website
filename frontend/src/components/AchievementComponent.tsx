import "../styles/AchievementComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);


const AchievementComponent = () => {
    const achContainer = useRef(null);
    const achHeader = useRef(null);
    const achCompContainer = useRef(null);


    useGSAP(() => {
        const tl_ach = gsap.timeline({
            scrollTrigger: {
                trigger: achContainer.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                // markers: true,
            },
        });

        tl_ach.fromTo(
            achHeader.current,
            {   
                opacity: 0,
                text: "",
            },
            {
                scrollTrigger: {
                    trigger: achContainer.current,
                    start: "top center",
                    end: "top 30%",
                    scrub: 1,
                    // markers: true,
                },
                ease: "power1.in",
                opacity: 1,
                text: "Achievements",
            }
        );
    });

    return (
        <div className="ach-container" ref={achContainer}>
            <div className="ach-header" ref={achHeader}>
            </div>
            <div className="ach-comp-container" ref={achCompContainer}>
            </div>
        </div>
    );
}

export default AchievementComponent;