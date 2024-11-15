import React from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({ checked })
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <>
            <Box>
                <FormControlLabel
                    label={checked ? "Dark Mode" : "Light Mode"}
                    control={
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            size='small'
                            color='secondary'
                        />
                    }
                />
            </Box>
        </>
    )
}
