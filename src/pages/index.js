import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import Skills from "../components/skills";

import styles from "./index.module.css";

console.log(styles)

export default () => (
  <div className={styles.appContainer}>
    <Header/>
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link} className={styles.glow}>About</Link>    
    </div>
    <main>
      <div className={styles.pageContainer}>        
        <PortfolioSection/>
        <Skills/>
      </div>
    </main>
  </div>  
)
