import React from 'react';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './LeftContainer.module.scss';

const LeftContainer = () => {
  //functionality for button

  //get titles from database and populate depending on length
  return (
    <div className={styles.leftContainer}>
      <div className={styles.addContainer}>
        <button className={styles.addButton}>+</button>
      </div>

      <TitleContainer />
      <TitleContainer />
      <TitleContainer />
    </div>
  );
};

export default LeftContainer;
