import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";

const SinglePost = () => {
  const params = useParams();

  let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;

    const [listData, setListData] = useState([]);

    let getData = () => {
      axios
        .get(api)
        .then((res) => {
          console.log(res);
          setListData([...res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getData();
    }, []);

  return <div>singlePost</div>;
};

export default SinglePost;