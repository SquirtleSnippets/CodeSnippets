import React from 'react';
import styles from './TitleContainer.module.scss';

const TitleContainer = ({title, setSelectedSnippetID, snipID, selectedSnippetID, setInputState}) => {
  //functionality for button
  const handleClick = () => {
    setSelectedSnippetID(snipID)
    setInputState(false);
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
