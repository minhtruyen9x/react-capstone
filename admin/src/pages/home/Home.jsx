import React from 'react'
import Popper from '../../components/Popper/Popper'
import styles from './home.module.scss'
const Home = () => {
    return (
        <div className={styles.home}>Home
            <Popper>inside box</Popper>
        </div>
    )
}

export default Home