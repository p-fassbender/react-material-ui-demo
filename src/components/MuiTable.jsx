import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

export const MuiTable = () => {
    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
                <Table aria-label='table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((data) => (
                                <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.first_name}</TableCell>
                                    <TableCell>{data.last_name}</TableCell>
                                    <TableCell align='center'>{data.email}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Haydon",
    "last_name": "Suddaby",
    "email": "hsuddaby0@auda.org.au",
    "gender": "Male",
    "ip_address": "134.99.134.143"
}, {
    "id": 2,
    "first_name": "Bobinette",
    "last_name": "Spry",
    "email": "bspry1@jiathis.com",
    "gender": "Female",
    "ip_address": "109.106.30.24"
}, {
    "id": 3,
    "first_name": "Angelia",
    "last_name": "Lygo",
    "email": "alygo2@cnbc.com",
    "gender": "Polygender",
    "ip_address": "205.20.29.179"
}, {
    "id": 4,
    "first_name": "Cesaro",
    "last_name": "Penhaligon",
    "email": "cpenhaligon3@va.gov",
    "gender": "Male",
    "ip_address": "23.144.153.213"
}, {
    "id": 5,
    "first_name": "Lynnell",
    "last_name": "Bernardoux",
    "email": "lbernardoux4@sun.com",
    "gender": "Female",
    "ip_address": "179.3.119.163"
}, {
    "id": 6,
    "first_name": "Fifine",
    "last_name": "Cherrison",
    "email": "fcherrison5@google.ca",
    "gender": "Genderqueer",
    "ip_address": "43.253.26.138"
}, {
    "id": 7,
    "first_name": "Seymour",
    "last_name": "Hemstead",
    "email": "shemstead6@oracle.com",
    "gender": "Male",
    "ip_address": "236.167.222.252"
}, {
    "id": 8,
    "first_name": "Benn",
    "last_name": "Rihosek",
    "email": "brihosek7@so-net.ne.jp",
    "gender": "Male",
    "ip_address": "229.152.140.71"
}, {
    "id": 9,
    "first_name": "Karyl",
    "last_name": "Adamoli",
    "email": "kadamoli8@google.ru",
    "gender": "Female",
    "ip_address": "239.124.5.137"
}, {
    "id": 10,
    "first_name": "Hilarius",
    "last_name": "Adhams",
    "email": "hadhams9@facebook.com",
    "gender": "Male",
    "ip_address": "109.35.88.40"
}]