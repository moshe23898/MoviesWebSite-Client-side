import React, { useState } from 'react'
import axios from 'axios'
import {  Link, Outlet} from 'react-router-dom'
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
const Addmoviecomp = () => {
  const [movie, setMovie]= useState([{name:'',yearpermiered:'',genres:'',image:''}])

   function save()
  {
     let resp=  axios.post("http://localhost:8000/api/movie", movie)
     setMovie(resp.data)
     window.location.reload()

  }
  return (
    <div className='black'>
      <h3 style={{color:'blue'}}>Add Movie</h3>
     Name: <input type="text" onChange={e => setMovie({...movie, name : e.target.value})}></input><br/>
     Geners:<input type="text" onChange={e => setMovie({...movie, genres : e.target.value})}></input><br/>
     Image URL:<input type="text" onChange={e => setMovie({...movie, image : e.target.value})}></input><br/>
     Year Premired:<input type="text" onChange={e => setMovie({...movie, yearpermiered : e.target.value})}></input><br/>

     <Button size='small' variant="outlined" color="success" startIcon={<SaveIcon />} onClick={save}>SAVE</Button>
     <Link to="/Main/Movies"><Button size='small' variant="outlined" color="success" startIcon={<SendIcon />}>CANCEL</Button></Link>
     <Outlet/>
    </div>
  )
}

export default Addmoviecomp
