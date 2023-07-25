import React from 'react';
import styles from './RightContainer.module.scss'

const RightContainer = () => {
    //functionality for button
    return (
        <div className={styles.rightContainer}>
            <textarea className={styles.codeContainer}></textarea>
        </div>
    )
}
//{styles.rightContainer}
export default RightContainer;