import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveCurrencies, saveWallet } from '../actions';
import Header from '../Components/Header';
import getCurrencies from '../services/getCurrencies';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.saveOnRedux = this.saveOnRedux.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(saveCurrencies(
      Object.keys(await getCurrencies()),
    ));
  }

  onInputChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async saveOnRedux() {
    const { dispatch } = this.props;
    const exchangeRates = await getCurrencies();
    const obj = { ...this.state, exchangeRates };
    dispatch(saveWallet(obj));
    this.resetInputs();
    this.setState((prevState) => (
      { id: prevState.id + 1 }
    ));
  }

  resetInputs() {
    this.setState({
      value: 0,
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <>
        <Header />
        <section>
          <label htmlFor="value">
            Valor:
            <input
              value={ value }
              id="value"
              type="number"
              placeholder="Valor"
              data-testid="value-input"
              onChange={ this.onInputChange }
              min="0"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              value={ currency }
              id="currency"
              data-testid="currency-input"
              onChange={ this.onInputChange }
            >
              {
                currencies.map((coin) => (
                  <option
                    key={ coin }
                    value={ coin }
                  >
                    { coin }
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="method">
            Método de Pagamento:
            <select
              value={ method }
              id="method"
              data-testid="method-input"
              onChange={ this.onInputChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              value={ tag }
              id="tag"
              data-testid="tag-input"
              onChange={ this.onInputChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              value={ description }
              id="description"
              type="text"
              placeholder="Descrição"
              data-testid="description-input"
              onChange={ this.onInputChange }
            />
          </label>

          <input
            type="button"
            value="Adicionar despesa"
            onClick={ this.saveOnRedux }
          />
        </section>
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ wallet }) {
  return {
    currencies: wallet.currencies,
  };
}

export default connect(mapStateToProps)(Wallet);
