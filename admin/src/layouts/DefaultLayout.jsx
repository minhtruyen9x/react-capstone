import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './defaultLayout.module.scss'



import { Header, Sidebar } from './components'
// import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

const DefaultLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.container}>
                <Header />
                {/* <Breadcrumbs /> */}
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout