import React from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Container from '@mui/material/Container';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {children}
        </Container>
      <Footer />
    </>
  );
}