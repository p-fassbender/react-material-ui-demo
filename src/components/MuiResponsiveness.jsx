import React from 'react'
import { Box, styled } from '@mui/material'

const StyledBox = styled(Box)(({ theme }) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.status.danger
}))

const StyledBox2 = styled(Box)(({ theme }) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.neutral.main
}))

const StyledBox3 = styled(Box)(({ theme }) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.neutral.darker
}))

export const MuiResponsiveness = () => {
    return (
        <>
            <Box sx={{
                height: '300px',
                width: {
                    xs: 100,
                    sm: 200,
                    md: 300,
                    lg: 400,
                    xl: 500
                },
                bgcolor: 'secondary.dark'
            }}>
            </Box>

            <StyledBox />
            <StyledBox2 />
            <StyledBox3 />
        </>
    )
}
