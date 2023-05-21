import React, { useEffect, useState } from "react";
import Membercomp from "./Member";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
const Subcriptioncomp = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function getdata() {
      let resp = await axios.get("http://localhost:8000/api/member");
      setMember(resp.data);
    }
    getdata();
  }, []);
  return (
    <div>
      <h3 style={{ color: "purple" }}>Subcription</h3>
      <Link to="">
        <Button size="small" variant="contained">
          All Members
        </Button>
      </Link>
      <Link to="Addmember">
        <Button size="small" variant="contained">
          Add Memberss
        </Button>
      </Link>
      <Outlet />

      {member.map((x, index) => {
        return <Membercomp member={x} key={index} />;
      })}
    </div>
  );
};

export default Subcriptioncomp;
