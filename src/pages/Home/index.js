import React, { useEffect } from 'react';
import Spots from '../../components/Spots';

import { useSelector, useDispatch } from 'react-redux';
import { get, update } from '../../redux/actions/parkActions';

import { getNearestPark } from '../../utils/getNearestPark';

import './index.css';

function Home() {
  const dispatch = useDispatch();
  const parkSpot = useSelector((state) => state.park.parkSpot);
  const apiState = useSelector((state) => state.api.apiState);
  useEffect(() => {
    dispatch(get(apiState));
  }, []);
  const onSubmit = (colIndex) => (rowIndex) => () => {
    if (parkSpot[colIndex][rowIndex] !== 2) {
      return;
    }
    let spot = getNearestPark(parkSpot, { x: rowIndex, y: colIndex });
    if (!spot) {
      window.confirm('There is no Spot');
      return;
    }
    let spots = [...parkSpot];
    spots[spot.y][spot.x] = 1;
    dispatch(update(spots, apiState));
  };
  if (parkSpot.length === 0) {
    return <div></div>;
  }
  return (
    <div className="home-wrap">
      {parkSpot.map((val, rowIndex) => (
        <Spots key={rowIndex} colSpots={val} onSubmit={onSubmit(rowIndex)} />
      ))}
    </div>
  );
}

export default Home;
