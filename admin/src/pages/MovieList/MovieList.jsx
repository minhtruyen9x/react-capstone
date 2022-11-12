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

import movieAPI from '../../services/movieAPI'
import styles from './MovieList.module.scss'
import Button from '../../components/Button'
import MoreMenu from '../../components/MoreMenu'
import TableData from '../../components/TableData'
// "maPhim": 6061,
//       "tenPhim": "Hành Tinh Mất Trật Tự 88888",
//       "biDanh": "hanh-tinh-mat-trat-tu-88888",
//       "trailer": "https://www.youtube.com/embed/CNfNsNkgxjo",
//       "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan-2_gp01.jpg",
//       "moTa": "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống..",
//       "maNhom": "GP01",
//       "ngayKhoiChieu": "2022-11-09T15:02:23.323",
//       "danhGia": 9,
//       "hot": true,
//       "dangChieu": true,
//       "sapChieu": false
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

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const naigate = useNavigate()

    const handleSelect = (action, id) => {
        switch (action) {
            case "delete": {
                setMovies(movies.filter((item) => item.maPhim !== id));
                break
            }
            case "edit": {
                naigate("/admin/movies/" + id)
                break
            }
            default:
                break
        }

    }

    useEffect(() => {
        (async () => {
            const movies = await movieAPI.getMovies()

            setMovies(movies)
        })()
    }, [])

    const columns = [
        {
            field: "hinhAnh",
            headerName: "Image",
            width: 160,
            renderCell: (params) => {
                console.log(params)
                return (<img src={params.value} width={80} alt="" />)
            }
        },
        {
            field: "tenPhim",
            headerName: "Name",
            width: 200,
        },

        {
            field: "moTa",
            headerName: "Desciption",
            width: 220
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
            renderCell: (params) => (
                <div>{params.dangChieu || params.sapChieu || params.hot}</div>
            )
        },
        {
            field: "ngayKhoiChieu",
            headerName: "Showtime",
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
                    <MoreMenu items={actions} placement='bottom-end' onChange={({ action }) => { handleSelect(action, params.row.maPhim) }}>
                        <MoreHorizOutlinedIcon />
                    </MoreMenu>
                );
            },
        },
    ];

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Movies</h2>
                <div className={styles.control}>
                    <Button solid leftIcon={<AddOutlinedIcon />}>
                        <Link to='/admin/v1/movies/new'>Add Movie</Link>
                    </Button>
                    <MoreMenu items={menu} placement='bottom-end'>
                        <MoreVertOutlinedIcon fontSize='inherit' />
                    </MoreMenu>
                </div>
            </header>
            <TableData
                rows={movies}
                columns={columns}
                getRowId={(row) => row.maPhim}
                rowsPerPageOptions={[10]}
                pageSize={10}
                autoHeight
                rowHeight={80}
            />
        </div>
    )
}

export default MovieList