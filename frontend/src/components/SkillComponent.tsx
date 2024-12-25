import { useEffect } from "react";
import "../styles/SkillComponent.css";
import gsap from "gsap";


const SkillComponent = ()=>{
    useEffect(()=>{

        // Skill Content Container GSAP
        gsap.to(".skillContentContainer" ,{
          scrollTrigger: {
            trigger: ".skillContentContainer",
            start: "top 10%",
            end: `+=${document.querySelector(".timeline")?.scrollWidth}`,
            scrub: true,
            // markers: true,
          },
          x: () => - (document.querySelector(".timeline")?.scrollWidth || 0),
          ease: "none",
          y: `${document.querySelector(".timeline")?.scrollWidth}`,
        });
  
        gsap.fromTo(".skillContentContainer", {
          opacity: 0
        },{
          scrollTrigger: {
            trigger: ".skillContentContainer",
            start: "top 10%",
            end: `top center`,
            scrub: true,
            // markers: true,
          },
          opacity: 1
        });
  
        gsap.fromTo(".skillContentContainer",{
          opacity: 1
        },{
          scrollTrigger: {
            trigger: ".skillContentContainer",
            start: "bottom 80%",
            end: `bottom center`,
            scrub: true,
            // markers: true,
          },
          opacity: 0
        });
  
        // Skill Header GSAP
  
        gsap.fromTo(".skillHeader",{
          opacity: 0,
          text: ""
        },
          {
          scrollTrigger: {
            trigger: ".skillHeader",
            start: "top center",
            end: "top 30%",
            scrub: true,
            // markers: true,
          },
          ease: "none",
          opacity: 1,
          text: "Skills"
        });
  
        gsap.to(".skillHeader", {
          scrollTrigger: {
            trigger: ".skillHeader",
            start: "top top",
            end: `+=${document.querySelector(".timeline")?.scrollWidth}`,
            scrub: true,
            // markers: true,
          },
          y: `${document.querySelector(".timeline")?.scrollWidth}`,
          ease: "none",
        });

        // Type casting the selected element to `HTMLElement`
        const componentHeight = (document.querySelector(".navbar") as HTMLElement)?.offsetHeight || 0;

        gsap.to(".navbar", {
            scrollTrigger: {
                trigger: ".skillHeader",
                start: `top ${componentHeight}px`,
                end: "top top",
                scrub: true,
                // markers: true
            },
            backgroundColor: "white",      // Change background color to white
            borderRightColor: "black",     // Change border color to black
            color: "black", 
        })
  
      }, []);

    return(
        <div className="skillContainer">
            <div className="skillHeader"></div>
            <div className="skillContentContainer"></div>
        </div>
    )
}

export default SkillComponent