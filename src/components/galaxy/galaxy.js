import React from 'react';
import { STAR_COORDS } from '../galaxy/starCoords';
import styled from 'styled-components';
import { TwinkleStars } from '../galaxy/twinkleStars';

import styles from "./galaxy.module.scss";


const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
`

class Universe extends React.Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      debug: false
    }
  }

  render() {
    return (
      <Layout
        ref={this.myRef}>
        {/* <svg viewBox="0 0 2000 1000" width="2000" height="1000"> */}
        <svg id={styles.svgCanvas} viewBox="0 0 2000 1000" width="100%" height="100%" preserveAspectRatio="xMinYMin slice">
          <TwinkleStars stars={STAR_COORDS} debug={this.state.debug} />
          {/* <MeteorShower debug={this.state.debug} /> */}
        </svg>
      </Layout>
    )
  }
}
export default Universe;
