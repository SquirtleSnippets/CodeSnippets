
import React, { useRef, useState, useEffect } from 'react';

import styles from './RightContainer.module.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Sandpack, useSandpack, SandpackProvider, useActiveCode } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";


// text input box
{/* <textarea className={styles.codeContainer}>                   
            </textarea> */}

const RightContainer = ({selectedSnippetID, snippets, inputState}) => {
  const [titleState, setTitleState] = useState('');
  const [codeState, setCodeState] = useState('');
  const [test, setTest] = useState('');

  // if no snippet id return
  if (!selectedSnippetID) return
  // create a function that returns snippet with input id
  function getSnippet() {
    for (let i = 0; i < snippets.length; i++) {
      if (snippets[i].snipid === selectedSnippetID) return snippets[i];
    }
  }

  const handleTitle = (e) => {
    setTitleState(e.target.value)
  }

  const snippet = getSnippet(selectedSnippetID);

  // if (inputState) {
  //   return (
  //     <div className={styles.rightContainer}>
  //     <input placeholder='Enter Title'
  //     value={titleState}
  //     onChange={handleTitle}></input>
  //     <textarea className={styles.codeContainer} placeholder='Enter Code Snipper'>
  //     </textarea>
  //     </div>
  // )
  // }
if (snippet) {
  console.log(snippet.title)
  return (
    <div className={styles.rightContainer}>
      <input id="title-input" defaultValue={snippet.title} onChange={(e) => {e.target.defaultValue = snippet.title}} />
      <div placeholder='Enter Title'>{snippet.title}</div>
      <br/>
      <div placeholder='Enter Code'>{snippet.code}</div>
      </div>
  )}
  return
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