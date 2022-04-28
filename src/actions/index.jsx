export const INPUT_LOGIN = 'INPUT_LOGIN';
export const INPUT_WALLET = 'INPUT_WALLET';

export function saveLogin(email, password) {
  return {
    type: INPUT_LOGIN,
    email,
    password,
  };
}

export function saveWallet(currencies, expenses) {
  return {
    type: INPUT_WALLET,
    currencies,
    expenses,
  };
}
