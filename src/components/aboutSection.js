
/* eslint-disable react/display-name */

import React from 'react';
import Footer from '../components/footer';

import styles from './aboutSection.module.css';

export default () =>
  <div className={styles.aboutSectionWrapper}>
    <br/>
    <section className={styles.aboutSection}>
      <h6>About Me</h6>
      <p>I&apos;m a Full-Stack JavaScript developer living in Portland, OR. I have great passion for collaboration with others in service of realizing the client&apos;s vision to bring their ideas into the world.</p>
      <p>I grew up in a tree-house along the Suwannee River in Florida, climbing trees, chasing snakes, and ran with the wolves. I was surrounded by artists and creative thinkers, so I bring a unique, creative, and open minded approach attitude to projects. I love using my tech and people skills to help others and I pride myself on being a great teammate.</p>
      <p>Before becoming a developer, I had a career as a professional recording engineer and studio owner for well over a decade. I built my own gear and recorded to old tape machines on occasion.  I enjoyed crafting sounds and records, and supporting the music community. A particular highlight for me was engineering and mixing a song on a Grammy nominated album! I still record music sometimes, but since discovering web development, I&apos;ve immersed myself in this interesting and always evolving world.</p>
      <p>I have a huge passion for using tech to improve our world and our lives. On top of coding, music is always a huge part of my life. As a developer, I love getting involved with projects that touch on these areas as much as possible, however I find inspiration in many different areas, so please do let me know what you&apos;re wanting to build.</p>
      <Footer />
    </section>
  </div>;
