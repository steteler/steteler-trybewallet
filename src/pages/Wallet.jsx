import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveCurrencies } from '../actions';
import Header from '../Components/Header';
import WalletForm from '../Components/WalletForm';
import WalletTable from '../Components/WalletTable';
import getCurrencies from '../services/getCurrencies';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(saveCurrencies(
      Object.keys(await getCurrencies()),
    ));
  }

  render() {
    return (
      <>
        <Header />
        <WalletForm />
        <br />
        <WalletTable />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
