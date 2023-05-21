import { Button } from '@mui/material'
import React from 'react'

import {  Link, Outlet } from 'react-router-dom'



const Maincomp = () => {
  return (
    
    <div >
   
    <h5 style={{color:'black'}}>!!!ברוכים הבאים, {sessionStorage['name']}</h5>
    <Link to="Movies"><Button size='small' variant="contained" color="secondary" >Movies Page</Button></Link> &nbsp;  
    <Link to="Subcription"><Button size='small' variant="contained" color="secondary">Subcription Page</Button></Link> &nbsp;
    <Link to="Users"><Button size='small' variant="contained" color="secondary">Users Page</Button></Link> &nbsp;
    <Link to="/"><Button size='small' variant="contained" color="secondary">Log Out</Button></Link> &nbsp;
   
    <Outlet/>

        
     
    </div>
  )
}

export default Maincomp
