import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ token }) {
  return (
    <>
      <nav style={{padding: '10px', background: '#9cf'}}>
        <h1>Host navbar</h1>
        <div>Token in host app: <b>{token || 'no token, to use links below need to login'}</b></div>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: !token ?  'none' : undefined,
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/innerApp1">inner app 1</Link>
          <Link to="/innerApp2">inner app 2</Link>
        </div>
        <hr />
      </nav>
    </>
  );
}

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps)(Navbar);
