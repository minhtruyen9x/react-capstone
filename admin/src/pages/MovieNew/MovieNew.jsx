import Grid from '@mui/material/Unstable_Grid2';


import styles from './MovieNew.module.scss'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Select from '../../components/Select/Select';
import SelectOption from '../../components/Select/SelectOption';
import cameraImg from '../../assets/images/camera.png'
// "maPhim": 6061,
// "tenPhim": "Hành Tinh Mất Trật Tự 88888",
//       "                  biDanh": "hanh-tinh-mat-trat-tu-88888",
// "trailer": "https://www.youtube.com/embed/CNfNsNkgxjo",
// "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan-2_gp01.jpg",
// "moTa": "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống..",
//                           "maNhom": "GP01",
// "ngayKhoiChieu": "2022-11-09T15:02:23.323",
// "danhGia": 9,
// "hot": true,
// "dangChieu": true,
// "sapChieu": false

const MovieNew = () => {
    return (
        <div className={styles.wrapper}>
            <Grid container spacing={4}>
                <Grid xs={12} sm={12} md={4} display="flex" justifyContent="center">
                    <div className={styles.image}>
                        <img src={cameraImg} alt="" />
                        <span>No Images</span>
                    </div>
                </Grid>
                <Grid xs={12} sm={12} md={8} container spacing={4}>
                    <Grid xs={12}>
                        <input type="file" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Full Name" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Film Trailer url" />
                    </Grid>
                    <Grid xs={12} >
                        <TextField type='textarea' rows={3} label="Description" />
                    </Grid>
                    <Grid xs={12}>
                        <TextField type="date" label="Show Time Day" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Rating" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Popular" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Comming" />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField label="Showing" />
                    </Grid>
                    <div className={styles.control}>
                        <Button solid primary>Upload</Button>
                        <Button solid primary>Create</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default MovieNew