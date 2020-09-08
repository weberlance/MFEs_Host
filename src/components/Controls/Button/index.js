import React from 'react';

export const Btn = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};
