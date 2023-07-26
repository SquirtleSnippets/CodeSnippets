import React from 'react';
import RightContainer from '../RightContainer/RightContainer';
import LeftContainer from '../LeftContainer/LeftContainer';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './MainContainer.module.scss';
import { useState, useEffect } from 'react';

const MainContainer = () => {
  const [titleContainers, setTitleContainers] = useState([]); // Use the useState hook to manage state
  const [textContainer, setTextContainer] = useState(false);

    // get snippet data
    const [snippets, setSnippets] = useState([]);
    const getSnippets = async () => {
      const body = { userID: 1 }
      try {
        const response = await fetch('/api/getSnippets', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        if (response.ok) {
          const data = await response.json()
          setSnippets(data)
          console.log('snippets', snippets)
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getSnippets();
      setTitleContainers()
    }, []);

    const generateTitleContainers = () => {
      // declare an arr
      const titleArray = [];
      // loop through snippets
      for(let i = 0; i < snippets.length; i++){
        // push new title container into arr
        titleArray.push(<TitleContainer key={snippets[i].snipid} title={snippets[i].title}/>)
      }
      // return arr
      return titleArray
    }
    
    
  const handleClick = () => {
    setTitleContainers(prevContainers => [...prevContainers, <TitleContainer  key={prevContainers.length}/>]);
    // The above line uses the functional form of setState to add a new TitleContainer to the array while preserving the previous state.
    setTextContainer(true);
  };
  const saveClick = () => {
    setTextContainer(false);
  }
  // if (snippets[0]) {console.log('second snippets', snippets[0].title)}
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.navGrid}>Snippet Ninja</h1>
      <div className={styles.saveContainer}>
        <button className={styles.saveBtn} onClick={saveClick}><p>Save</p></button>
      </div>
      <div className={styles.delContainer}>
        <button className={styles.deleteBtn}><p>Delete</p></button>
      </div>
      <LeftContainer titleContainers={generateTitleContainers()} setTitleContainers={setTitleContainers} handleClick={handleClick} snip={snippets}/>
      <RightContainer textContainer={textContainer}/>
    </div>
  );
};
//
export default MainContainer;
