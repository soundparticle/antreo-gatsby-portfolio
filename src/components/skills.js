import React from "react";
import styles from "./skills.module.scss"
console.log(styles)



export default props =>

<section>
  <h5>Skills</h5>
  {/* consider creating a skills array to populate span skills */}
  <div className={styles.skillsBackground}>
    <section className={styles.skillsContainer}>
      <span href="#" className={styles.skills}>Agile</span>
      <span className={styles.skills}>Node</span>
      <span className={styles.skills}>Vue</span>
      <span className={styles.skills}>React</span>
      <span className={styles.skills}>Redux</span>
      <span className={styles.skills}>Express</span>
      <span className={styles.skills}>JavaScript</span>
      <span className={styles.skills}>HTML</span>
      <span className={styles.skills}>CSS</span>
      <span className={styles.skills}>MongoDB</span>
      <span className={styles.skills}>Mongoose</span>
      <span className={styles.skills}>PostgresQL</span>
      <span className={styles.skills}>TDD</span>
      <span className={styles.skills}>Mocha</span>
      <span className={styles.skills}>Jest</span>        
    </section>
  </div>
</section>
