import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import menu from '../../data'
import { TreeView } from '../../../components'
import { useMemo } from 'react'
import { Logo } from '../../../components/SVG'

const Sidebar = () => {
    const dataMap = useMemo(() => menu, [])

    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
                <Logo width={40} height={40} />
                <h1>DASH BOARD</h1>
            </Link>
            <div className={styles.menu}>
                <TreeView data={dataMap} />
            </div>
        </div>
    )
}

export default Sidebar