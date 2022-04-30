import { INPUT_CURRENCIES, INPUT_WALLET, REMOVE_INPUT_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INPUT_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };

  case INPUT_WALLET:
    return {
      ...state,
      expenses:
        [
          ...state.expenses,
          {
            id: action.id,
            value: action.value,
            currency: action.currency,
            method: action.method,
            tag: action.tag,
            description: action.description,
            exchangeRates: action.exchangeRates,
          },
        ],
    };
  case REMOVE_INPUT_WALLET:
    return {
      ...state,
      expenses: action.expenses,
    };

  default:
    return state;
  }
}

export default wallet;
