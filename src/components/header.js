import React from "react";
import styles from "./header.module.css"
console.log(styles)

export default props => 

<header className={styles.headerContainer}>
  
  <div id={styles.headerPair}>
        {/* <svg id={styles.svgCanvas}  preserveAspectRatio="xMinYMin slice" width="100%">
      <g transform="translate(50, 60)">
        <circle className={styles.shootingStar} fill='white' cx="0" cy="0" r="2" radius="125" ></circle>
      </g>
    </svg>   */}
    <h1 className={styles.headerOne}>ANTREO PUKAY</h1>
    <h2 className={styles.headerTwo}>Full-Stack Developer</h2>
    <h3 className={styles.headerThree}>Acrosswalker at yahoo.com</h3>
  </div>
  <hgroup>
  </hgroup>
</header>
