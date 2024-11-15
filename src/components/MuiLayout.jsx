import { Box, Stack, Divider, Paper } from '@mui/material'
import Grid from '@mui/material/Grid2';
import React from 'react'

export const MuiLayout = () => {
    return (
        <>
            <Paper sx={{ padding: '32px' }} elevation={4}>
                <Stack
                    sx={{ border: '1px solid red' }}
                    direction={'row'}
                    // direction={'row-reverse'}
                    // direction={'column-reverse'}
                    spacing={2}
                    divider={<Divider orientation='vertical' flexItem />}
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

                <Grid
                    container
                    my={4}
                    // spacing={2}
                    rowSpacing={2}
                    columnSpacing={1}
                >
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box bgcolor={'primary.light'} p={2}> Item 1</Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box bgcolor={'primary.light'} p={2}> Item 2</Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box bgcolor={'primary.light'} p={2}> Item 3</Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box bgcolor={'primary.light'} p={2}> Item 4</Box>
                    </Grid>
                    <Grid size='auto'>
                        <Box bgcolor={'primary.light'} p={2}> Item 5</Box>
                    </Grid>
                    <Grid size='grow'>
                        <Box bgcolor={'primary.light'} p={2}> Item 6</Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
