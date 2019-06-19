import React, { Component } from 'react';
import Hover from '../lib/Hover';
import Trigger from '../lib/Trigger';
import PropTypes from 'prop-types';
// import skills from './skills';

class ReactHover extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      children: PropTypes.object,
      hoverComponentStyle: {
        display: 'none',
        position: 'absolute'
      }
    }
  }

  renderItem (item, index) {
    if (item.type.name === 'Trigger' || item.props.type === 'trigger') {
      return (
        <Trigger key={index}>
          {item}
        </Trigger>
      )
    } else if (item.type.name === 'hover' || item.props.type === 'hover') {
      return (
        <Hover key={index}>
          {item}
        </Hover>
      )
    }
  }

  render () {
    const { hoverComponentStyle } = this.state;
    let childrenWithProps = [];
    for (let child of this.props.children) {
      if (child.props) {
        if (child.type.name === 'Trigger' || child.props.type === 'trigger') {
          childrenWithProps.push(React.cloneElement(child, {
            setVisibility: this.setVisibility.bind(this),
            getCursorPos: this.getCursorPos.bind(this)
          }))
        } else if (child.type.name === 'Hover' || child.props.type === 'hover') {
          childrenWithProps.push(React.cloneElement(child, {
            styles: hoverComponentStyle,
            setVisibility: this.setVisibility.bind(this),
            getCursorPos: this.getCursorPos.bind(this)
          }))
        }
      }
    }

    return (
      <div>
        {childrenWithProps.map((item, index) => this.renderItem(item, index))}
      </div>
    )
  }

  setVisibility (flag) {
    let { hoverComponentStyle } = this.state;
    let updatedStyles = null;
    if (flag) {
      updatedStyles = { ...hoverComponentStyle, display: 'block' }
    } else {
      // TODO: set display back to none!!!!!
      // display should be: none
      updatedStyles = { ...hoverComponentStyle, display: 'none' }
    }
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }


  getCursorPos (e) {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    // console.log('*** cursor X', cursorX);
    let { options: { followCursor, shiftX, shiftY } } = this.props;
    let { hoverComponentStyle } = this.state;
    let updatedStyles = null;
    if (!followCursor) {
      return;
    }
    if (isNaN(shiftX)) {
      shiftX = 0;
    }
    if (isNaN(shiftY)) {
      shiftY = 0;
    }
    updatedStyles = { ...hoverComponentStyle, top: cursorY + shiftY, left: cursorX + shiftX }
    this.setState({
      hoverComponentStyle: updatedStyles
    })
  }
}

// const cursorX = e.pageX;


ReactHover.Trigger = Trigger;
ReactHover.Hover = Hover;

export default ReactHover;
