import React from 'react'
import MoreMenu from '../../../../components/MoreMenu'
import Button from '../../../../components/Button'
import styles from './AccountMenu.module.scss'
import { logout } from '../../../../slices/authSlice'
import { useDispatch } from 'react-redux'

const AccountMenu = () => {
    const dispatch = useDispatch()
    console.log("AccountMenu route")

    const menu = [
        { title: "Profile" },
        { title: "Setting" },
        { title: "Logout", action: 'logout', seperate: true },
    ]

    const handleChange = (item) => {
        if (item.action === 'logout') {
            dispatch(logout())
        }
    }


    return (
        <MoreMenu items={menu} onChange={handleChange}>
            <Button className={styles.wrapper}>
                <img src="https://phunugioi.com/wp-content/uploads/2022/03/Avatar-Gau.jpg" alt="" />
            </Button>
        </MoreMenu>
    )
}

export default AccountMenu