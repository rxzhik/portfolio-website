import "../styles/ExperienceComponent.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

const ExperienceComponent = () => {
  const exeprienceSection = useRef(null);
  const experienceHeader = useRef(null);
  const experienceCompContainer = useRef(null);
  const timeline = useRef(null);

  useGSAP(() => {
      const tl_exp = gsap.timeline({
        scrollTrigger: {
          trigger: exeprienceSection.current,
          start: "top top",
          end: () => {
            const timelineWidth =
              document.querySelector(".timeline")?.scrollWidth || 0;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;

            // Calculate: -timelineWidth + 100vh + 50vw
            const result = -timelineWidth + viewportHeight + viewportWidth / 2; // 50vw = 50% viewport width

            return `bottom +=${result}px`; // Use += if result is positive after calculation
          },
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: true,
        },
      });

      tl_exp.fromTo(
        experienceHeader.current,
        {
          opacity: 0,
          text: "",
        },
        {
          scrollTrigger: {
            trigger: experienceHeader.current,
            start: "top center",
            end: "top 30%",
            scrub: 1,
            // markers: true,
          },
          ease: "power1.out",
          opacity: 1,
          text: "Experience",
        }
      );

      tl_exp.set(experienceCompContainer.current, {
        x: "50vw",
      });

      tl_exp.to(experienceCompContainer.current, {
        scrollTrigger: {
          trigger: exeprienceSection.current,
          start: "top 10%",
          end: `top top`,
          scrub: 1,
          // markers: true,
        },
        opacity: 1,
      });

      tl_exp.fromTo(
        experienceCompContainer.current,
        { x: "50vw" },
        {
          scrollTrigger: {
            trigger: exeprienceSection.current,
            start: "top top",
            end: () => {
              const timelineWidth =
                document.querySelector(".timeline")?.scrollWidth || 0;
              const viewportHeight = window.innerHeight;
              const viewportWidth = window.innerWidth;

              // Calculate: -timelineWidth + 100vh + 50vw
              const result =
                -timelineWidth + viewportHeight + viewportWidth / 2; // 50vw = 50% viewport width

              return `bottom +=${result}px`; // Use += if result is positive after calculation
            },
            scrub: true,
            // markers: true,
          },
          x: () => {
            const timelineWidth =
              document.querySelector(".timeline")?.scrollWidth || 0;
            const viewportWidth = window.innerWidth;

            const result = -timelineWidth + viewportWidth / 2; // 50vw = 50% viewport width
            return result;
          },
          ease: "none",
        }
      );
    },
    { dependencies: []});

  return (
    <div ref={exeprienceSection} className="experienceSection">
      <div ref={experienceHeader} className="experienceHeader"></div>
      <div ref={experienceCompContainer} className="experienceCompContainer">
        <ul
          ref={timeline}
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-horizontal text-white"
        >
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end max-w-3xl text-2xl">
              <time className="font-mono italic text-3xl">
                Feb. 2022 – Dec. 2024
              </time>
              <div className="font-black text-4xl mt-2">
                Bachelors in Computer Science
              </div>
              <p className="mt-4">
                Studying at RMIT University, gaining expertise in software
                development, full-stack applications, and cloud infrastructure.
                Active in student tech communities.
              </p>
            </div>
            <hr className="border-b-2 border-blue-500" />
          </li>

          <li>
            <hr className="border-b-2 border-green-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 max-w-xl text-2xl">
              <time className="font-mono italic text-3xl">
                April 2024 – Dec. 2024
              </time>
              <div className="font-black text-4xl mt-2">
                Web Developer at RISC RMIT
              </div>
              <p className="mt-4">
                Built a full-stack web application for RMIT Information Security
                Collective using Next.js, Node.js, and PostgreSQL. Created an
                interactive platform featuring blogs, event timelines, and
                applications.
              </p>
            </div>
            <hr className="border-b-2 border-yellow-500" />
          </li>

          <li>
            <hr className="border-b-2 border-purple-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end max-w-3xl text-2xl">
              <time className="font-mono italic text-3xl">
                May 2024 – Present
              </time>
              <div className="font-black text-4xl mt-2">
                Freelance Software Developer
              </div>
              <p className="mt-4">
                Worked with a team to develop websites, mobile apps, and backend
                solutions for Instagram influencers. Utilized diverse
                technologies including Flutter, React, Django, Firebase, AWS,
                and GCP.
              </p>
            </div>
            <hr className="border-b-2 border-red-500" />
          </li>

          <li>
            <hr className="border-b-2 border-cyan-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 max-w-3xl text-2xl">
              <time className="font-mono italic text-3xl">
                Sept. 2024 – Present
              </time>
              <div className="font-black text-4xl mt-2">
                Software Developer at TechZenith
              </div>
              <p className="mt-4">
                Developing tech solutions for small to medium businesses.
                Building websites and integrating AI tools to improve
                productivity while maintaining control over development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceComponent;
