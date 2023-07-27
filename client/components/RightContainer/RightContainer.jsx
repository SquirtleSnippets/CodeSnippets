import React, { useRef, useState, useEffect } from 'react';
import styles from './RightContainer.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Sandpack, useSandpack, SandpackProvider, useActiveCode } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";


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


    const customCode = `class Node
    {
        constructor(data)
        {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }`

    const title = 'codeSnippet';
    const { sandpack, dispatch, listen } = useSandpack();
    const { files, activeFile, visibleFiles, updateCurrentFile } = sandpack;
   const { code, updateCode } = useActiveCode();
   console.log('inside of active code', code)
    //const  updateCurrentFile = useSandpack();

    // console.log('Files outside', files)

    

    
    const ExtractCodeButton = () => {
      
      const [extractedCode, setExtractedCode] = useState('');
    
      useEffect(() => {
        // Ensure files are populated and codeSnippet is available before extracting the code
        if (files && files[activeFile].code) {
          setExtractedCode(files[activeFile].code);
          console.log('Extracted code:', files[visibleFiles].code); 
        } else {
          console.log('Data is undefined')
        }
      }, [files, title]);
    
      const extractCode = () => {
        dispatch({ type: "refresh" });
        console.log(updateCurrentFile)
        updateCurrentFile('hello world I am an alien')
       console.log('Inside extract code', files[activeFile].code)
      };
    
      return <button onClick={() => extractCode()}>Extract Code</button>;
    };
    
    useEffect(() => {
      // listens for any message dispatched between sandpack and the bundler
      const stopListening = listen((msg) => console.log("this is the message", msg));
      console.log('were in the listening useEffect')
      return () => {
        // unsubscribe
        stopListening();
      };
    }, [listen]);

    //functionality for button
    return (
        <div className={styles.rightContainer}>
            {/* <SyntaxHighlighter language="javascript" style={nightOwl}>
            {codeString}           
            </SyntaxHighlighter> */}
           <div style={{ width: '752px' }}>

              <Sandpack template="react" theme={amethyst} onChange={updateCode} options={{editorHeight: 800, editorWidthPercentage: 100}} files={{[title]: { code: 
        `${customCode}`, active: false}}}  />
          </div>
            
        </div>
    )
}

export default RightContainer;