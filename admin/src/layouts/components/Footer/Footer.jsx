import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.copyright}>Thank you for visiting my page | 2022 ©</div>
            <div className={styles.version}>v3.7.1</div>
        </div>
    )
}

export default Footer