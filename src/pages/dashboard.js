import React, { useEffect } from "react";
import callApi from "../api";

const Dashboard = () => {
  useEffect(() => {
    callApi('http://localhost:8080/api/getAllUsers',{
      method: 'GET',
    })
      .then((value) => {
          console.log(value)
        }
      )
      .catch((err) => console.log(err))
  }, [])
  return(
    <h2>welcome 2 dashboard boi</h2>
    )
}

export default Dashboard;