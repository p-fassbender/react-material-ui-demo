import React from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [skills, setSkills] = useState([])
    // console.log(acceptTnC)
    // console.log(bookmark)
    console.log(skills)
    const handleChange = (e) => {
        setAcceptTnC(e.target.checked)
    }
    const handleBookmark = (e) => {
        setBookmark(e.target.checked)
    }
    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if (index === -1) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
    }
    return (
        <>
            <Box >
                <Box>
                    <FormControlLabel
                        label='I accept terms and conditions'
                        control={
                            <Checkbox
                                checked={acceptTnC}
                                onChange={handleChange}
                                size='small'
                                color='secondary'
                            />
                        }
                    />
                </Box>

                <Box>
                    <Checkbox
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                        checked={bookmark}
                        onChange={handleBookmark}
                    />
                </Box>

                <Box>
                    <FormControl error>
                        <FormLabel>Skills</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                label='HTML'
                                control={
                                    <Checkbox
                                        value={'html'}
                                        checked={skills.includes('html')}
                                        onChange={handleSkillChange}
                                    />
                                }
                            />
                            <FormControlLabel
                                label='CSS'
                                control={
                                    <Checkbox
                                        value={'css'}
                                        checked={skills.includes('css')}
                                        onChange={handleSkillChange}
                                    />
                                }
                            />
                            <FormControlLabel
                                label='JavaScript'
                                control={
                                    <Checkbox
                                        value={'javascript'}
                                        checked={skills.includes('javascript')}
                                        onChange={handleSkillChange}
                                    />
                                }
                            />
                        </FormGroup>
                        <FormHelperText>Invalid selection</FormHelperText>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}
