import React from 'react';
import './styles.scss';

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      className={props.className}
      name={props.name}
      required
    />
  );
}

export default Input;
