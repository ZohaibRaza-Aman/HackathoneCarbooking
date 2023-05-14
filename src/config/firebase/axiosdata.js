import axios from "axios";
import'./axios.css'
import React, { useState , useEffect } from "react";

const Axiosdata = () => {
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMydata(res.data))
      
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center">Axios Post Data</h1>
        <div className="grid">
          {mydata.map((post) => {
            const { id, title, body} = post;
            return (
              <>
              <div className="card" key={id}>
                <h2 className="text-dark">{title.slice(0, 15).toUpperCase()}</h2>
                <p className="text-dark">{body.slice(0, 100)}</p>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Axiosdata;
