// src/App.js

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin); // Register the ScrollTrigger plugin

const About = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box", // The element that triggers the animation
        start: "top 80%", // When the top of the trigger hits 80% of the viewport
        end: "top 30%", // When the top of the trigger hits 30% of the viewport
        scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
 // Show markers for debugging (optional)
      },
      x: 400, // Move the box 400px to the right
      rotation: 360, // Rotate 360 degrees
      duration: 3, // Animation duration
    });

    // Example of animating text using TextPlugin
    gsap.fromTo(
      ".text",
      {
        text: "x", // Starting text
        opacity: 0, // Start invisible
      },
      {
        scrollTrigger: {
          trigger: ".text", // The element that triggers the animation
          start: "top 50%", // When the top of the trigger hits 50% of the viewport
          end: "top 30%", // When the top of the trigger hits 30% of the viewport
          scrub: true, // Smooth scrubbing
          markers: true, // Show markers for debugging (optional)
        },
        text: "Animation Complete!", // Ending text
        opacity: 1, // Fade in
        duration: 3, // Animation duration
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh", padding: "50px", position: "relative" }}>
      <h1>GSAP ScrollTrigger Example</h1>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "coral",
          position: "absolute",
          top: "50%",
          left: "10%",
        }}
      />

      <div
        className="text"
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          fontSize: "24px",
          opacity: 0, // Initially invisible
        }}
      >
        Scroll down to see the animation!
      </div>
    </div>
  );
};

export default About;
