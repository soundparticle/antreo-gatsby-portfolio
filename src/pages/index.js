import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import Skills from "../components/skills";

import styles from "./index.module.scss";

console.log(styles)

export default () => (
  <div className={styles.appContainer}>
      
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/about/" id={styles.link} className={styles.glow}>About</Link>    
    </div>
    <svg id={styles.svgCanvas}  preserveAspectRatio="xMinYMin slice" width="100%">
      {/* Translate was originally 150, 150 */}
      <g transform="translate(50, 60)">
        <circle className={styles.shootingStar} fill='white' cx="0" cy="0" r="2" radius="125" ></circle>
      </g>
    </svg>  


    <main>
      <div className={styles.pageContainer}>        
        <PortfolioSection/>
        <Skills/>
      </div>
    </main>
    
  </div>  
)
