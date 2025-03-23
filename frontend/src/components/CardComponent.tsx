import "../styles/Card.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP);

interface CardComponentProps {
    photo: string;
    head: string;
    info: string;
  }

const CardComponent: React.FC<CardComponentProps> = ({photo, head, info}) => {
    const thisCard = useRef<HTMLDivElement>(null);
    const information = useRef(null);
    const media = useRef(null);

    useGSAP(() => {
        const infoDiv = thisCard.current?.querySelector(".information") as HTMLElement;
        // Set initial position
        gsap.set(infoDiv, { yPercent: 100 });

        const tl = gsap.timeline({paused: true});
        tl.to(infoDiv, {
            yPercent: 0,
            ease: "power1.out",
            duration: 0.5,
        });
        const cardElement = thisCard.current;
        if (cardElement){
            cardElement.addEventListener("mouseenter", () => tl.timeScale(1).play());
            cardElement.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
        }

        // Cleanup to avoid memory leaks
        return () => {
            if (cardElement) {
            cardElement.removeEventListener("mouseenter", () => tl.play());
            cardElement.removeEventListener("mouseleave", () => tl.reverse());
            }
        };

    }, {scope: thisCard});
    
    return (
        <div ref={thisCard} className="card">
            <div ref={media} className="media">
                <img src={photo} alt="media" />
            </div>
            <div ref={information} className="information">
                <h1>{head}</h1>
                <hr className="hzline"/>
                <p>{info}</p>
            </div>
        </div>
    );
};  

export default CardComponent;
