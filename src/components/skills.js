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
        <div className={styles.skillWrapper}>
          <a className={styles.agile} href="https://en.wikipedia.org/wiki/Agile_software_development">
            Agile
          </a>
          <div className={styles.preview}>
            <embed title="linkPreview" src="https://en.wikipedia.org/wiki/Agile_software_development" width = "300px" height = "200px"></embed>
          </div>        
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a className={styles.node}href="https://nodejs.org/en/about/">
            Node
          </a>
          <div className={styles.preview}>
            <embed title="linkPreview" src="https://nodejs.org/en/about/" width = "300px" height = "200px"></embed>
          </div>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://vuejs.org/v2/guide/">
            Vue
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://reactjs.org/">
            React
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://redux.js.org/">
            Redux
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://expressjs.com/">
            Express
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            JavaScript
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
            HTML5
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
            CSS3
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://www.mongodb.com/what-is-mongodb">
            MongoDB
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://mongoosejs.com/">
            Mongoose
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://www.postgresql.org/">
            PostgresQL
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://en.wikipedia.org/wiki/Test-driven_development">
            TDD
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://mochajs.org/">
            Mocha
          </a>
        </div>
      </button>
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://jestjs.io/">
            Jest
          </a>
        </div>
      </button>   
      <button className={styles.skills}>
        <div className={styles.skillWrapper}>
          <a href="https://qunitjs.com/">
            QUnit
          </a>
        </div>
      </button>        
    </section>
  </div>
</section>
