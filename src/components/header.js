import React from "react";
import styles from "./header.module.css"
console.log(styles)

export default props => 

<header className={styles.headerContainer}>
  
  <div id={styles.headerPair}>
    <h1 className={styles.headerOne}>ANTREO PUKAY</h1>
    <h2 className={styles.headerTwo}>Full-Stack Developer</h2>
    <h3 className={styles.headerThree}>acrosswalker at yahoo.com</h3>
{/* 
    <h1 className={styles.headerOne}>
      {props.headerText1}
    </h1>
    <h2 className={styles.headerTwo}>
      {props.headerText2}
    </h2>
    <h3 className={styles.headerThree}>
      {props.headerText3}
    </h3> */}
  </div>
  <hgroup>
  </hgroup>
</header>
