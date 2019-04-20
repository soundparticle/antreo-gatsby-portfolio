import React from "react";
import styles from "./skills.module.css"
console.log(styles)



export default props =>

<section>
  <h5>Skills</h5>
    <section className={styles.skillsContainer}>
      <span className="skills">NodeJS</span>
      <span className="skills">VueJS</span>
      <span className="skills">React</span>
      <span className="skills">Redux</span>
      <span className="skills">JavaScript</span>
      <span className="skills">HTML, CSS</span>
      <span className="skills">MongoDB</span>
      <span className="skills">Mongoose</span>
    </section>
</section>
