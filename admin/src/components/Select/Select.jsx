import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';
import styles from './Select.module.scss'
import MenuItem from '@mui/material/MenuItem';

const Select = ({ label, children }) => {
    const [role, setRole] = useState('');
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth className={styles.wrapper}>
                <InputLabel id="demo-simple-select-label" className={styles.label}>Role</InputLabel>
                <SelectMUI
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Age"
                    autowidth
                    onChange={handleChange}
                    className={styles.select}
                >
                    <MenuItem className={styles.option} value="KhachHang">Customer</MenuItem>
                    <MenuItem value="KhachHang">Customer</MenuItem>
                    <MenuItem value="KhachHang">Customer</MenuItem>

                </SelectMUI>
            </FormControl>
        </Box>
    )
}

export default Select