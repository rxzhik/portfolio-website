import "../styles/ProjectComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import CardComponent from "./CardComponent";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

const ProjectComponent = () => {
    const projectContainer = useRef(null);
    const projectHeader = useRef(null);
    const projectCompContainer = useRef(null);
    const spacer = useRef(null);
    const information = useRef(null);
    const media = useRef(null);
    

    useGSAP(() => {
        const tl_proj = gsap.timeline({
            scrollTrigger: {
                trigger: projectContainer.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                // markers: true,
            },
        });

        tl_proj.fromTo(
            projectHeader.current,
            {   
                opacity: 0,
                text: "",
            },
            {
                scrollTrigger: {
                    trigger: projectContainer.current,
                    start: "top center",
                    end: "top 30%",
                    scrub: 1,
                    // markers: true,
                },
                ease: "power1.in",
                opacity: 1,
                text: "Projects",
            }
        );

        // ANIMATING THE NAVBAR
        // Updating the Navbar color on scroll
        // Type casting the selected element to `HTMLElement`
        const componentHeight = (document.querySelector(".navbar") as HTMLElement)?.offsetHeight || 0;

        tl_proj.to(".navbar",{
            scrollTrigger: {
                trigger: spacer.current,
                start: `top ${componentHeight}px`,
                end: `top top`,
                scrub: 1,
                // markers: true
            },
            backgroundColor: "black",      // Change background color to white
            borderRightColor: "white",     // Change border color to black
            color: "white", 
        });

        // ANIMATING THE PROJECT CARDS
        const cards = gsap.utils.toArray(".card")
        tl_proj.fromTo(cards, {
          opacity: 0,
          y: "20%",
        },{
          scrollTrigger: {
            trigger: projectContainer.current,
            start: "top 40%",
            end: `bottom bottom`,
            scrub: 2,
            markers: true,
          },
          y: "-10%",
          ease: "expo.out",
          opacity: 1,
          stagger: {
            amount: 0.1,
            from: "start",
          },
      });
    });
    return (
    <>
        <div ref={spacer} className="spacer"></div>
        <div  ref={projectContainer} className="projectContainer">
            <div ref={projectHeader} className="projectHeader"></div>
            <div ref={projectCompContainer} className="projectCompContainer">
                <CardComponent photo="https://images.unsplash.com/photo-1742240434042-11a13f062673?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" head="Altemira-Fitness" info="This is a project" />
                <CardComponent photo="https://images.unsplash.com/photo-1742240434042-11a13f062673?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" head="techzenith.com.au" info="This is a project" />
                <CardComponent photo="https://images.unsplash.com/photo-1742240434042-11a13f062673?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" head="cyberobligation.com" info="This is a project" />
                <CardComponent photo="https://images.unsplash.com/photo-1742240434042-11a13f062673?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" head="Smarty" info="This is a project" />
            </div>
        </div>
    </>
)};

export default ProjectComponent;