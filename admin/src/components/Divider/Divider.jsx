import styles from './Divider.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

const Divider = ({
    children,
    orientation = 'horizontal',
    textAlign = 'center',
    variant = 'fullWidth',

}) => {
    const customClass = cx("divider", {
        [orientation]: orientation,
        [textAlign]: textAlign,
        [variant]: variant,
        content: children
    })

    return children ? (
        <div className={customClass}>
            <span>
                {children}
            </span>
        </div>
    ) : (
        <hr className={customClass} />
    )
}

export default Divider