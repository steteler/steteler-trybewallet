async function getCurrencies() {
  const results = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await results.json();
  delete currencies.USDT;
  return Object.keys(currencies);
}

export default getCurrencies;
