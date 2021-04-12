import React from "react";
import { Container, Card, Typography } from '@material-ui/core';
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
`



const Header = () => (
  <HeaderContainer>
    <Typography variant="h2">Realboyz Drink Club</Typography>
    <Typography variant="h4">Create, view and review drink recipes. Chug chug!</Typography>
  </HeaderContainer>
);

export default Header;