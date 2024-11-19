import React, { useState } from 'react'
import { Stack, Paper } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)
    // console.log(selectedDate)
    // console.log(dayjs(selectedTime).format('hh:mm a'))
    // console.log(selectedDateTime)

    return (
        <>
            <Paper sx={{ padding: '32px' }}>
                <Stack spacing={4} sx={{ width: '250px' }}>
                    <DatePicker
                        label='Select a Date'
                        value={selectedDate}
                        onChange={(newValue) => {
                            setSelectedDate(newValue)
                        }}
                    />

                    <TimePicker
                        label='Select a Time'
                        value={selectedTime}
                        onChange={(newValue) => {
                            setSelectedTime(newValue)
                        }}
                    />

                    <DateTimePicker
                        label='Select a Date and Time'
                        value={selectedDateTime}
                        onChange={(newValue) => {
                            setSelectedDateTime(newValue)
                        }}
                    />
                </Stack>
            </Paper>
        </>
    )
}
