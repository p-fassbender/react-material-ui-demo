import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
    return (
        <>
            <Box sx={{ width: '400px', bgcolor: 'grey' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List Item 1' secondary='secondary text' />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 2' secondary='secondary text' />
                    </ListItem>

                    <Divider />
                    
                    <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 3' secondary='secondary text' />
                    </ListItem>
                </List>
            </Box>
        </>
    )
}
