import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import Skills from "../components/skills";
import AboutSection from "../components/aboutSection";

import styles from "./index.module.css";

console.log(styles)

export default () => (
  <div className={styles.appContainer}>
  {/* <Link to="/contact/">Contact</Link> */}
  <Header headerText1="Antreo Pukay" />
  <Header headerText2="Full-Stack Developer" />
  <Header headerText3="acrosswalker at yahoo.com" />
  <nav>
    <Link to="/about/"><p id={styles.link}>About</p></Link>    
  </nav>

    <main>
      <div className={styles.pageContainer}>        
          <PortfolioSection/>
          <Skills/>
          <AboutSection/> 
      </div>
    </main>

  </div>  
)

