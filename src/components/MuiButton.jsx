import React, { useState } from 'react';
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats] = useState([]);
    console.log(formats)

    const handleFormatChange = (event,updatedFormat) =>{
     
       
        setFormats(updatedFormat)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com'>
                    Text
                </Button>
                <Button variant='contained' href='https://google.com'>
                    Contained
                </Button>
                <Button variant='outlined' href='https://google.com'>
                    Outlined
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>
                    Primary
                </Button>
                <Button variant='contained' color='secondary'>
                    Secondary
                </Button>
                <Button variant='contained' color='info'>
                    Info
                </Button>
                <Button variant='contained' color='error'>
                    Error
                </Button>
                <Button variant='contained' color='success'>
                    Success
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary'>
                    Primary
                </Button>
                <Button variant='outlined' color='secondary'>
                    Secondary
                </Button>
                <Button variant='outlined' color='info'>
                    Info
                </Button>
                <Button variant='outlined' color='error'>
                    Error
                </Button>
                <Button variant='outlined' color='success'>
                    Success
                </Button>
                <Button variant='outlined' color='warning'>
                    warning
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>
                    Primary
                </Button>
                <Button variant='text' color='secondary'>
                    Secondary
                </Button>
                <Button variant='text' color='info'>
                    Info
                </Button>
                <Button variant='text' color='error'>
                    Error
                </Button>
                <Button variant='text' color='success'>
                    Success
                </Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>
                    Small
                </Button>
                <Button variant='contained' size='medium'>
                    Medium
                </Button>
                <Button variant='contained' size='large'>
                    Large
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                {/* need to install this icon pack to use icon "@mui/icons-material" */}
                <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('hellow ')}>
                    Send
                </Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>
                    Send
                </Button>
                <IconButton variant='contained' color='success' size='large'>
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='outlined' color='success' size='small' aria-label='alignment button group'>
                    <Button>Left</Button>
                    <Button>center</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>
            
            <Stack direction='row'>
                <ToggleButtonGroup value={formats}
                size='large'
                color='success'
                variant='contained' 
                onChange={handleFormatChange}
                exclusive>
                    <ToggleButton value='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic'>
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default MuiButton;
