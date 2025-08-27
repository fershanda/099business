// src/PaperPage.js
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const papers = [
  {
    title: "Contoh Surat Pembatalan Perjanjian",
    content:
      "Dalam Perjanjian seringkali terjadi masalah multi-tafsir dan mengakibatkan salah penafsiran dan membuat prestasi dalam perjanjian mengalami perubahan yang belum disepakati sebelumnya. Berikut adalah Surat Pembatalan Perjanjian jika terjadi multitafsir yang mengakibatkan salah penafsiran.",
    link: "/lawsuit/contohpembatalanperjanjian",
  },
  {
    title: "Contoh Surat Gugatan Perdata",
    content:
      "Contoh Surat Gugatan Perdata dalam hal Perbuatan Melawan Hukum yang telah ditetapkan di Pengadilan Negeri mengenai Pidana Pencurian dan meminta Ganti Rugi terhadap kerugian materiil dan immateriil.",
    link: "/lawsuit/contohperdata",
  },
  {
    title: "Contoh Surat Dakwaan Pidana",
    content:
      "Contoh Surat Dakwaan Pidana dalam kasus pencurian terhadap Perjanjian Suplai Pasir Besi",
    link: "/lawsuit/contohpidana",
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
