import React from 'react'
import styles from './TextField.module.scss'

const TextField = ({ type = "text", label, onChange, ...passProp }) => {
    return (
        <div className={styles.wrapper}>
            <input type={type} required onChange={onChange} {...passProp} />
            {label && <label>{label}</label>}
        </div>
    )
}

export default TextField