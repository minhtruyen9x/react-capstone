import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

import TreeView from '../../../components/TreeView'
import { Logo } from '../../../components/SVG'
import sidebarConfig from './sidebar-config'

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/admin' className={styles.logo}>
                <Logo width={40} height={40} />
                <h1>DASH BOARD</h1>
            </Link>
            <div className={styles.menu}>
                <TreeView data={sidebarConfig} />
            </div>
        </div>
    )
}

export default Sidebar