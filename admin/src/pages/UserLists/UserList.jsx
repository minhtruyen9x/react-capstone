import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { userRows } from "../../dummyData";
import styles from './UserList.module.scss'
import { Button, MoreMenu } from '../../components'

const dataMap = [
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
const dataMap2 = [
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
    const [data, setData] = useState(userRows);
    const naigate = useNavigate()

    const handleSelect = (action, id) => {
        switch (action) {
            case "delete": {
                setData(data.filter((item) => item.id !== id));
                break
            }
            case "edit": {
                naigate("/admin/v1/users/" + id)
                break
            }
            default:
                break
        }

    }

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={styles.user}>
                        <img className={styles.userImg} src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "status",
            headerName: "Status",
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
                    <MoreMenu items={dataMap2} placement='bottom-end' onChange={({ action }) => { handleSelect(action, params.row.id) }}>
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
                        <Link to='/admin/v1/users/new'>Add User</Link>
                    </Button>
                    <MoreMenu items={dataMap} placement='bottom-end'>
                        <MoreVertOutlinedIcon fontSize='inherit' />
                    </MoreMenu>
                </div>
            </header>
            <DataGrid
                className={styles.table}
                rows={data}
                disableSelectionOnClick
                columns={columns}
                rowsPerPageOptions={[10]}
                pageSize={10}
                pagination
                checkboxSelection
                getRowClassName={() => styles.row}
                disableColumnMenu={true}
            />
        </div>
    )
}

export default UserList