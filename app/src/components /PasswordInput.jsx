import React from 'react';

const PasswordInput = ({ value, readOnly, placeholder, className }) => {
  return (
    <input
      type="text"
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default PasswordInput;