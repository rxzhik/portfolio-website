import "../styles/Home.css";
import profileImage from "../assets/images/profile.webp";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

const Hero = () => {
  const profileName = useRef(null);
  const imageContainer = useRef(null);
  const imageContainerCircle = useRef(null);
  const aboutSection = useRef(null);
  const hero = useRef(null);
  

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      }
    });


      tl.fromTo(
        profileName.current,
        {
          text: "",
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: imageContainer.current,
            start: "center center",
            end: "center 20%",
            // markers: true,
            scrub: 1,
          },
          // y: "38vh",
          text: "Rashik Raj",
          transformOrigin: "center center",
          opacity: 1,
          ease: "power1.out",
        },
        0
      );

      tl.to(
        imageContainer.current,
        {
          scrollTrigger:{
            trigger: imageContainer.current,
            start: "center center",
            end: "center 20%",
            // markers: true,
            scrub: 1,
          },
          // y: "20vh",
          y: "-10vw",
          scale: 0.5,
          ease: "power1.in",
          transformOrigin: "center center"
        },
        0
      );

      tl.to(
        imageContainerCircle.current,
        {
          scrollTrigger:{
            trigger: imageContainer.current,
            start: "center center",
            end: "center 20%",
            // markers: true,
            scrub: 1,
          },
          // y: "20vh",
          y: "-10vw",
          scale: 0.53,
          ease: "power1.out",
          transformOrigin: "center center",
        }
      );

      tl.fromTo( aboutSection.current,{
        opacity: 0,
        text: ""
      },{
        scrollTrigger: {
          trigger: imageContainer.current,
          start: "center 20%",
          endTrigger: hero.current,
          end: "bottom top",
          scrub: true,
          // markers: true
        },
        opacity: 1,
        text: "Hi there! I am a Software Engineer and I finished my Bachelors in Computer Science from RMIT Univeristy in Nov, 2024. I am intersted in Web, IOS and VR Development and integrating AI in them to create cool features. I also like networking and understanding computer architecture and how the kernel works. I have done a couple of freelance projects in the past and currently I am working part-time at a start up. I also like playing basketball, running, camping and cinematography.",
      });
  }, {dependencies: []});


  return (
        <div ref={hero} className="hero">
            <div ref={imageContainer} className="imageContainer">
              <img src={profileImage} alt="profile-image" />
            </div>
            <div ref={imageContainerCircle} className="imageContainerCircle"></div>
            <div ref={profileName} className="profileName"></div>
            <div ref={aboutSection} className="aboutSection"></div>
        </div>
  );
};

export default Hero;
