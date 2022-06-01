import React from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <Container maxWidth="lg" fixed>
        <Grid container spacing={2}>
          <Grid item xs={9}>{children}</Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}