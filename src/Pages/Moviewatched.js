import React, { useEffect, useState } from "react";
import axios from "axios";

const Moviewatchedcomp = (props) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const [movies, setMovies] = useState([]);

  const [watched, setWatched] = useState([]);
  useEffect(
    () =>
      async function getdata() {
        let resp2 = await axios.get("http://localhost:8000/api/movie");
        setMovies(resp2.data);

        let resp = await axios.get("http://localhost:8000/api/subcription");
        setSubscriptions(resp.data);

        getdata();
      },
    []
  );

  useEffect(() => {
    function get() {
      subscriptions.forEach((sub) => {
        let arr = [];
        if (sub.memberid === props.memberid) {
          movies.forEach((x) => {
            if (x._id === sub.movieid) {
              arr.push(x.name + ", " + sub.date);
            }
          });
          setWatched(arr);
        }
      });
    }
    get();
  }, [movies]);

  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "MidnightBlue",
        borderWidth: "4px",
      }}
    >
      <h2 style={{ olor: "blue" }}> Movies Watched</h2>

      <ul>
        {watched.map((item, _id) => {
          return <li key={_id}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Moviewatchedcomp;
