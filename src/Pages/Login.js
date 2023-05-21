import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { Button } from "@mui/material";


const Logincomp = () => {
  const [login, setLogin] = useState([{ username: "", password: "" }]);
  const Navigate = useNavigate();
  const log = async () => {
    let resp = await axios.get("http://localhost:8000/api/user");
    let result = resp.data;

    let arr = result.filter(
      (x) => x.username == login.username && x.password == login.password
    );
    console.table(arr);
    if (arr.length > 0) {
      {
        arr.map((x) => {
          sessionStorage["name"] = x.fullname;
        });
      }
      Navigate("/Main");
    } else {
      alert("User name or Password are incorrect !!");
    }
  };

  return (
    <div>
      <div className="App">
        <h3 variant="outlined" style={{ color: "purple" }}>
          Log in Page
        </h3>
        User Name :{" "}
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />{" "}
        <br />
        Password :{" "}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />{" "}
        <br />
        <Button variant="contained" onClick={log}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Logincomp;
