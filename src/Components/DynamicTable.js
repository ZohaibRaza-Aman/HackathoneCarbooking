import "./Dynamictable.css";
import React, { useEffect, useState } from "react";
import UserData from "./DynamicTableUserData";
const API = "https://jsonplaceholder.typicode.com/users";


const DynamicTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser(API);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>COMPANY</th>
          </tr>
        </thead>
        <tbody>
            <UserData users={users}/>
        </tbody>
      </table>
    </>
  );
};

export default DynamicTable;
