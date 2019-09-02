/* eslint-disable react/display-name */

import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './skills.module.scss';


export default () =>

  <section>
    {/* consider creating a skills array to populate button skills */}
    <div className={styles.skillsBackground}>
      <h4>Skills</h4>
      <section className={styles.skillsContainer} id="skillsWrapper">
        {/* AGILE */}
        <button className={styles.skills}>        
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="My favorite way to build software!" href="https://agilemanifesto.org" className={styles.skillLinks}>
            Agile
            </a>
          </div>
        </button>
        {/* NODE */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />
            <a data-tip="Not just for the back-end!" href="https://nodejs.org/en/about/" className={styles.skillLinks}>
            Node
            </a>
          </div>
        </button>
        {/* VUE */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Love this wonderful javascript framework!" href="https://vuejs.org/v2/guide/" className={styles.skillLinks}>
            Vue
            </a>
          </div>
        </button>
        {/* React */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="A close second favorite to VueJS." href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" className={styles.skillLinks}>
            React
            </a>
          </div>
        </button>
        {/* Redux */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Powerful tool to simplify state management in React." href="https://redux.js.org/" className={styles.skillLinks}>
            Redux
            </a>
          </div>
        </button>
        {/* Express */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Quickly build web API's!" href="https://expressjs.com/" className={styles.skillLinks}>
            Express
            </a>
          </div>
        </button>
        {/* Javascript    */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Our old dear friend!" href="https://en.wikipedia.org/wiki/JavaScript" className={styles.skillLinks}>
            Javascript
            </a>
          </div>
        </button>
        {/* HTML */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="New syntactic features and localStorage...Woot!" href="https://en.wikipedia.org/wiki/JavaScript" className={styles.skillLinks}>
            HTML5
            </a>
          </div>
        </button>
        {/* CSS */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Flex-box and Grid please!" className={styles.skillLinks} href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
            CSS3
            </a>
          </div>
        </button>
        {/* MONGO */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Access data fast and avoid joins!" src="https://en.wikipedia.org/wiki/MongoDB" className={styles.skillLinks}>
            MongoDB
            </a>
          </div>
        </button>
        {/* Mongoose */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Model and validate your MongoDB data!" href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/" className={styles.skillLinks}>
            Mongoose
            </a>
          </div>
        </button>
        {/* PostgresQL */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Great for smaller apps where the data structure is known." href="https://en.wikipedia.org/wiki/PostgreSQL" className={styles.skillLinks}>
            PostgresQL
            </a>
          </div>
        </button>
        {/* TDD */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Who doesn't love efficient code and green check marks!" href="https://en.wikipedia.org/wiki/Test-driven_development" className={styles.skillLinks}>
            TDD
            </a>
          </div>
        </button>
        {/* Jest */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Excellent for testing in React Apps." href="https://jestjs.io/" className={styles.skillLinks}>
            Jest
            </a>
          </div>
        </button>
        {/* Mocha */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Asynchronous test framework running on NodeJS." href="https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)" className={styles.skillLinks}>
            Mocha
            </a>
          </div>
        </button>
        {/* QUnit */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="Simple javascript unit testing framework...can display results in browser!" href="https://qunitjs.com/" className={styles.skillLinks}>
            QUnit
            </a>
          </div>
        </button>
      </section>
    </div>
  </section>;
