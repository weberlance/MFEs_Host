import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Btn } from '../../components/Controls/Button';
import { getToken } from '../../store/actions/token';
import History from '../../routes/History';

class Login extends React.Component {
  handleLogin = () => {
    const { getToken } = this.props;
    getToken();
  };

  render(){
    const { token } = this.props;

    return(
      <div>
        <h1>{token ? 'Hello' : 'Please login'}</h1>
        {token ?
          <Btn text='To home page' handleClick={() => {History.push('/')}} /> :
          <Btn text = 'Login' handleClick={this.handleLogin} />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ token }) => ({
  token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getToken,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
