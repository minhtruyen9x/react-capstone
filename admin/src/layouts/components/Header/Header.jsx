import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


import Button from '../../../components/Button'
import Divider from '../../../components/Divider'
import ThemeToggle from './ThemeToggle';

import styles from './Header.module.scss'
import AccountMenu from './AccountMenu';

const Header = () => {
    const loading = false

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebarToggleBtn}></div>
            <div className={styles.searchBar}>
                <input type="text" className={styles.searchInput} placeholder="Search here" />
                {loading ?
                    <SyncIcon className={styles.icon} fontSize="inherit" /> :
                    <ClearOutlinedIcon className={styles.icon} fontSize="inherit" />
                }

                <button className={styles.submit}>
                    <SearchOutlinedIcon fontSize="inherit" />
                </button>
            </div>
            <div className={styles.control}>
                <ThemeToggle />
                <Divider orientation='vertical'></Divider>
                <Button className={styles.notificates}>
                    <NotificationsNoneOutlinedIcon fontSize='inherit' />
                </Button>
                <AccountMenu />
            </div>
        </div>
    )
}

export default Header