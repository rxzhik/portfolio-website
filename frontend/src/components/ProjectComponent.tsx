import "../styles/ProjectComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import CardComponent from "./CardComponent";
import techzenithgif from "../assets/images/techzenith.gif";
import smartyimg from "../assets/images/smarty.png";
import altemirafitnessimg from "../assets/images/altemirafitness.png"
import cyberobligationimg from "../assets/images/cyberobligation.gif"
import loopcinemagif from "../assets/images/loopcinema.gif"
import raspberrypi from "../assets/images/raspberrypi.jpeg"

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

const ProjectComponent = () => {
    const projectContainer = useRef(null);
    const projectHeader = useRef(null);
    const projectCompContainer = useRef(null);
    const spacer = useRef(null);
    

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
            // markers: true,
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
                <CardComponent photo={altemirafitnessimg} head= "Altemira-Fitness (Freelance Client) 🏋️‍♀️" info="Developed a fitness course website for an Instagram influencer using React, Django, Firebase, Stripe, Redis, and AWS. I built the backend with Django and used Firebase for user authentication. Integrated Stripe for secure payments and Redis with Celery for task queueing. I also handled deployment on AWS for scalability. This project taught me valuable client-facing skills, teamwork, and how to meet deadlines while ensuring the system was secure and scalable. 🛠️" />
                <CardComponent photo={loopcinemagif} head="Loop Cinemas 🎬" info="Built a movie booking website using React, Node.js, Express, Sequelize, and MySQL. The app allows users to browse movies, book tickets, and leave reviews. I used Sequelize for ORM and MySQL to manage data. Developed the backend with Node.js and Express, while the frontend used React. The project was delivered using Agile methodology, ensuring efficiency in development and testing with Jest. 🎥" />
                <CardComponent photo={cyberobligationimg} head="cyberobligation.com" info="Created an MVP for a cybersecutiy startup which focuses on providing cyber obligation updates to small-to-medium business. Used AI tools like Bolt.new to create the frontend and Route53 to host the website. Used Express to build the the backend and a AWS RDS to host the database, the RDBMS I used was MySQL. 💻" />
                <CardComponent photo={smartyimg} head="Smarty 🛍️" info="Built an AI-powered shopping app in SwiftUI using Google Gemini and Rapid API. The app featured a Tinder-like swiping interface to collect user preferences, which were used to generate personalized clothing suggestions. Rapid API provided clothing data, while Google Gemini optimized recommendations. This project integrated machine learning and AI to enhance shopping experiences, offering tailored suggestions based on user behavior. 🤖" />
                <CardComponent photo={raspberrypi} head="Scooter Management System 🛴" info="Developed a scooter management system using Raspberry Pi, Gemini API, WebSockets, GCP, Node.js, and MySQL. Managed real-time scooter data through Raspberry Pi devices, with a MySQL database hosted on GCP. Implemented Gemini API for natural language querying and WebSockets for real-time updates. Designed a UI for engineers, admins, and customers. The project enhanced my skills in IoT, real-time communication, and database management. ⚡" />                
                <CardComponent photo={techzenithgif} head="techzenith.com.au" info="Created this as an MVP for a startup I was working at. Used Bolt.new for the froend and created a mail service for contacting our startup. The startup was focused on creating internet solution for business such as CRM, Cybersecurity, Cloud Solutions, etc. 👥" />

            </div>
        </div>
    </>
)};

export default ProjectComponent;