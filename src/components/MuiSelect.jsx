import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState([]);
    console.log(country, state);
    const handleChangeOne = (event) => {
        setCountry(event.target.value);
    };
    const handleChangeTwo = (event) => {
        const value = event.target.value;
        setState(value);
    };
    return (
        <Box width='250px'>
            <TextField label='Select Country' select value={country} onChange={(e) => handleChangeOne(e)} fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austraia</MenuItem>
            </TextField>
            <p></p>
            <TextField
                label='Select State'
                select
                value={state}
                onChange={(e) => handleChangeTwo(e)}
                fullWidth
                SelectProps={{ multiple: true }}
                size='small'
                color='success'
                helperText='choose the state'
            >
                <MenuItem value='MU'>Mumbai</MenuItem>
                <MenuItem value='NY'>New York</MenuItem>
                <MenuItem value='SD'>Sidney</MenuItem>
            </TextField>
        </Box>
    );
};

export default MuiSelect;
