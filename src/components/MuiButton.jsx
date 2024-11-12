import React from 'react'
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Rowing } from '@mui/icons-material';

export const MuiButton = () => {
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction={'row'}>
                    <Button variant='text' href='https://google.com'>text</Button>
                    <Button variant='contained'>contained</Button>
                    <Button variant='outlined'>outlined</Button>
                </Stack>

                <Stack spacing={2} direction={'row'}>
                    <Button variant='text' color='primary'>primary</Button>
                    <Button variant='text' color='secondary'>secondary</Button>
                    <Button variant='text' color='error'>error</Button>
                    <Button variant='text' color='warning'>warning</Button>
                    <Button variant='text' color='info'>info</Button>
                    <Button variant='text' color='success'>success</Button>
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <Button variant='contained' color='primary'>primary</Button>
                    <Button variant='contained' color='secondary'>secondary</Button>
                    <Button variant='contained' color='error'>error</Button>
                    <Button variant='contained' color='warning'>warning</Button>
                    <Button variant='contained' color='info'>info</Button>
                    <Button variant='contained' color='success'>success</Button>
                </Stack>
                <Stack spacing={2} direction={'row'}>
                    <Button variant='outlined' color='primary'>primary</Button>
                    <Button variant='outlined' color='secondary'>secondary</Button>
                    <Button variant='outlined' color='error'>error</Button>
                    <Button variant='outlined' color='warning'>warning</Button>
                    <Button variant='outlined' color='info'>info</Button>
                    <Button variant='outlined' color='success'>success</Button>
                </Stack>

                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='text' size='small'>small</Button>
                    <Button variant='text' size='medium'>medium</Button>
                    <Button variant='text' size='large'>large</Button>
                </Stack>
                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='contained' size='small'>small</Button>
                    <Button variant='contained' size='medium'>medium</Button>
                    <Button variant='contained' size='large'>large</Button>
                </Stack>
                <Stack display={'block'} spacing={2} direction={'row'}>
                    <Button variant='outlined' size='small'>small</Button>
                    <Button variant='outlined' size='medium'>medium</Button>
                    <Button variant='outlined' size='large'>large</Button>
                </Stack>

                <Stack spacing={2} direction={'row'}>
                    <Button
                        variant='contained'
                        startIcon={<SendIcon />}
                        disableRipple
                        onClick={() => alert('Clicked')}>
                        send
                    </Button>
                    <Button variant='contained' endIcon={<SendIcon />} disableElevation>send</Button>
                    <IconButton aria-label='send' color='success' size='small'><SendIcon /></IconButton>
                </Stack>

                <Stack direction={'row'}>
                    <ButtonGroup variant='text' >
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction={'row'}>
                    <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label='alignment button group'>
                        <Button onClick={() => alert('Clicked')}>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
                <Stack direction={'row'}>
                    <ButtonGroup variant='outlined'>
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}
