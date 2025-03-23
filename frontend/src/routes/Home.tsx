import "../styles/Home.css";
// import { useEffect } from "react";
import ExperienceComponent from "../components/ExperienceComponent";
import SkillComponent from "../components/SkillComponent";
import Hero from "../components/Hero";
import ProjectComponent from "../components/ProjectComponent";
import AchievementComponent from "../components/AchievementComponent";

const Home = () => {

  return (
    <div className="homeContianer">
      <div className="firstBlackSection">
        <Hero/>
        <ExperienceComponent/>
      </div>

      <div className="firstWhiteSection">
        <SkillComponent/>
      </div>
      <div className="secondBlackSection">
        <ProjectComponent/>
        <AchievementComponent/>
      </div>
    </div>
  );
};

export default Home;
