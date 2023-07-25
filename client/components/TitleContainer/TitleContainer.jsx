import React from 'react';
import styles from './TitleContainer.module.scss'

const TitleContainer = () => {
    //functionality for button
    const handleClick = () => {
        console.log('Hi Shuai')
    }
    return (
        <div className={styles.titleContainer}>
            <button className={styles.titleBtn}
            onClick={handleClick}>
            <p>TwoSum</p>
        </button></div>
        
    )
}

export default TitleContainer;