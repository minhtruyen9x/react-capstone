import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

let cx = classNames.bind(styles);

const Popper = ({ children }) => {

    return (
        <div className={cx('wrapper')}>{children}</div>
    )
};

export default Popper;
