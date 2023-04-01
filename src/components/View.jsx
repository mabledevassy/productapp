import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'


const View = () => {
    
    var[products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3005/proucts")
        .then(response=>{
            setProducts(products=response.data)
            console.log(products)
        })
        .catch(error=>console.log(error))
    },[])
    <TableContainer>
    
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>grade</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Update</TableCell>
            </TableRow>
        </TableHead></Table>
</TableContainer>


    
  )
}
export default View
