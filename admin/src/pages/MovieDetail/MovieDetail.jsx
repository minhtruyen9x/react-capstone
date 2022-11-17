import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

import Grid from '@mui/material/Unstable_Grid2';

import Box from '../../components/Box';
import Button from '../../components/Button';
import CustomLoadingOverlay from '../../components/TableData/CustomLoadingOverlay';
import CustomErrorOverLay from '../../components/TableData/CustomErrorOverLay';

import { getMovieDetail, deleteMovie } from '../../slices/movieSlice'
import Paragraph from '../../components/Paragraph';
import MovieEditFormModal from './MovieEditFormModal';

import styles from './MovieDetail.module.scss'

const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { selectedMovie, loading, error } = useSelector(state => state.movie)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(getMovieDetail(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleDelete = async () => {
        dispatch(deleteMovie(id))
            .unwrap()
            .then(() => {
                toast.success("Delete movie successfully")
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    if (loading) {
        return <CustomLoadingOverlay />
    }

    if (error) {
        return <CustomErrorOverLay />
    }

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Movie</h2>
            </header>
            {/******** Movie Information ***********/}
            <Grid container spacing={2}>
                <Box className={styles.container}>
                    <h3>Basic Infomation</h3>
                    <Grid container spacing={2}>
                        <Button solid className={styles.editBtn} onClick={() => setIsOpen(!isOpen)}>Edit</Button>
                        <Button solid className={styles.deleteBtn} onClick={handleDelete}>Delete</Button>
                        <Grid xs={12} md={4} display='flex' alignItems="center" justifyContent="center">
                            <div className={styles.image}>
                                <img src={selectedMovie.hinhAnh} alt="" />
                            </div>
                        </Grid>
                        <Grid xs={12} md={8}>
                            <div className={styles.infoWrapper}>
                                <div className={styles.info}>
                                    <h5>Movie ID:</h5>
                                    <span>{selectedMovie.maPhim}</span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Name:</h5>
                                    <span>{selectedMovie.tenPhim}</span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Trailer:</h5>
                                    <span>{selectedMovie.trailer}</span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Rating:</h5>
                                    <span>{selectedMovie.danhGia}</span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Show day</h5>
                                    <span>{selectedMovie.ngayKhoiChieu}</span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Status:</h5>
                                    <span>
                                        {selectedMovie.sapChieu}
                                        {selectedMovie.dangChieu}
                                        {selectedMovie.hot}
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <h5>Description:</h5>
                                    <Paragraph maxCharacters={130}>{selectedMovie.moTa}</Paragraph>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            {/******** Movie edit modal ***********/}
            <MovieEditFormModal open={isOpen} onClose={() => setIsOpen(!isOpen)} />
        </div >
    )
}

export default MovieDetail