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
      onChange={props.onChange}
      onClick={props.onClick}
    />
  );
}

export default Input;
