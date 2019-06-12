import React from "react";
import ReactHover from "./ReactHover";

// import './component.css';
import styles from "./skills.module.scss";
console.log(styles);


let hoverWindow = document.getElementById('embedId');
let windowWidth;

if (hoverWindow) {
  windowWidth = hoverWindow.getBoundingClientRect();
}

console.log('* embed wrapper *', hoverWindow);
console.log('* width *', windowWidth);

let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
console.log('** viewport width', w);
console.log('** viewport height', h);


const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: -140,
  shiftY: -200
}


export default () =>

<section>
  <h5>Skills</h5>
  {/* consider creating a skills array to populate button skills */}
  <div className={styles.skillsBackground}>
    <section className={styles.skillsContainer}>
      {/* AGILE */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>        
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/Agile_software_development">
                Agile
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
          <div className={styles.embedWindow} id="embedId">
            <embed alt="Agile Software Development Wikipedia Entry" src="https://en.wikipedia.org/wiki/Agile_software_development"/>                
          </div>
        </ReactHover.Hover>
      </ReactHover>       
      {/* NODE */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://nodejs.org/en/about/">
                Node
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="NodeJS Website" src="https://nodejs.org/en/about/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>       
      {/* VUE */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://vuejs.org/v2/guide/">
                Vue
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="VueJS Website" src="https://vuejs.org/v2/guide/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>       
      {/* React */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                React
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="React Wikipedia Entry" src="https://en.wikipedia.org/wiki/React_(JavaScript_library)"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>     
      {/* Redux */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://redux.js.org/">
                Redux
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Redux Website" src="https://redux.js.org/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>     
      {/* Express */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://expressjs.com/">
                Express
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Redux Website" src="https://expressjs.com/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* Javascript    */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/JavaScript">
                Javascript
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Javascript Wikipedia entry" src="https://en.wikipedia.org/wiki/JavaScript"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* HTML */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/JavaScript">
                HTML5
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Javascript Wikipedia entry" src="https://en.wikipedia.org/wiki/JavaScript"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* CSS */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                CSS3
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="CSS Wikipedia entry" src="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* MONGO */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/MongoDB">
                MongoDB
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="MongoDB Wikipedia Entry" src="https://en.wikipedia.org/wiki/MongoDB"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* Mongoose */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/">
                Mongoose
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Introduction to Mongoose from FreeCodeCamp.org" src="https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* PostgresQL */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/PostgreSQL">
                PostgresQL
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="PostgresQL Wikipedia entry" src="https://en.wikipedia.org/wiki/PostgreSQL"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* TDD */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/Test-driven_development">
                TDD
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="PostgresQL Wikipedia entry" src="https://en.wikipedia.org/wiki/Test-driven_development"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* Jest */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://jestjs.io/">
                Jest
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Jest" src="https://jestjs.io/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* Mocha */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)">
                Mocha
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="Mocha Wikipedia Entry" src="https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
      {/* QUnit */}
      <ReactHover options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          <button className={styles.skills}>
            <div className={styles.skillWrapper}>
              <a className={styles.skillLinks} href="https://qunitjs.com/">
                QUnit
              </a>
            </div>
          </button>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div className={styles.embedWindow}>
                <embed alt="QUnit Website" src="https://qunitjs.com/"/>                
            </div>
        </ReactHover.Hover>
      </ReactHover>  
    </section>
  </div>
</section>
