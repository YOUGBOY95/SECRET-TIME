import Hammer from 'hammerjs';
import React, { useState, useEffect, useRef } from 'react';

function HammerGesture({ refElement }) {
  useEffect(() => {
    const hammer = new Hammer(refElement.current);

    hammer.on('swipeleft', () => {
      console.log('swipe left');
    });

    hammer.on('swiperight', () => {
      console.log('swipe right');
    });

    return () => {
      hammer.destroy();
    };
  }, [refElement]);

  return null;
}

export default HammerGesture;
