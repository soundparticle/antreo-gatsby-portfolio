import React from "react";
import styles from "./header.module.css"
console.log(styles)

export default props => 

<header className={styles.headerContainer}>
    <h1 className={styles.headerOne}>
      {props.headerText1}
    </h1>
    <h2>
      {props.headerText2}
    </h2>
    <h3>
      {props.headerText3}
    </h3>
  <hgroup>
  </hgroup>
</header>





