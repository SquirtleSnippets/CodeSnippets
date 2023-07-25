import React from 'react';
import RightContainer from '../RightContainer/RightContainer';
import LeftContainer from '../LeftContainer/LeftContainer';
import styles from './MainContainer.module.scss';

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.navGrid}>Snippet Ninja</h1>
      <div className={styles.saveContainer}>
        <button className={styles.saveBtn}><p>Save</p></button>
      </div>
      <div className={styles.delContainer}>
        <button className={styles.deleteBtn}><p>Delete</p></button>
      </div>

      <LeftContainer />
      <RightContainer />
    </div>
  );
};
//
export default MainContainer;
