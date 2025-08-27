// src/PaperPage.js
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const papers = [
  {
    title: "Contoh Perjanjian Suplai Pasir Besi",
    content:
      "Ini merupakan Contoh Perjanjian Suplai Pasir Besi yang diterbitkan di Smart Contract dan tersimpan di Teknologi Blockchain dan tidak dapat berubah serta tercatat abadi. Selain itu perjanjian ini ditandatangani oleh kedua belah pihak dengan identitas online mereka di Wallet Address",
    link: "/smartcontract/contohperjanjian",
  },
];

function PaperPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {papers.map((paper, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 3,
            mb: 3,
            boxShadow: 2,
            backgroundColor: "#fafafa",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            {paper.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {paper.content}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={paper.link}
            sx={{
              mt: 2,
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#333", // slightly lighter on hover
              },
            }}
          >
            Read More
          </Button>
        </Box>
      ))}
    </Container>
  );
}

export default PaperPage;
