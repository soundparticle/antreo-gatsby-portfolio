import React from 'react';
import { Link } from 'gatsby';
import backArrow from '../assets/back-arrow.png'; 

class FourOhFour extends React.Component {
  render() {
    return (
      <div>
        <h1>Oh no...page not found!</h1>
        <Link to="/">
          <img src={backArrow} alt="Back Arrow"/>
        </Link>
      </div>
    );
  }
}
export default FourOhFour;
