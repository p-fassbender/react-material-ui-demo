import { Stack, Link, Typography } from '@mui/material'
import React from 'react'

export const MuiLink = () => {
    return (
        <>
            <Stack spacing={2} direction={'row'} m={4}>
                <Typography variant='h6'>
                    <Link href='#' underline='none'>Link</Link>
                </Typography>

                <Link variant='body2' href='#' color='secondary' underline='hover'>Secondary</Link>
            </Stack>
        </>
    )
}
