import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { useState } from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <Stack spacing={4} sx={{ bgcolor: 'white', p: '2rem' }}>
                <Stack direction={'row'} spacing={2}>
                    <TextField label='Name' variant='outlined' />
                    <TextField label='Name' variant='filled' />
                    <TextField label='Name' variant='standard' />
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <TextField label='Small Secondary' size='small' color='secondary'></TextField>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <TextField
                        label='Form Input'
                        required
                        value={value}
                        error={!value}
                        onChange={(e) => {setValue(e.target.value)}}
                        helperText={!value ? 'Required' : 'Your username cannot be changed in the future.'}
                    ></TextField>
                    <TextField label='Password' type='password' helperText='Do not share your password with anyone.' disabled></TextField>
                    <TextField label='Read Only' slotProps={{ input: { readOnly: true } }}></TextField>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <TextField
                        label='Amount'
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position='start'>$</InputAdornment>
                            }
                        }}
                    ></TextField>
                    <TextField
                        label='Weight'
                        slotProps={{
                            input: {
                                endAdornment: <InputAdornment position='end'>lbs</InputAdornment>
                            }
                        }}
                    ></TextField>
                </Stack>
            </Stack>
        </>
    )
}
