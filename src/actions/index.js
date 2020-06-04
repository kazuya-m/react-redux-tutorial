export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const RESET_MSG = 'リセットしました';
export const YOURNAME = 'YOURNAME';

export const increment = () => { //Action Creator
  return {
    type: INCREMENT //Action
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const reset = () => {
  return {
    type: RESET,
    msg: RESET_MSG
  }
}

export const showYourName = inputname => {
  // let input = document.getElementById('input');
  return {
    type: YOURNAME,
    inputName: inputname
  }
}