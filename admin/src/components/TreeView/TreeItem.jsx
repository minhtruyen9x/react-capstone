import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TreeView from './TreeView'
import { Link, useHref } from 'react-router-dom';
import classnames from 'classnames/bind'
import Collapse from '@mui/material/Collapse';
import styles from './Tree.module.scss'
const cx = classnames.bind(styles)

const TreeItem = ({ node }) => {
    const href = useHref()
    const [visible, setVisible] = useState(() => node.visible || false)
    const hasChild = node.children ? true : false

    let Component = 'li'
    const { props = {} } = node
    let componentClass = cx("item", {
        root: node.root,
        separate: node.separate,
        active: href === node.to
    })

    if (node.to) {
        Component = Link
        props.to = node.to
    }

    return (
        <Component {...props} className={componentClass}>
            <div className={cx("title")} onClick={() => setVisible(!visible)}>
                {node.icon && (
                    <div className={cx("iconView")}>
                        {node.icon}
                    </div>
                )}
                <span>{node.title}</span>
                {hasChild && (
                    <div className={cx("iconToggle")}>
                        <KeyboardArrowDownIcon fontSize='inherit' color='inherit' />
                    </div>
                )}
            </div>

            {hasChild && (
                <Collapse orientation="vertical" in={visible}>
                    <TreeView data={node.children} />
                </Collapse>
            )}
        </Component>
    )
}

export default TreeItem