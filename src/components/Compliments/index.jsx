import React from 'react';
import './styles.scss';

// import { Container } from './styles';

function Compliments(props) {
  return (
    <div className="compliment-container">
      <div className="compliment">
        <p className="compliment-message">{props.message}</p>

        <div className="footer">
          <span className="tag-name">#{props.nameCustom}</span>
          <div className="sender-name">
            <span className="name">- {props.sender}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliments;
