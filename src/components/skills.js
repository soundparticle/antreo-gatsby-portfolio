import React from "react";
import styles from "./skills.module.scss"
console.log(styles)



export default () =>

<section>
  <h5>Skills</h5>
  {/* consider creating a skills array to populate span skills */}
  <div className={styles.skillsBackground}>
    <section className={styles.skillsContainer}>
      <button className={styles.skills} className={styles.glowingBorder}>Agile</button>
      <button className={styles.skills} className={styles.glowingBorder}>Node</button>
      <button className={styles.skills} className={styles.glowingBorder}>Vue</button>
      <button className={styles.skills} className={styles.glowingBorder}>React</button>
      <button className={styles.skills} className={styles.glowingBorder}>Redux</button>
      <button className={styles.skills} className={styles.glowingBorder}>Express</button>
      <button className={styles.skills} className={styles.glowingBorder}>JavaScript</button>
      <button className={styles.skills} className={styles.glowingBorder}>HTML</button>
      <button className={styles.skills} className={styles.glowingBorder}>CSS</button>
      <button className={styles.skills} className={styles.glowingBorder}>MongoDB</button>
      <button className={styles.skills} className={styles.glowingBorder}>Mongoose</button>
      <button className={styles.skills} className={styles.glowingBorder}>PostgresQL</button>
      <button className={styles.skills} className={styles.glowingBorder}>TDD</button>
      <button className={styles.skills} className={styles.glowingBorder}>Mocha</button>
      <button className={styles.skills} className={styles.glowingBorder}>Jest</button>        
    </section>
  </div>
</section>
