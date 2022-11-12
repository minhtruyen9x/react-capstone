import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
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

import { getUsers, deleteUser } from '../../slices/userSlice'

const UserList = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.user)
    const naigate = useNavigate()

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const actionsMenu = [
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

    const columns = [
        {
            field: "hoTen",
            headerName: "Fullname",
            flex: 2,
        },
        {
            field: "taiKhoan",
            headerName: "User",
            flex: 2,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 2,
        },
        {
            field: "soDT",
            headerName: "Phone",
            flex: 2,
        },
        {
            field: "maLoaiNguoiDung",
            headerName: "Role",
            flex: 1,
        },
        {
            field: "action",
            headerName: "More",
            description: "Do more action with this",
            sortable: false,
            flex: 1,
            renderCell: (params) => {
                return (
                    <MoreMenu
                        items={actionsMenu}
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
                error={error ? error : null}
            />
        </div>
    )
}

export default UserList