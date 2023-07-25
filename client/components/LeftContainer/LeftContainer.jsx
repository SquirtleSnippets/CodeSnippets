import React from 'react';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './LeftContainer.module.scss';
import { useState } from 'react';

const LeftContainer = () => {
  //functionality for button

  
  const [titleContainers, setTitleContainers] = useState([]); // Use the useState hook to manage state

  const handleClick = () => {
    setTitleContainers(prevContainers => [...prevContainers, <TitleContainer  key={prevContainers.length}/>]);
    // The above line uses the functional form of setState to add a new TitleContainer to the array while preserving the previous state.
  };

  //get titles from database and populate depending on length
  return (
    <div className={styles.leftContainer}>
      <div className={styles.addContainer}>
        <button className={styles.addButton}
        onClick={handleClick}>+</button>
      </div>
      {titleContainers}
    </div>
  );
};

export default LeftContainer;
