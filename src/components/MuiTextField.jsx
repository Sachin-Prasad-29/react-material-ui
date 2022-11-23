import { Stack, TextField, InputAdornment } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const MuiTextField = () => {
    const [visible, setVisible] = useState(false);
    const [pasType,setPasType] = useState('password')
    // const togglePassword = () => {
    //     setVisible(!visible);
    // }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant='outlined' color='error' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Small Secondary' variant='outlined' color='success' size='small' />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Form Input' required  error={true}/>
                <TextField label='Form Input' type='password' helperText='Do not share your password with anyone' />
                <TextField label='Disabled' disabled />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField
                    label='Amount'
                    InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
                />

                <TextField
                    label='Weight'
                    InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }}
                />

                <TextField
                    label='Weight'
                    type={pasType}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                {!visible && (
                                    <RemoveRedEyeIcon
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setPasType('text')
                                            setVisible(!visible)}}
                                    />
                                )}
                                {visible && (
                                    <VisibilityOffIcon
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setPasType('password');
                                            setVisible(!visible)}}
                                    />
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default MuiTextField;
