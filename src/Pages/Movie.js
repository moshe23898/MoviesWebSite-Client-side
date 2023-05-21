import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Membercomp from "./Member";
import Subscribercomp from "./Subscriber";
import "../App.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Moviecomp = (props) => {
  const navigate = useNavigate();

  const edit = () => {
    navigate("/Main/Movie/" + props.mov._id);
  };

  const Delete = async () => {
    let resp = await axios.delete(
      "http://localhost:8000/api/movie/" + props.mov._id
    );
    alert(resp.data);
    window.location.reload();
  };

  return (
    <div style={{ color: "red" }}>
      
     
         <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={props.mov.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.mov.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          yearpermiered:{props.mov.yearpermiered}<br/>
          Ganers:{props.mov.genres + " "}
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Button size="small" variant="outlined" color="success" onClick={edit}>
        Edit
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="success"
        startIcon={<DeleteIcon />}
        onClick={Delete}
      >
        Delete
      </Button>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "MidnightBlue",
          borderWidth: "5px",
        }}
      >
  

        {<Subscribercomp movieid={props.mov._id} key={props.mov._id} />}
      </div>{" "}
      <br />
    </div>
  );
};

export default Moviecomp;
