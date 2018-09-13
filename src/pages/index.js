import React from "react";
// import { Link } from "gatsby";
import Header from "../components/header";
import PortfolioSection from "../components/portfolioSection";
import SkillsAside from "../components/skillsAside";
import AboutSection from "../components/aboutSection";


export default () => (
  <body>
  
  {/* <Link to="/contact/">Contact</Link> */}
  <Header headerText1="Antreo Pukay" />
  <Header headerText2="Full-Stack Developer" />
  <Header headerText3="Email: acrosswalker at yahoo.com" />
  <hr/>
  {/* <Header headerText2="Hello Antreo!" /> */}
  {/* <p>What a world.</p> */}

    <div class="page-container">
      <main>
        <PortfolioSection/>

      <aside>
        <nav>
          <SkillsAside/>
        </nav>  
      </aside>  

        <AboutSection/> 

      </main>
    </div>
  
  </body>
)

