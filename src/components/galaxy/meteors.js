import React from 'react';
import { Meteor } from './meteor';
import { METEOR_DATA } from './meteorData';

export class Meteors extends React.Component {
  timerRef = null;

  constructor(props) {
    super(props);
    this.state = {
      activeMeteorIndex: 0
    };
    this.next = this.next.bind(this);
  }
  
  componentDidMount() {
    this.next();
  }
  
  componentWillUnmount() {
    clearTimeout(this.timerRef);
  }

  next() {
    clearTimeout(this.timerRef);
    
    const availableCount = METEOR_DATA.length;
    let newIndex = Math.round(Math.random() * availableCount);
    console.log('* * newIndex', newIndex);
    console.log('*** current activeMeteorIndex', this.state.activeMeteorIndex);
    
    if(newIndex === this.state.activeMeteorIndex) {
      newIndex = (newIndex + 1) % availableCount;
    }
    
    this.setState({
      activeMeteorIndex: newIndex
    });
    
    const minDelay = 5000;
    const maxDelay = 10000;
    const nextTickTimeout = minDelay + Math.random() * (maxDelay - minDelay);
    
    this.timerRef = setTimeout(this.next, nextTickTimeout);
    console.log('*** this.timerRef', this.timerRef);
  }

  render() {
    const { activeMeteorIndex } = this.state;
    const meteor = METEOR_DATA[activeMeteorIndex];
    const { debug } = this.props;
    console.log('debug', debug);

    if(debug === false) {
      return <Meteor {...meteor} debug={false} />;
    } else {
      return (
        <g >
          {
            METEOR_DATA.map((meteorData, index) => (
              <Meteor {...meteorData} key={index} debug={true} />
            ))
          }
        </g>
      );
    }
  }
}
