import React from 'react'
import { Rating, Stack } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    const [value, setValue] = useState(5)
    console.log({ value })
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Stack spacing={2}>
                <Rating
                    value={value}
                    onChange={handleChange}
                    precision={0.5}
                    size='large'
                    icon={<FavoriteIcon fontSize='inherit' color='error' />}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                // readOnly
                // highlightSelectedOnly
                />
            </Stack>
        </>
    )
}
