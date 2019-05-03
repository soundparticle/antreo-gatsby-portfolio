import React from "react"
import { Link } from "gatsby";
import AboutSection from "../components/aboutSection";
import Header from "../components/header";

import styles from "./index.module.css";


export default () => (
  <div  style={{ color: `` }}>
    <Header headerText1="Antreo Pukay" />
    <Header headerText2="Full-Stack Developer" />
    <Header headerText3="acrosswalker at yahoo.com" />
    <nav>
      <Link to="/"><p id={styles.link}>Home</p></Link>    
    </nav>
    <AboutSection/> 
  </div>
)
