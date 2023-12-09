import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export default function ButtonPractice() {
    // const [formats, setFormats] = useState<string []>([])
    // console.log({
        // formats,
    // })
    // const handleFormatChange = (_event:React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        // setFormats(updatedFormats)

    

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com'>Text</Button>
                <Button variant='contained' href='https://facebook.com'>Contained</Button>
                <Button variant='outlined' href='https://instagram.com'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>} disableElevation>Send</Button>
                <Button variant='contained' endIcon={<SendIcon/>} disableRipple onClick={() => alert('clicked')}>Send</Button>
                <IconButton aria-label='send' color='success' size='small'>
                    <SendIcon/>
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                <Button onClick={() => alert('Left clicked')}>Left</Button>
                <Button>center</Button>
                <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' >
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlined/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
