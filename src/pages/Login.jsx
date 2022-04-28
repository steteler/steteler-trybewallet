import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.saveOnRedux = this.saveOnRedux.bind(this);
  }

  // Regex de validação de email retirado de:
  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  onInputChange({ target: { id, value } }) {
    this.setState({ [id]: value }, () => this.validation());
  }

  validation() {
    const { email, password } = this.state;
    const emailIsValid = email.match(/\S+@\S+\.\S+/);
    const minPasswordLength = 6;

    if (emailIsValid && password.length >= minPasswordLength) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  saveOnRedux() {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(saveLogin(email, password));
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <form>
        <input
          type="email"
          value={ email }
          id="email"
          onChange={ this.onInputChange }
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="password"
          value={ password }
          id="password"
          onChange={ this.onInputChange }
          placeholder="Senha"
          data-testid="password-input"
        />
        <Link to="/carteira">
          <input
            type="submit"
            value="Entrar"
            onClick={ this.saveOnRedux }
            disabled={ isDisabled }
          />
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
