import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import styles from './CustomLoadingOverlay.module.scss'

const CustomLoadingOverlay = () => {
    return (
        <div className={styles.wrapper}>
            <CloudQueueOutlinedIcon fontSize='inherit' color="inherit" />
            <div className={styles.loader}>
                <div className={styles.inner}></div>
                <div className={styles.inner} ></div >
                <div className={styles.inner} ></div >
            </div >
            <p>Data is loading ...</p>
        </div >
    )
}

export default CustomLoadingOverlay