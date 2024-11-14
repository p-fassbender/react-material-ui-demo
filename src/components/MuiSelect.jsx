import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState([])
    // console.log({ country })
    console.log({ countries })
    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleChangeCountries = (e) => {
        const value = e.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <>
            <Box width={'250px'}>
                <TextField
                    label='Select Country'
                    select
                    value={country}
                    onChange={handleChangeCountry}
                    fullWidth
                >
                    <MenuItem value='US'>United States</MenuItem>
                    <MenuItem value='CA'>Canada</MenuItem>
                    <MenuItem value='MX'>Mexico</MenuItem>
                </TextField>
            </Box>

            <Box width={'250px'}>
                <TextField
                    label='Select Countries'
                    select
                    value={countries}
                    onChange={handleChangeCountries}
                    fullWidth
                    slotProps={{
                        select: {
                            multiple: true
                        }
                    }}
                    size='small'
                    color='secondary'
                    helperText='Please select one or more countries'
                    error
                >
                    <MenuItem value='US'>United States</MenuItem>
                    <MenuItem value='CA'>Canada</MenuItem>
                    <MenuItem value='MX'>Mexico</MenuItem>
                </TextField>
            </Box>
        </>
    )
}
