// src/PaperPage.js
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const papers = [
  {
    title: "Perbuatan Cabul dan Konsekuensi Hukumnya dalam Kesepakatan",
    content:
      "Kekerasan seksual, khususnya perbuatan cabul yang dilakukan oleh pria terhadap wanita, merupakan tindakan yang melanggar hak asasi manusia dan menimbulkan dampak serius. Perbuatan cabul didefinisikan sebagai segala tindakan seksual yang dilakukan tanpa persetujuan, seperti meraba, mencium, atau kontak fisik lainnya yang bersifat seksual. Pelajari bagaimana hal ini berakibat terhadap perjanjian atau kesepakatan dan akibat hukumnya jika perbuatan cabul tetap dilakukan",
    link: "/paper/cabul",
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
