import React from 'react';
import { Star } from './star';


export const TwinkleStars = ({ stars, debug }) => (
  <g>
    { stars.map((coord, index) => {
      const offset = index * 100 + 500 * Math.random();
      const duration = 1100 + Math.random() * 1000;
      const brightness = 0.7 + Math.random() * 0.3;

      return (
        <Star
          debug={debug}
          key={index}
          {...coord}
          animationOffset={offset}
          duration={duration}
          brightness={brightness} 
        />
      );
    })}
  </g>
);
