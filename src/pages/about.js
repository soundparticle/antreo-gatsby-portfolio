import React from "react"
import { Link } from "gatsby";
import AboutSection from "../components/aboutSection";
import Header from "../components/header";

import styles from "./index.module.css";


export default () => (
  <div>
    <Header />
    {/* <Header headerText1="Antreo Pukay" />
    <Header headerText2="Full-Stack Developer" />
    <Header headerText3="acrosswalker at yahoo.com" /> */}
    
    <div className={styles.linkWrapper}>
      <Link to="/" id={styles.link} className={styles.glow}>Home</Link>    
    </div>
  
    <AboutSection/> 
  </div>
)
