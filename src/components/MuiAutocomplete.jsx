import React from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

export const MuiAutocomplete = () => {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Material UI']
    const skillsOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill
    }))

    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState(null)
    // console.log(value)
    console.log(skill)

    return (
        <>
            <Stack spacing={2} width={'250px'}>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='Skills' />}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    freeSolo
                />
                <Autocomplete
                    options={skillsOptions}
                    renderInput={(params) => <TextField {...params} label='Skills' />}
                    value={skill}
                    onChange={(e, newValue) => setSkill(newValue)}
                />
            </Stack>
        </>
    )
}
