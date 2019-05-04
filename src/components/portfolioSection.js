import React from "react";
import styles from "./portfolioSection.module.css"
import ImagesSection from "../components/imagesSection";
console.log(styles)


export default props =>

<div className={styles.portfolioContainer}>
  {/* <h4>Portfolio</h4> */}
  <ImagesSection imagesSectionText="image link tiles here"/>
</div>
