import React from 'react';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './LeftContainer.module.scss';
import { useState } from 'react';

const LeftContainer = ({titleContainers, handleAddSnip}) => {
 
  

  //get titles from database and populate depending on length
  return (
    <div className={styles.leftContainer}>
      <div className={styles.addContainer}>
        <button className={styles.addButton}
        onClick={handleAddSnip}>+</button>
      </div>
      {titleContainers}
    </div>
  );
};

export default LeftContainer;
