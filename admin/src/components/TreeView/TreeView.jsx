import styles from './Tree.module.scss'
import classnames from 'classnames/bind'

import TreeItem from './TreeItem'
const cx = classnames.bind(styles)

const TreeView = ({ data = [], visible = true }) => {

    return (
        <ul className={cx("list", { visible })} >
            {data.map((node, index) => (
                <TreeItem node={node} key={index} />
            ))}
        </ul>
    )
}

export default TreeView