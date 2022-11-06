import { useContext } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


import { Button, Divider } from '../../../components'
import ThemeContext from '../../../context/themeContext/ThemeContext'


import styles from './Header.module.scss'
const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    // console.log(thememode)
    const loading = false

    return (
        <div className={styles.wrapper}>
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
                <Button
                    round
                    className={styles.toggleTheme}
                    onClick={() => {
                        setTheme(theme => {
                            if (theme === 'light-theme') return 'dark-theme'
                            if (theme === 'dark-theme') return 'light-theme'
                        })
                    }}
                >
                    {theme === 'light-theme' ?
                        <DarkModeIcon fontSize='inherit' /> :
                        <LightModeOutlinedIcon fontSize='inherit' />
                    }
                </Button>
                <Divider orientation='vertical'></Divider>
                <Button className={styles.notificates}>
                    <NotificationsNoneOutlinedIcon fontSize='inherit' />
                </Button>
                <Button className={styles.avatar}>
                    <img src="https://phunugioi.com/wp-content/uploads/2022/03/Avatar-Gau.jpg" alt="" />
                </Button>
            </div>
        </div>
    )
}

export default Header