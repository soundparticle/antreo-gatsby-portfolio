import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import SkillsAside from "../components/skillsAside";
import AboutSection from "../components/aboutSection";
import styles from "./index.module.css";
console.log(styles)




export default () => (
  <div className="app-container">
  
  {/* <Link to="/contact/">Contact</Link> */}
  <Header headerText1="Antreo Pukay" />
  <Header headerText2="Full-Stack Developer" />
  <Header headerText3="acrosswalker at yahoo.com" />
  {/* <hr/> */}

    <main>
      <div className="pageContainer">
        <section>
          <PortfolioSection/>
        </section>
          
        <SkillsAside className="skills"/>
          
        <section>
          <AboutSection className="about"/> 
        </section> 
      </div>
    </main>

  </div>  
)

