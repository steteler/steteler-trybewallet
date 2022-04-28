// Coloque aqui suas actions

export const INPUT_LOGIN = 'INPUT_LOGIN';

export function saveLogin(email, password) {
  return {
    type: INPUT_LOGIN,
    email,
    password,
  };
}
