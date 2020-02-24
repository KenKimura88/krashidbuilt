import React from 'react';
import { PropTypes } from 'prop-types';

import Spot from '../Spot';

import './index.css';

function Spots(props) {
  const { colSpots, onSubmit } = props;
  return (
    <div className="cards-wrap">
      {colSpots.map((val, colIndex) => (
        <Spot target={val} key={colIndex} onClick={onSubmit(colIndex)} />
      ))}
    </div>
  );
}

Spots.propTypes = {
  colSpots: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Spots;
