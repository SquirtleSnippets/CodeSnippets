import React, { useState } from 'react';
import styles from './RightContainer.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// text input box
{/* <textarea className={styles.codeContainer}>                   
            </textarea> */}

const RightContainer = ({selectedSnippetID, snippets, inputState}) => {
  const [titleState, setTitleState] = useState('');
  const [codeState, setCodeState] = useState('');

  // if no snippet id return
  if (!selectedSnippetID) return
  // create a function that returns snippet with input id
  function getSnipet() {
    for (let i = 0; i < snippets.length; i++) {
      if (snippets[i].snipid === selectedSnippetID) return snippets[i];
    }
  }

  const handleTitle = (e) => {
    setTitleState(e.target.value)
  }

  const snippet = getSnipet(selectedSnippetID);

  if (inputState) {
    return (
      <div className={styles.rightContainer}>
      <input placeholder='Enter Title'
      value={titleState}
      onChange={handleTitle}></input>
      <textarea className={styles.codeContainer} placeholder='Enter Code Snipper'>
      </textarea>
      </div>
  )
  }

  return (
    <div className={styles.rightContainer}>
      <div placeholder='Enter Title'>{snippet.title}</div>
      <br/>
      <div placeholder='Enter Title'>{snippet.code}</div>
      </div>
  )
  
    
    
    const codeString = 
    `
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
    
    export default LeftContainer;`;

    //functionality for button
    return (
        <div className={styles.rightContainer}>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
            {codeString}           
            </SyntaxHighlighter>
        </div>
    )
}
//{styles.rightContainer}
export default RightContainer;