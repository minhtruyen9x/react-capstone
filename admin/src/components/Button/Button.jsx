import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const Button = ({
    href,
    to,
    disable,
    children,
    className,
    primary,
    fullWidth,
    large,
    small,
    solid,
    outline,
    round,
    endIcon,
    startIcon,
    ...passProps }) => {

    let RootType = 'button'

    if (href) {
        RootType = 'a'
        passProps.href = href
    }

    if (to) {
        RootType = Link
        passProps.to = to
    }

    // có prop disable thì loại bỏ tất cả các event trên button
    if (disable) {
        Object.keys(passProps).forEach(prop => {
            if (prop.startsWith('on')) {
                delete passProps[prop]
            }
        })
    }


    const customClass = cx('wrapper', {
        [className]: className,
        primary,
        small,
        large,
        fullWidth,
        solid,
        outline,
        round,
        disable
    })

    return (
        <RootType {...passProps} className={customClass}>
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </RootType>
    )
}

export default Button