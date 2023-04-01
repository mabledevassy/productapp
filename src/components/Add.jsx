import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = (props) => {
    var [input,setInput]=useState(props.data)
    console.log(props.data)
  
    const inputHandler=(e)=>{
      const {name,value}=e.target 
      setInput({...input,[name]:value})
    }
    const readValues=()=>{
    console.log("clicked")
    if(props.method=="post"){
    axios.post("http://localhost:3005/proucts",input)
    .then(response=>{
      alert("Successfully added")
  
    })
      .catch(error=>console.log(error))
  }else if(props.method=="put"){
    axios.put("http://localhost:3005/proucts"+input.id,input)
    .then(response=>{
      alert("Updated successfully")
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
  }
    }
  return (
    <div>
        <TextField id="standard-basic" label="Name" variant="standard" onChange={inputHandler}name='Name'
         value={input.Name}/>
         <Typography>{input.Name}</Typography>
        <TextField id="standard-basic" label="Brand" variant="standard" onChange={inputHandler}name='Brand'
         value={input.Brand}/>
          <Typography>{input.Brand}</Typography>
        <TextField id="standard-basic" label="Qantity" variant="standard"onChange={inputHandler}name='Quantity'
         value={input.Quantity}/>
         <Typography>{input.Quantity}</Typography> 
        <TextField id="standard-basic" label="Price" variant="standard"onChange={inputHandler}name='Price'
         value={input.Price}/> 
         <Typography>{input.Price}</Typography>
        <Button variant="contained" onClick={readValues}>Save</Button>
    </div>
  )
}

export default Add
