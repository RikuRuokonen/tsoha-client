import React, { useState, useEffect } from "react";
import callApi from "../api";
import Header from "../components/header";
import { Container, Card, Typography } from '@material-ui/core';


const Dashboard = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    callApi('http://localhost:8080/api/drinks',{
      method: 'GET',
    })
      .then((value) => {
          console.log(value)
          setDrinks(value)
        }
      )
      .catch((err) => console.log(err))
  }, [])
  return(
    <>
    <Header />
      <Container mt="1rem">
        <Typography variant="h4">Drinks? Drinks!</Typography>
        {drinks && drinks.length > 0 && drinks.map((drink) => 
          <Card p={4}>
            <Typography variant="h6">
              {drink.name}
            </Typography>
            <Typography>
              {drink.recipe}
            </Typography>
          </Card>
        )}
        {drinks && drinks.length === 0 && (
          <Typography variant="h6">
            No drinks. Create one?
          </Typography>
        )}
      </Container>
      </>
    )
}

export default Dashboard;