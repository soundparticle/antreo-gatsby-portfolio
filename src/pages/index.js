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

    
      <main className="pageContainer">
      <section>
        <PortfolioSection/>
      </section>
        <SkillsAside className="skills"/>
        {/* <aside>
          <nav>
            <h3>Skills</h3>
              <ul>
                <li>NodeJS</li>
                <li>VueJS</li>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>HTML, CSS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
          </nav>
        </aside> */}
        <section>
          <AboutSection className="about"/> 
        </section>
  
      </main>
    </div>
  

)

