import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={(e, isExpanded) => { handleChange(isExpanded, 'panel1') }}>
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aut amet enim ea quo veritatis qui ut animi, impedit pariatur ipsum error at eveniet maxime aliquam facilis saepe ullam ad.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={(e, isExpanded) => { handleChange(isExpanded, 'panel2') }}>
                <AccordionSummary
                    id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aut amet enim ea quo veritatis qui ut animi, impedit pariatur ipsum error at eveniet maxime aliquam facilis saepe ullam ad.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={(e, isExpanded) => { handleChange(isExpanded, 'panel3') }}>
                <AccordionSummary
                    id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aut amet enim ea quo veritatis qui ut animi, impedit pariatur ipsum error at eveniet maxime aliquam facilis saepe ullam ad.</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
