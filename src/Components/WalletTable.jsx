import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeWallet } from '../actions';

class WalletTable extends React.Component {
  constructor() {
    super();

    this.remove = this.remove.bind(this);
  }

  remove({ target }) {
    const { expenses, dispatch } = this.props;
    dispatch(removeWallet(expenses, Number(target.id)));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(
              ({ id, value, currency, method, tag, description, exchangeRates }) => (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>
                    {Number(exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td>
                    {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <input
                      type="button"
                      value="Excluir"
                      id={ id }
                      onClick={ this.remove }
                      data-testid="delete-btn"
                    />

                  </td>
                </tr>
              ),
            )
          }
        </tbody>
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ wallet }) {
  return {
    expenses: wallet.expenses,
  };
}

export default connect(mapStateToProps)(WalletTable);
