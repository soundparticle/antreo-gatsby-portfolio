import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import SkillsAside from "../components/skillsAside";
import AboutSection from "../components/aboutSection";
import styles from "./index.module.css"
console.log(styles)




export default () => (
  <div>
  
  {/* <Link to="/contact/">Contact</Link> */}
  <Header headerText1="Antreo Pukay" />
  <Header headerText2="Full-Stack Developer" />
  <Header headerText3="Email: acrosswalker at yahoo.com" />
  <hr/>
  {/* <Header headerText2="Hello Antreo!" /> */}
  {/* <p>What a world.</p> */}

    <div className="page-container">
      <main>
        <PortfolioSection/>

      <aside>
        <nav>
          <SkillsAside/>
        </nav>  
      </aside>  

        <AboutSection className="about"/> 

      </main>
    </div>
  
  </div>
)

