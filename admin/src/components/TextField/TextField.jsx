import PropTypes from 'prop-types';

import styles from './TextField.module.scss'

const TextField = ({ type = "text", label, onChange, ...passProp }) => {
    return (
        <div className={styles.wrapper}>
            <input type={type} required onChange={onChange} {...passProp} />
            {label && <label>{label}</label>}
        </div>
    )
}

TextField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default TextField