import "../styles/Home.css";
// import { useEffect } from "react";
import ExperienceComponent from "../components/ExperienceComponent";
import SkillComponent from "../components/SkillComponent";
import Hero from "../components/Hero";

const Home = () => {

  return (
    <div className="homeContianer">
      <div className="firstBlackSection">
        <Hero/>
        <ExperienceComponent/>
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
