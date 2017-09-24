import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      // 클릭 이벤트 발생 => number + 1
      onClick={onIncrement}
      // 우클릭 이벤트 발생 => default 이벤트(menu가 열리는 이벤트)를 취소하고, number - 1
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      // 더블클릭 이벤트 발생 => color코드를 변경하고, 배경색을 해당 색으로 바꾼다.
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}>
      {/* number를 화면에 표시한다. */}
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

// 기본(default) 설정
Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter;
