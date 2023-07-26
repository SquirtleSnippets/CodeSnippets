import React from 'react';
import styles from './RightContainer.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// text input box
{/* <textarea className={styles.codeContainer}>                   
            </textarea> */}

const RightContainer = ({textContainer}) => {
    if (textContainer === true) {
        return (
            <div className={styles.rightContainer}>
            <input placeholder='Enter Title'></input>
            <textarea className={styles.codeContainer} placeholder='Enter Code Snipper'>
                               
            </textarea>
            </div>
        )
    }
    
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