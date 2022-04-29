import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveWallet } from '../actions';
import Header from '../Components/Header';
import getCurrencies from '../services/getCurrencies';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(saveWallet(await getCurrencies()));
  }

  render() {
    return (
      <>
        <Header />
        <div>Wallet</div>
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(Wallet);
