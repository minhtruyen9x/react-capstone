import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './UserList.module.scss'
import Button from '../../components/Button'
import MoreMenu from '../../components/MoreMenu'
import TableData from '../../components/TableData'

import { useDispatch, useSelector } from 'react-redux'
import { getUsers, deleteUser } from '../../slices/userSlice'
// {
//     "taiKhoan": "21e12e22121212122",
//     "hoTen": "phong123",
//     "email": "7777123@gmail.com",
//     "soDT": "0977737383888",
//     "matKhau": "3235555",
//     "maLoaiNguoiDung": "QuanTri"
//   }
const menu = [
    {
        title: "Export report",
        icon: <LocalPrintshopOutlinedIcon />
    },
    {
        title: "Share",
        icon: <ShareOutlinedIcon />
    },
    {
        title: "Actions",
        icon: <UnfoldMoreOutlinedIcon />
    },
]

const actions = [
    {
        title: "Edit",
        icon: <EditOutlinedIcon />,
        action: 'edit'
    },
    {
        title: "Delete",
        icon: <DeleteOutline />,
        action: 'delete'
    },
]

const UserList = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.user)
    const naigate = useNavigate()
    console.log("list render")

    const handleSelect = (action, id) => {
        switch (action) {
            case "delete": {
                (async () => {
                    await dispatch(deleteUser(id))
                    dispatch(getUsers())
                })()
                break
            }
            case "edit": {
                naigate("/admin/users/" + id)
                break
            }
            default:
                break
        }

    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const columns = [
        {
            field: "hoTen",
            headerName: "Fullname",
            width: 200,
        },
        {
            field: "taiKhoan",
            headerName: "User",
            width: 160
        },
        { field: "email", headerName: "Email", width: 220 },
        {
            field: "soDT",
            headerName: "Phone",
            width: 120,
        },
        {
            field: "maLoaiNguoiDung",
            headerName: "Role",
            width: 120,
        },
        {
            field: "action",
            headerName: "More",
            description: "Do more action with this",
            sortable: false,
            width: 60,
            renderCell: (params) => {
                return (
                    <MoreMenu
                        items={actions}
                        placement='bottom-end'
                        onChange={(item) => handleSelect(item.action, params.row.taiKhoan)}
                    >
                        <MoreHorizOutlinedIcon />
                    </MoreMenu>
                );
            },
        },
    ];

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Users</h2>
                <div className={styles.control}>
                    <Button solid leftIcon={<AddOutlinedIcon />}>
                        <Link to='/admin/users/new'>Add User</Link>
                    </Button>
                    <MoreMenu items={menu} placement='bottom-end'>
                        <MoreVertOutlinedIcon fontSize='inherit' />
                    </MoreMenu>
                </div>
            </header>
            <TableData
                rows={users}
                columns={columns}
                getRowId={(row) => row.taiKhoan}
                rowsPerPageOptions={[10]}
                pageSize={10}
                loading={loading}
            />
        </div>
    )
}

export default UserList