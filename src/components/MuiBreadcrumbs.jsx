import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadcrumbs = () => {
    return (
        <>
            <Box m={2}>
                <Breadcrumbs
                    aria-label='breadcrumbs'
                    separator={<NavigateNextIcon fontSize='small' />}
                    maxItems={2}
                    // itemsAfterCollapse={2}
                    itemsBeforeCollapse={2}
                >
                    <Link href='#' underline='hover'>Home</Link>
                    <Link href='#' underline='hover'>Catalog</Link>
                    <Link href='#' underline='hover'>Accessories</Link>
                    <Typography color='text.primary'>Shoes</Typography>
                </Breadcrumbs>
            </Box>
        </>
    )
}
