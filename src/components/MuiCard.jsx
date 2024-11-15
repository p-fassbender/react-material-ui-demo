import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
    return (
        <>
            <Box width={'300px'}>
                <Card>
                    <CardMedia
                        component={'img'}
                        height={'140px'}
                        image='https://images.unsplash.com/photo-1729067915140-3bfad0b1b00d'
                        alt='unsplash image'
                    ></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component={'div'}>React</Typography>
                        <Typography variant='body2' color='text.secondary'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
