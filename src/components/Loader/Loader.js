import React from 'react';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(200, 200, 200, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div role="status">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
