import { Box, Stack, Divider } from '@mui/material'
import React from 'react'

export const MuiLayout = () => {
    return (
        <>
            <Stack
                sx={{ border: '1px solid red' }}
                direction={'row'}
                // direction={'row-reverse'}
                // direction={'column-reverse'}
                spacing={2}
                divider={<Divider orientation='vertical' flexItem/>}
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '300px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light'
                        }
                    }}
                >
                    Mui Box
                </Box>

                <Box component={'span'} sx={{ backgroundColor: 'warning.light' }}>Mui Box as span</Box>

                <Box display={'flex'} height={'100px'} width={'100px'} bgcolor={'success.light'} p={2}>
                    Mui Box with inline styles
                </Box>
            </Stack>
        </>
    )
}