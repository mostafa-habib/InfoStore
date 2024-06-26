import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} data-testid="button">
      {children}
    </button>
  );
};

export default Button;
