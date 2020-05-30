import { YOURNAME } from '../actions';

const initialName = {yourname: '名前を入力してください'};

export default (state = initialName, action) => {
  switch (action.type) {
    case YOURNAME:
      console.log(state);
      return {yourname: state.yourname = action.inputName}
    default:
      return {yourname: state.yourname}
  }
}
