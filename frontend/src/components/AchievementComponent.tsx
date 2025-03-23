import "../styles/AchievementComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import rmit from "../assets/images/rmit.png"
import medibank from "../assets/images/medibank.jpeg"

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

        tl_ach.from(".ach-medibank", {
            x: -200,
            opacity: 0,
            ease: "expo.in",
        }, 1).from(".ach-rmit", {
            x: 200,
            opacity: 0,
            ease: "expo.in",
        }, 1);
    });

    return (
        <div className="ach-container" ref={achContainer}>
            <div className="ach-header" ref={achHeader}>
            </div>
            <div className="ach-comp-container" ref={achCompContainer}>
                <div className="ach-medibank">
                    <div className="ach-media">
                    <img src={medibank} alt="RMIT Cert"/>
                    </div>
                    <div className="ach-text">
                        <h2>🚀 Won Medibank Hackathon</h2>
                        <p>Had an amazing time at the Medibank Hackathon at Think 3000, RMIT! Our team won by using design thinking, Lego, and creative problem-solving. We acted out our storyboard (I was the AI!) instead of using a PowerPoint, and it made a big impact. Great experience meeting new people and adding to my UX design journey! 🎉</p>
                    </div>
                </div>
                <hr className="ach-hz-line"/>
                <div className="ach-rmit">
                    <div className="ach-text">
                            <h2>RMIT Graduation 🎓</h2>
                            <p>Completed my Bachelor’s in Computer Science at RMIT with distinction. Was part of Google Developer Club and a dev at RISC Society. Gained skills in Machine Learning, Web Development, and Agile, while also playing basketball and meeting great people!</p>
                    </div>
                    <div className="ach-media">
                        <img src={rmit} alt="RMIT Cert"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievementComponent;