import React from 'react';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({title}) => {
  //functionality for button
  const handleClick = () => {
    console.log('Hi Shuai');
  };
  return (
    <div className={styles.titleContainer}>
      <button className={styles.titleBtn} onClick={handleClick}>
      {title}
      </button>
    </div>
  );
};

export default TitleContainer;
