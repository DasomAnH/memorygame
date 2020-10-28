import React from 'react';
import logo from '../dc-logo.png';
import './MemoryCard__back.css';

export default class MemoryCard extends React.Component {
  render() {
    let innerClass = 'MemoryCard__inner';
    if (this.props.isFlipped === true) {
      innerClass += ' flipped';
    }

    return (
      <div className='MemoryCard' onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className='MemoryCard__front'>{this.props.symbol}</div>
          <div className='MemoryCard__back'>
            <img className='logo' src={logo} />
          </div>
        </div>
      </div>
    );
  }
}
