import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav style={{padding: '10px', background: '#9cf'}}>
        <h1>Host navbar</h1>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Link to="/">Home</Link>
          <Link to="/innerApp1">inner app 1</Link>
          <Link to="/innerApp2">inner app 2</Link>
        </div>
        <hr />
      </nav>
    </>
  );
}
