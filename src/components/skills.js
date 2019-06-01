import React from "react";
import styles from "./skills.module.scss"
console.log(styles)



export default () =>

<section>
  <h5>Skills</h5>
  {/* consider creating a skills array to populate span skills */}
  <div className={styles.skillsBackground}>
    <section className={styles.skillsContainer}>
          <button className={styles.skills}>
            <a className={styles.agile} href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a>
            <div className={styles.preview}>
              <iframe src="https://en.wikipedia.org/wiki/Agile_software_development" width = "300px" height = "200px"></iframe>
            </div>
          </button>

      <button className={styles.skills}>
        <a href="https://nodejs.org/en/about/">Node</a>
      </button>
      <button className={styles.skills}>
        <a href="https://vuejs.org/v2/guide/">Vue</a>
      </button>
      <button className={styles.skills}>
        <a href="https://reactjs.org/">React</a>
      </button>
      <button className={styles.skills}>
        <a href="https://redux.js.org/">Redux</a>
      </button>
      <button className={styles.skills}>
        <a href="https://expressjs.com/">Express</a>
      </button>
      <button className={styles.skills}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
      </button>
      <button className={styles.skills}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">HTML5</a>
      </button>
      <button className={styles.skills}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS3</a>
      </button>
      <button className={styles.skills}>
        <a href="https://www.mongodb.com/what-is-mongodb">MongoDB</a>
      </button>
      <button className={styles.skills}>
        <a href="https://mongoosejs.com/">Mongoose</a>
      </button>
      <button className={styles.skills}>
        <a href="https://www.postgresql.org/">PostgresQL</a>
      </button>
      <button className={styles.skills}>
        <a href="https://en.wikipedia.org/wiki/Test-driven_development">TDD</a>
      </button>
      <button className={styles.skills}>
        <a href="https://mochajs.org/">Mocha</a>
      </button>
      <button className={styles.skills}>
        <a href="https://jestjs.io/">Jest</a>
      </button>        
      <button className={styles.skills}>
        <a href="https://qunitjs.com/">QUnit</a>
      </button>        
    </section>
  </div>
</section>
