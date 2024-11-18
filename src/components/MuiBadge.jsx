import React from 'react'
import { Badge, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {

    let unreadEmails = ['e', 'm', 'a', 'i', 'l', 's']
    // let unreadEmails = []

    return (
        <>
            <Stack spacing={2} direction={'row'}>
                <Badge badgeContent={5} color='primary'>
                    <MailIcon />
                </Badge>

                <Badge badgeContent={0} color='secondary' showZero>
                    <MailIcon />
                </Badge>

                <Badge badgeContent={100} color='primary' max={999}>
                    <MailIcon />
                </Badge>

                <Badge variant='dot' color='primary' invisible={unreadEmails.length === 0}>
                    <MailIcon />
                </Badge>
            </Stack>
        </>
    )
}
