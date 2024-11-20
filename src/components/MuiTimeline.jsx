import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab'
import { Paper } from '@mui/material'

export const MuiTimeline = () => {
    return (
        <>
            <Paper sx={{ padding: '32px', width: '500px' }}>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineOppositeContent color='text.secondary'>09:30 am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            City A
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color='text.secondary'>10:00 am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            City B
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color='text.secondary'>10:30 am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined' />
                        </TimelineSeparator>
                        <TimelineContent>
                            City C
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </>
    )
}
