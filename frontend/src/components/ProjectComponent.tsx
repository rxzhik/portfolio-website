import "../styles/ProjectComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

const ProjectComponent = () => {
    const projectContainer = useRef(null);
    
    useGSAP(() => {
        const tl_proj = gsap.timeline({
            scrollTrigger: {
                trigger: ".projectContainer",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: true,
                pinSpacing: true,
                // markers: true,
            },
        });

        tl_proj.fromTo(
            ".projectHeader",
            {
                opacity: 0,
                text: "",
            },
            {
                scrollTrigger: {
                    trigger: ".projectHeader",
                    start: "top center",
                    end: "top 30%",
                    scrub: 1,
                    // markers: true,
                },
                ease: "power1.out",
                opacity: 1,
                text: "Projects",
            }
        );
    });
    return <div  ref={projectContainer} className="projectContainer">
        <div className="projectHeader"></div>
        <div className="projectCompContainer">
        </div>
    </div>
};

export default ProjectComponent;