import React from 'react';
import RightContainer from '../RightContainer/RightContainer';
import LeftContainer from '../LeftContainer/LeftContainer';
import TitleContainer from '../TitleContainer/TitleContainer';
import styles from './MainContainer.module.scss';
import { useState, useEffect } from 'react';

const MainContainer = () => {
  const [titleContainers, setTitleContainers] = useState([]); // Use the useState hook to manage state
  const [selectedSnippetID, setSelectedSnippetID] = useState('');
  const [inputState, setInputState] = useState(false);

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
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getSnippets();
      generateTitleContainers()
    }, []);

    const generateTitleContainers = () => {
      const titleArray = [];
      for(let i = 0; i < snippets.length; i++) {
        console.log('snippets: ', snippets[0].snipid)
        titleArray.push(<TitleContainer key={i} setInputState={setInputState} snipID={snippets[i].snipid} setSelectedSnippetID={setSelectedSnippetID} selectedSnippetID={selectedSnippetID} title={snippets[i].title}/>)
      }
      return titleArray
    }
    

  // adding a new snip
 const handleAddSnip = async () => {
  const response = await fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({userID: 1, title: 'New Snippet', code: ''})
  });
  const snipID = await response.json();
  console.log('this is snipID', snipID);
  setSnippets([{userID: 1, title: 'New Snippet', code: '', snipID: snipID}, ...snippets])
  setSelectedSnippetID(snipID);
  setInputState(true);
}

  const saveClick = async () => {
    const response = await fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify()
  });
    
  }

  const deleteClick = () => {
    // save selectedSnippetID
    const id = selectedSnippetID;
    console.log('attempting to delete: ', id)
    // reset setSelectedSnippetID
    setSelectedSnippetID('')
    // remove from state
    for (let i = 0; i < snippets.length; i++) {
      if (snippets[i].snipid === id) setSnippets(snippets.slice(i, 1))
    }
    console.log('sending fetch to delete ', id)
    // send delete request
    fetch('/api/delete', {
      method: 'DELTE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({snipID: id})
    })
  }

  // if (snippets[0]) {console.log('second snippets', snippets[0].title)}
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.navGrid}>Snippet Ninja</h1>
      <div className={styles.saveContainer}>
        <button className={styles.saveBtn} onClick={saveClick}><p>Save</p></button>
      </div>
      <div className={styles.delContainer}>
        <button className={styles.deleteBtn} onClick={deleteClick}><p>Delete</p></button>
      </div>
      <LeftContainer titleContainers={generateTitleContainers()} setTitleContainers={setTitleContainers} handleAddSnip={handleAddSnip} snip={snippets}/>
      <RightContainer snippets={snippets} selectedSnippetID={selectedSnippetID} inputState={inputState}/>
    </div>
  );
};
//
export default MainContainer;
