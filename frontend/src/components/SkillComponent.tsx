import "../styles/SkillComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);


const SkillComponent = ()=>{
  const skillContainer = useRef(null);
  const skillHeader = useRef(null); 
  const skillContentContainer = useRef(null);
  const badgeItem = useRef(null);
  const skillHeading = useRef(null);




  useGSAP(()=>{
        const tl_skl = gsap.timeline({
          scrollTrigger: {
            trigger: skillContainer.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            markers: true,
          },
        });


        // ANIMATION FOR HEADER
        // Skill Header GSAP
        tl_skl.fromTo(skillHeader.current,{
          opacity: 0,
          text: ""
        },
          {
          scrollTrigger: {
            trigger: skillHeader.current,
            start: "top center",
            end: "top 30%",
            scrub: 1,
            // markers: true,
          },
          ease: "power1.in",
          opacity: 1,
          y: "-20%",
          text: "Skills"
        });
        
        gsap.utils.toArray("[data-name]").forEach((badge) => {
          const badgeElement = badge as HTMLElement;

          tl_skl.fromTo(badgeElement,{
            opacity: 0,
            text: ""
          },
            {
            scrollTrigger: {
              trigger: skillHeader.current,
              start: "top center",
              end: "top 30%",
              scrub: 1,
              // markers: true,
            },
            ease: "power1.in",
            opacity: 1,
            y: "-20%",
            text: badgeElement.dataset.name ?? "",
          })
      });

        // ANIMATING THE NAVBAR
        // Updating the Navbar color on scroll
        // Type casting the selected element to `HTMLElement`
        const componentHeight = (document.querySelector(".navbar") as HTMLElement)?.offsetHeight || 0;

        tl_skl.to(".navbar", {
            scrollTrigger: {
                trigger: skillContainer.current,
                start: `top ${componentHeight}px`,
                end: `top top`,
                scrub: 1,
                // markers: true
            },
            backgroundColor: "white",      // Change background color to white
            borderRightColor: "black",     // Change border color to black
            color: "black", 
        });


        // ANIMATION FOR BadgeItem
        // Fading in the badgeItem
        const badgeItems = gsap.utils.toArray(".badge-item")
        tl_skl.fromTo(badgeItems, {
          opacity: 0,
          y: "10%",
        },{
          scrollTrigger: {
            trigger: skillContainer.current,
            start: "top top",
            end: `bottom top`,
            scrub: 2,
            // markers: true,
          },
          y: "-10%",
          opacity: 1,
          stagger: {
            amount: 0.5,
            from: "random",
          },
      });
  
      },{dependencies: []});

      
    return(
        <div ref={skillContainer} className="skillContainer">
            <div ref={skillHeader} className="skillHeader"></div>
            <div ref={skillContentContainer} className="skillContentContainer">
            <div ref={skillContentContainer} className="skillContentContainer">
              {/* Languages */}
              <div>
                <h1 ref={skillHeading} data-name= "Languages">Languages</h1>
                <div className="badge-grid">
                  {/* Python badge already provided */}
                  <div ref={badgeItem} className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
                      alt="Python"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"
                      alt="JavaScript"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=C%2B%2B&logoColor=white"
                      alt="C++"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"
                      alt="TypeScript"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=Java&logoColor=white"
                      alt="Java"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"
                      alt="SQL"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"
                      alt="HTML"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"
                      alt="CSS"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white"
                      alt="Swift"
                    />
                  </div>
                </div>
              </div>

              <div className="vertical-line"></div>
              {/* Frameworks */}
              <div>
                <h1 ref={skillHeading} data-name= "Frameworks">Frameworks</h1>
                <div className="badge-grid">
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                      alt="React"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"
                      alt="Express"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"
                      alt="Spring Boot"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white"
                      alt="Node.js"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
                      alt="Django"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
                      alt="Flask"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
                      alt="Material-UI"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                      alt="Bootstrap"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                      alt="TailwindCSS"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
                      alt="Redux"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/SwiftUI-000000?style=for-the-badge&logo=swift&logoColor=white"
                      alt="SwiftUI"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
                      alt="Flutter"
                    />
                  </div>
                </div>
              </div>

              <div className="vertical-line"></div>
              {/* Dev Tools */}
              <div>
                <h1 ref={skillHeading} data-name= "Dev Tools">Dev Tools</h1>
                <div className="badge-grid">
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white"
                      alt="Stripe"
                    />
                  </div>
                  {/* Celery: No official shields.io badge available */}
                  {/* REST API: No official shields.io badge available */}
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"
                      alt="Redis"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
                      alt="GraphQL"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"
                      alt="Maven"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"
                      alt="Sequelize"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
                      alt="MySQL"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
                      alt="Firebase"
                    />
                  </div>
                  {/* MetaXR: No official shields.io badge available */}
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                      alt="Git"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                      alt="Docker"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
                      alt="AWS"
                    />
                  </div>
                  <div className="badge-item">
                    <img
                      src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white"
                      alt="Vercel"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default SkillComponent