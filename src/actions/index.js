export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const RESET_MSG = 'リセットしました';

export const increment = () => {
  return {
    type: INCREMENT
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