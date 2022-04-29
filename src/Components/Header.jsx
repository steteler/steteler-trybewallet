import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {
            expenses.length ? (
              expenses.reduce((acc, { value, currency, exchangeRates }) => {
                acc += Number(value) * Number(exchangeRates[currency].ask);
                return acc;
              }, 0).toFixed(2)
            ) : 0
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function mapStateToProps({ user, wallet }) {
  return {
    email: user.email,
    expenses: wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);
