import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <>
            <Typography variant='h1'>h1 heading</Typography>
            <Typography variant='h2'>h2 heading</Typography>
            <Typography variant='h3'>h3 heading</Typography>
            <Typography variant='h4' component={'h1'} gutterBottom>h4 heading</Typography>
            <Typography variant='h5'>h5 heading</Typography>
            <Typography variant='h6'>h6 heading</Typography>

            <Typography variant='subtitle1'>subtitle 1</Typography>
            <Typography variant='subtitle2'>subtitle 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis magni alias enim doloremque suscipit in provident tenetur rerum sequi. Perspiciatis maiores similique modi error! Fuga voluptatem fugit animi est.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sint atque labore, fugiat commodi voluptate aperiam enim dolorem optio nostrum saepe voluptatem aspernatur! Cum obcaecati, reiciendis dolores debitis dolorem nobis?</Typography>
        </>
    )
}
