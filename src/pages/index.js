import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import Skills from "../components/skills";
// import AboutSection from "../components/aboutSection";

import styles from "./index.module.css";

console.log(styles)

export default () => (
  <div className={styles.appContainer}>
    <Header headerText1="Antreo Pukay" />
    <Header headerText2="Full-Stack Developer" />
    <Header headerText3="acrosswalker at yahoo.com" />
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link}>About</Link>    
    </div>
    {/* <hr /> */}
    <main>
      <div className={styles.pageContainer}>        
          <PortfolioSection/>
          <Skills/>
      </div>
    </main>

  </div>  
)

