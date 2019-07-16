import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import Skills from "../components/skills";

import styles from "./index.module.scss";

console.log(styles)

export default () => (
  <div className={styles.appContainer}>
      
      {/* Translate was originally 150, 150 */}
    <svg id={styles.svgCanvas}  preserveAspectRatio="xMinYMin slice" width="100%">
      <g id={styles.starGroup}></g>
      <g transform="translate(40, 90)">
        <circle className={styles.shootingStar} fill='white' cx="0" cy="0" r="2" radius="125" ></circle>
      </g>
    </svg>  
    <Header />
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
