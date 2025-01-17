import React, { useState } from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }

    return (
        <>
            <Stack direction={'row'} spacing={1}>
                <Chip label='Chip' color='primary' icon={<FaceIcon />} />

                <Chip label='Chip' color='primary' size='small' />

                <Chip
                    label='Chip Outlined'
                    color='secondary'
                    size='small'
                    variant='outlined'
                    avatar={<Avatar>P</Avatar>}
                />

                <Chip
                    label='Click'
                    color='success'
                    onClick={() => alert('Clicked')}
                />

                <Chip
                    label='Delete'
                    color='error'
                    onClick={() => alert('Clicked')}
                    onDelete={() => alert('Delete Handler Called')}
                />

                {
                    chips.map((chip) => (
                        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                    ))
                }
            </Stack>
        </>
    )
}
