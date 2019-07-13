import React from "react"
import { Link } from "gatsby";
import AboutSection from "../components/aboutSection";
import Header from "../components/header";

import styles from "./index.module.scss";


export default () => (
  <div>
    <Header />
    <div className={styles.linkWrapper}>
      <Link to="/" id={styles.link} className={styles.glow}>Home</Link>    
    </div>
    <AboutSection/> 
  </div>
)
