import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styles from './TableData.module.scss'
import CustomNoRowsOverlay from './CustomNoRowsOverlay';
import CustomLoadingOverlay from './CustomLoadingOverlay';
import CustomErrorOverLay from './CustomErrorOverLay';

const TableData = ({ rows, columns, ...passProps }) => {
    return (
        <DataGrid
            getRowClassName={() => styles.row}
            getCellClassName={() => styles.cell}
            {...passProps}
            className={styles.table}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pagination
            disableColumnMenu={true}
            components={{
                NoRowsOverlay: CustomNoRowsOverlay,
                LoadingOverlay: CustomLoadingOverlay,
                ErrorOverlay: CustomErrorOverLay
            }}
        // cellContent={() => styles.cellContent}
        // cell
        />
    )
}

export default TableData