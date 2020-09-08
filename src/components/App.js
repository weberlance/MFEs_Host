import React from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';
import history from '../routes/History';
import Loader from './Loader/Loader';
import { unsetToken } from '../store/actions/token';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import { InnerApp1, InnerApp2 } from '../Pages/Microfrontends';

class App extends React.Component {
  componentWillUnmount() {
    const { unsetToken } = this.props;
    unsetToken();
  }

  render() {
    const { loader, token, unsetToken } = this.props;

    return (
      <Router history={history}>
        <div>
          {loader ? <Loader /> : null}
          <button onClick={() => unsetToken()}>Reset token</button>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            {!token && <Redirect to="/login" />}
            <Route path="/innerApp1" component={InnerApp1} />
            <Route path="/innerApp2" component={InnerApp2} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ loader, token }) => ({
  loader,
  token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      unsetToken,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
