import ModalMUI from '@mui/material/Modal';
import styles from './Modal.module.scss'


const Modal = ({ open, onClose, title, children }) => {
    console.log(onClose)
    return (
        <ModalMUI
            open={open}
            onClose={onClose}
        >
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h3>{title}</h3>
                    <button onClick={onClose}>X</button>
                </header>
                <div className={styles.body}>
                    {children}dfsdvd
                </div>
            </div>
        </ModalMUI>
    );
}

export default Modal