import React, { Component } from 'react';
// import Counter from './Counter';
import CounterContainer from '../containers/CounterContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <CounterContainer />
      </div>
    );
  }
}
