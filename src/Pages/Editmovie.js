import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
const EditmovieComp = () => {
  const [movie, setMovie] = useState([
    { name: "", yearpermiered: "", genres: "", image: "" },
  ]);
  const params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const getdata = async () => {
      let resp = await axios.get(
        "http://localhost:8000/api/movie/" + params._id
      );

      setMovie(resp.data);
    };
    getdata();
  }, []);

  const update = async (e) => {
    e.preventDefault();

    if (movie.name != "") {
      let status = await axios.put(
        "http://localhost:8000/api/movie/" + params._id,
        movie
      );
      alert("Updated!!");
      navigate("/Main/Movies");
    }
  };

  return (
    <div className="black">
      <h3>Edit Movie</h3>
      Name:{" "}
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
        value={movie.name}
      ></input>
      <br />
      Geners:
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, genres: e.target.value })}
        value={movie.genres}
      ></input>
      <br />
      Image URL:
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, image: e.target.value })}
        value={movie.image}
      ></input>
      <br />
      Year Premired:
      <input
        type="text"
        onChange={(e) => setMovie({ ...movie, yearpermiered: e.target.value })}
        value={movie.yearpermiered}
      ></input>
      <br />
      <button onClick={update}>SAVE</button>
      <br />
      <Link to="/Main/Movies">
        <button>CANCEL</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default EditmovieComp;
