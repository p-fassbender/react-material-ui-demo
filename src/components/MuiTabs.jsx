import { Box, Tabs, Tab, Paper, Stack } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

export const MuiTabs = () => {
    const [basicValue, setBasicValue] = useState(0)
    // console.log(basicValue)
    const handleChangeBasic = (e, newBasicValue) => {
        setBasicValue(newBasicValue)
    }

    const [labsValue, setLabsValue] = useState('1')
    console.log(labsValue)
    const handleChangeLabs = (e, newLabsValue) => {
        setLabsValue(newLabsValue)
    }

    return (
        <>
            <Paper sx={{ padding: '32px' }}>
                <Stack spacing={4}>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={basicValue} onChange={handleChangeBasic} aria-label='tabs example'>
                                <Tab label='Tab One' />
                                <Tab label='Tab Two' />
                                <Tab label='Tab Three' />
                            </Tabs>
                        </Box>
                        <Box role='tabpanel' hidden={basicValue !== 0}>This is in tab one</Box>
                        <Box role='tabpanel' hidden={basicValue !== 1}>This is in tab two</Box>
                        <Box role='tabpanel' hidden={basicValue !== 2}>This is in tab three</Box>
                    </Box>

                    <Box>
                        <TabContext value={labsValue}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
                                <TabList
                                    onChange={handleChangeLabs}
                                    aria-label='experimental tabs example'
                                    textColor='secondary'
                                    indicatorColor='secondary'
                                    centered
                                    variant='scrollable'
                                    scrollButtons='auto'
                                >
                                    <Tab label='tab one' value='1' icon={<FavoriteIcon />} iconPosition='start' />
                                    <Tab label='tab two' value='2' disabled />
                                    <Tab label='tab three' value='3' />
                                    <Tab label='tab four' value='4' />
                                    <Tab label='tab five' value='5' />
                                    <Tab label='tab six' value='6' />
                                </TabList>
                            </Box>
                            <TabPanel value='1'>This is in tab one</TabPanel>
                            <TabPanel value='2'>This is in tab two</TabPanel>
                            <TabPanel value='3'>This is in tab three</TabPanel>
                            <TabPanel value='4'>This is in tab four</TabPanel>
                            <TabPanel value='5'>This is in tab five</TabPanel>
                            <TabPanel value='6'>This is in tab six</TabPanel>
                        </TabContext>
                    </Box>
                </Stack>
            </Paper>
        </>
    )
}
