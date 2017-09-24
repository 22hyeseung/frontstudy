import * as types from '../actions/ActionTypes';

// 초기 상태를 정의한다.
const initialState = {
  color: 'black',
  number: 0,
};

/**
 * state와 action을 파라미터로 갖는 리듀서 함수를 작성한다.
 * 리듀서 함수 작성 시 주의할 점
 * - state를 직접 수정해서는 안된다.
 * - 기존 state값에 덮어쓴 새 state 객체를 만드는 방식이어야 한다.
 */

function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
