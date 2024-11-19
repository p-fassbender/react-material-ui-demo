import React, { useState, useEffect } from 'react'
import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material'

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <Stack spacing={4}>
                <Stack direction={'row'} spacing={4}>
                    <Stack spacing={1} width={250}>
                        <Skeleton variant='text' />
                        <Skeleton variant='circular' width={40} height={40} />
                        <Skeleton variant='rectangular' width={250} height={125} />
                    </Stack>
                    <Stack spacing={1} width={250}>
                        <Skeleton variant='text' animation='wave' />
                        <Skeleton variant='circular' width={40} height={40} animation='wave' />
                        <Skeleton variant='rectangular' width={250} height={125} animation='wave' />
                    </Stack>
                    <Stack spacing={1} width={250}>
                        <Skeleton variant='text' animation={false} />
                        <Skeleton variant='circular' width={40} height={40} animation={false} />
                        <Skeleton variant='rectangular' width={250} height={125} animation={false} />
                    </Stack>
                </Stack>

                <Box sx={{ width: '256px' }}>
                    {
                        loading ? (
                            <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
                        ) : (
                            <img src='https://images.unsplash.com/photo-1729067915140-3bfad0b1b00d' alt='unsplash image' width={256} height={144} />
                        )
                    }
                    <Stack direction={'row'} spacing={1} sx={{ width: '100%', marginTop: '12px', marginBottom: '8px' }}>
                        {
                            loading ? (
                                <>
                                    <Skeleton variant='circular' width={40} height={40} animation='wave' />
                                    <Typography variant='body1' width={'50%'}>
                                        <Skeleton animation='wave' />
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <Avatar src='https://randomuser.me/portraits/women/79.jpg' alt='jane doe'></Avatar>
                                    <Typography variant='body1' width={'100%'} textAlign={'center'} alignSelf={'center'}>
                                        React Mui Tutorial
                                    </Typography>
                                </>
                            )
                        }
                    </Stack>
                    <Stack sx={{ width: '100%' }}>
                        {
                            loading ? (
                                <Typography variant='body2'>
                                    <Skeleton width={'100%'} animation='wave' />
                                </Typography>
                            ) : (
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos dolore. Iure odio dicta ducimus, esse, perspiciatis quae eum fuga exercitationem, expedita consectetur enim nesciunt. Voluptatibus omnis aut exercitationem quo!
                                </Typography>
                            )
                        }
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}
