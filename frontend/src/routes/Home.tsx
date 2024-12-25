import "../styles/Home.css";
import profileImage from "../assets/images/profile.webp";
import { gsap } from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import ExperienceComponent from "../components/ExperienceComponent";
import SkillComponent from "../components/SkillComponent";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profileName",
      {
        text: "",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "center center",
          end: "center 20%",
          // markers: true,
          scrub: true,
        },
        y: "38vh",
        text: "Rashik Raj",
        transformOrigin: "center center",
        opacity: 1,
      }
    );

    gsap.to(
      ".imageContainer",
      {
        scrollTrigger:{
          trigger: ".imageContainer",
          start: "center center",
          end: "center 20%",
          // markers: true,
          scrub: true,
        },
        y: "20vh",
        scale: 0.5,
        ease: "power1.out",
        transformOrigin: "center center"
      }
  );

  gsap.to(
    ".imageContainerCircle",
    {
      scrollTrigger:{
        trigger: ".imageContainerCircle",
        start: "center center",
        end: "center 20%",
        // markers: true,
        scrub: true,
      },
      yoyo: true,
      y: "20vh",
      scale: 0.53,
      ease: "power1.out",
      transformOrigin: "center center"
    }
);


  gsap.fromTo( ".aboutSection",{
    opacity: 0,
    text: ""
  },{
    scrollTrigger: {
      trigger: ".aboutSection",
      start: "top 60%",
      end: "top 10%",
      scrub: true,
      // markers: true,
      pinSpacing: true,
    },
    opacity: 1,
    text: "Hi there! I am a Software Engineer and I finished my Bachelors in Computer Science from RMIT Univeristy in Nov, 2024. I am intersted in Web, IOS and VR Development and integrating AI in them to create cool features. I also like networking and understanding computer architecture and how the kernel works. I have done a couple of freelance projects in the past and currently I am working part-time at a start up. I also like playing basketball, running, camping and cinematography.",
  });

  gsap.to(".hero",{
    scrollTrigger: {
      trigger: ".aboutSection",
      start: "top 60%",
      end: "top 10%",
      scrub: true,
      // markers: true,
    },
    y: "50vh",
    ease: "none"
  });

  }, []);

  


  return (
    <div className="homeContianer">
      <div className="firstBlackSection">
        <div className="hero">
          <div className="headerSection">
            <div className="imageContainer">
              <img src={profileImage} alt="profile-image" />
            </div>
            <div className="imageContainerCircle"></div>
            <div className="profileName"></div>
          </div>
          <div className="aboutSection"></div>
        </div>
        <div className="secondSection">
          <ExperienceComponent/>
        </div>
      </div>
      <div className="firstWhiteSection">
        <div className="skillSection">
          <SkillComponent/>
        </div>
      </div>
    </div>
  );
};

export default Home;
