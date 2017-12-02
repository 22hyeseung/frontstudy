import React, { Component } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div class="CounterList">{counterList}</div>;
};
