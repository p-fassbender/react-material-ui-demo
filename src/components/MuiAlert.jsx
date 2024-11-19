import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

export const MuiAlert = () => {
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction={'row'}>
                    <Stack spacing={2}>
                        <Alert severity='error'>This is an error alert</Alert>
                        <Alert severity='warning'>This is a warning alert</Alert>
                        <Alert severity='info'>This is an info alert</Alert>
                        <Alert severity='success'>This is a success alert</Alert>
                    </Stack>

                    <Stack spacing={2}>
                        <Alert variant='outlined' severity='error'>This is an error alert</Alert>
                        <Alert variant='outlined' severity='warning'>This is a warning alert</Alert>
                        <Alert variant='outlined' severity='info'>This is an info alert</Alert>
                        <Alert variant='outlined' severity='success'>This is a success alert</Alert>
                    </Stack>

                    <Stack spacing={2}>
                        <Alert variant='filled' severity='error'>This is an error alert</Alert>
                        <Alert variant='filled' severity='warning'>This is a warning alert</Alert>
                        <Alert variant='filled' severity='info'>This is an info alert</Alert>
                        <Alert variant='filled' severity='success'>This is a success alert</Alert>
                    </Stack>
                </Stack>

                <Stack spacing={2}>
                    <Alert variant='filled' severity='error' onClose={() => alert('close alert')}>
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert
                    </Alert>
                    <Alert variant='filled' severity='warning'>
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert
                    </Alert>
                    <Alert variant='filled' severity='info'>
                        <AlertTitle>Info</AlertTitle>
                        This is an info alert
                    </Alert>
                    <Alert
                        variant='filled'
                        severity='success'
                        icon={<CheckIcon fontSize='inherit' />}
                        action={<Button color='inherit' size='small'>UNDO</Button>}
                    >
                        <AlertTitle>Success</AlertTitle>
                        This is a success alert
                    </Alert>
                </Stack>
            </Stack>
        </>
    )
}
