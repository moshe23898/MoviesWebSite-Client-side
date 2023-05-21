import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
const EditmemberComp = () => {
  const [member, setMember] = useState([{ name: "", email: "", city: "" }]);
  const params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const getdata = async () => {
      let resp = await axios.get(
        "http://localhost:8000/api/member/" + params._id
      );

      setMember(resp.data);
    };
    getdata();
  }, []);

  const update = async (e) => {
    e.preventDefault();

    if (member.name != "") {
      let status = await axios.put(
        "http://localhost:8000/api/member/" + params._id,
        member
      );
      alert("Updated!!");
      navigate("/Main/Subcription");
    }
  };
  return (
    <div className="black">
      <h3>Edit Movie</h3>
      Name:{" "}
      <input
        type="text"
        onChange={(e) => setMember({ ...member, name: e.target.value })}
        value={member.name}
      ></input>
      <br />
      Email:
      <input
        type="text"
        onChange={(e) => setMember({ ...member, email: e.target.value })}
        value={member.email}
      ></input>
      <br />
      City:
      <input
        type="text"
        onChange={(e) => setMember({ ...member, city: e.target.value })}
        value={member.city}
      ></input>
      <br />
      <button onClick={update}>SAVE</button>
      <br />
      <Link to="/Main/Subcription">
        <button>CANCEL</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default EditmemberComp;
