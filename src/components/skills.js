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
            <a data-tip="I am the Agile tooltip" className={styles.skillLinks}>
            Agile
            </a>
          </div>
        </button>
        {/* NODE */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />
            <a data-tip="I am the Node tooltip" className={styles.skillLinks}>
            Node
            </a>
          </div>
        </button>
        {/* VUE */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Vue tooltip" className={styles.skillLinks}>
            Vue
            </a>
          </div>
        </button>
        {/* React */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the React tooltip" className={styles.skillLinks}>
            React
            </a>
          </div>
        </button>
        {/* Redux */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Redux tooltip" className={styles.skillLinks}>
            Redux
            </a>
          </div>
        </button>
        {/* Express */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Express tooltip" className={styles.skillLinks}>
            Express
            </a>
          </div>
        </button>
        {/* Javascript    */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Javascript tooltip" className={styles.skillLinks}>
            Javascript
            </a>
          </div>
        </button>
        {/* HTML */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the HTML5 tooltip" className={styles.skillLinks}>
            HTML5
            </a>
          </div>
        </button>
        {/* CSS */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the CSS3 tooltip" className={styles.skillLinks}>
            CSS3
            </a>
          </div>
        </button>
        {/* MONGO */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the MongoDB tooltip" className={styles.skillLinks}>
            MongoDB
            </a>
          </div>
        </button>
        {/* Mongoose */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Mongoose tooltip" className={styles.skillLinks}>
            Mongoose
            </a>
          </div>
        </button>
        {/* PostgresQL */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the PostgresQL tooltip" className={styles.skillLinks}>
            PostgresQL
            </a>
          </div>
        </button>
        {/* TDD */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the TDD tooltip" className={styles.skillLinks}>
            TDD
            </a>
          </div>
        </button>
        {/* Jest */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Jest tooltip" className={styles.skillLinks}>
            Jest
            </a>
          </div>
        </button>
        {/* Mocha */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the Mocha tooltip" className={styles.skillLinks}>
            Mocha
            </a>
          </div>
        </button>
        {/* QUnit */}
        <button className={styles.skills}>
          <div className={styles.skillWrapper}>
            <ReactTooltip />  
            <a data-tip="I am the QUnit tooltip" className={styles.skillLinks}>
            QUnit
            </a>
          </div>
        </button>
      </section>
    </div>
  </section>;
