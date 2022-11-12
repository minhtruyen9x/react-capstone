import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';

import { getUserInfo } from '../../slices/userSlice'
import styles from './UserDetail.module.scss'
import Box from '../../components/Box';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import CustomLoadingOverlay from '../../components/TableData/CustomLoadingOverlay';
import CustomErrorOverLay from '../../components/TableData/CustomErrorOverLay';
import avatarDefault from '../../assets/images/avatar-default.png'
const UserDetail = () => {
    const dispatch = useDispatch()
    const { selectedUser, loading, error } = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [id])

    const handleClose = () => {
        setIsOpen(prev => !prev)
        console.log("asdasdsd")
    }
    return (
        <div className={styles.wrapper}>
            <h2>User</h2>
            <Box className={styles.container}>
                <h3>Basic Infomation</h3>
                <Grid container spacing={2}>
                    <Button solid className={styles.editBtn} onClick={handleClose}>Edit</Button>
                    <Grid xs={4} display='flex' alignItems="center" justifyContent="center">
                        <div className={styles.avatar}>
                            <img src={selectedUser.hinhAnh || avatarDefault} alt="" />
                        </div>
                    </Grid>
                    <Grid xs={8}>
                        <div className={styles.info}>
                            <p>Account: {selectedUser.taiKhoan}</p>
                            <p>Password: {selectedUser.matKhau}</p>
                            <p>Full name: {selectedUser.hoTen}</p>
                            <p>email: {selectedUser.email}</p>
                            <p>Phone number: {selectedUser.soDT}</p>
                            <p>role: {selectedUser.maLoaiNguoiDung}</p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Modal open={isOpen} onClose={handleClose} >ycccjc</Modal>
            {/* taiKhoan(pin):"adam_test"
matKhau(pin):"1"
hoTen(pin):"Nam Anh"
email(pin):"namanh99@gmail.com"
soDT(pin):"012343212"
maNhom(pin):"GP15"
maLoaiNguoiDung(pin):"QuanTri" */}
        </div >
    )
}

export default UserDetail