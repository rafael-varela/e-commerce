import React from 'react';
import './styles.css';

const Filters = props => (
  <div className="filters">
    <i
      className={`fas fa-th fa-lg ${props.grid ? 'selected' : ''}`}
      onClick={() => props.toggleGrid(true)}
    />
    <i
      className={`fas fa-list fa-lg ${props.grid ? '' : 'selected'}`}
      onClick={() => props.toggleGrid(false)}
    />
  </div>
)

export default Filters