import React from 'react';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './LeftContainer.module.scss';
import { useState } from 'react';

const LeftContainer = ({titleContainers, handleClick}) => {
  //functionality for button
  

  

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
