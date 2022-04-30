export const INPUT_LOGIN = 'INPUT_LOGIN';
export const INPUT_CURRENCIES = 'INPUT_CURRENCIES';
export const INPUT_WALLET = 'INPUT_WALLET';
export const REMOVE_INPUT_WALLET = 'REMOVE_INPUT_WALLET';

export function saveLogin(email, password) {
  return {
    type: INPUT_LOGIN,
    email,
    password,
  };
}

export function saveCurrencies(currencies) {
  return {
    type: INPUT_CURRENCIES,
    currencies,
  };
}

export function saveWallet(obj) {
  return {
    type: INPUT_WALLET,
    id: obj.id,
    value: obj.value,
    currency: obj.currency,
    method: obj.method,
    tag: obj.tag,
    description: obj.description,
    exchangeRates: obj.exchangeRates,
  };
}

export function removeWallet(expenses, id) {
  return {
    type: REMOVE_INPUT_WALLET,
    expenses: expenses.filter((expense) => expense.id !== id),
  };
}
