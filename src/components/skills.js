import React from "react";
import styles from "./skills.module.css"
console.log(styles)



export default props =>

<section>
  <h5>Skills</h5>
  {/* consider creating a skills array to populate span skills */}
    <section className={styles.skillsContainer}>
      <span className="skills">Agile</span>
      <span className="skills">Node</span>
      <span className="skills">Vue</span>
      <span className="skills">React</span>
      <span className="skills">Redux</span>
      <span className="skills">Express</span>
      <span className="skills">JavaScript</span>
      <span className="skills">HTML</span>
      <span className="skills">CSS</span>
      <span className="skills">MongoDB</span>
      <span className="skills">Mongoose</span>
      <span className="skills">PostgresQL</span>
      <span className="skills">TDD</span>
      <span className="skills">Mocha</span>
      <span className="skills">Jest</span>
    </section>
</section>
