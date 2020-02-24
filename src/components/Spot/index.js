import React from 'react';
import { PropTypes } from 'prop-types';
import Car from '../../images/car.jpg';
import Build from '../../images/build.png';

import './index.css';

function Spot(props) {
  const { target, onClick } = props;
  if (target === 3) {
    return <div className="back-wrap"></div>;
  }
  if (target === 0) {
    return <div className="card-wrap"></div>;
  }
  let image = target === 1 ? Car : Build;
  return (
    <div className="card-wrap" onClick={onClick}>
      <img className="car-position" src={image} alt="build" />
    </div>
  );
}

Spot.propTypes = {
  target: PropTypes.number,
  onClick: PropTypes.func
};

export default Spot;
