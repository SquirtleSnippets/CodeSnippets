import React from 'react';
import RightContainer from '../RightContainer/RightContainer';
import LeftContainer from '../LeftContainer/LeftContainer';

const MainContainer = () => {
    return (
    <div className='mainContainer'>
     <h1>Hello</h1>
    <button className='saveBtn'>Save</button>
    <button className='deleteBtn'>Delete</button>
    <LeftContainer />
    <RightContainer />
    </div>
       
    )
}

export default MainContainer;