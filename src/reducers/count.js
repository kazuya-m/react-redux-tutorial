import { INCREMENT, DECREMENT, RESET } from '../actions';

const initialState = {value: 0};

export default (state = initialState, action) => { //Reducer
  switch (action.type) {
    case INCREMENT:
      console.log(state);
      return { value: state.value +1 }
    case DECREMENT:
      return { value: state.value -1 }
    case RESET:
      console.log(action.msg);
      return { value: state.value = 0 }
    default:
      return { value: state.value }
  }
}