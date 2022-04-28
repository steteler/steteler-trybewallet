import { INPUT_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, { type, email, password }) {
  switch (type) {
  case INPUT_LOGIN:
    return {
      ...state,
      email,
      password,
    };

  default:
    return state;
  }
}

export default user;
