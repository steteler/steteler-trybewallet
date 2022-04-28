import { INPUT_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type, currencies, expenses }) {
  switch (type) {
  case INPUT_WALLET:
    return {
      ...state,
      currencies,
      expenses,
    };

  default:
    return state;
  }
}

export default wallet;
