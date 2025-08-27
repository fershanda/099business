// src/paper/pembatalan.js
import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  CssBaseline,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Pembatalan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />

      <Container
        maxWidth="md"
        sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}
      >
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Surat Pembatalan Perjanjian
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "justify" }}>
                <Typography paragraph>
                  <strong>Nama:</strong> Ardonado <br />
                  <strong>Kewarganegaraan:</strong> Jatbatiko <br />
                  <strong>Alamat:</strong> Dricto Street 15 Jatbatiko <br />
                  <strong>Pekerjaan:</strong> Wirausaha <br />
                  <strong>Agama:</strong> Islam
                </Typography>

                <Typography paragraph>
                  Dalam hal ini memilih tempat kediaman hukum (domisili) di
                  kantor kuasanya di atas, yang selanjutnya disebut sebagai{" "}
                  <strong>PENGGUGAT</strong>. Dengan ini penggugat hendak
                  mengajukan gugatan terhadap:
                </Typography>

                <Typography paragraph>
                  <strong>Nama:</strong> Orsatasona <br />
                  <strong>Kewarganegaraan:</strong> Wekasobala <br />
                  <strong>Alamat:</strong> Metrapata Street 45 Wekasobala <br />
                  <strong>Pekerjaan:</strong> Wirausaha <br />
                  <strong>Agama:</strong> Islam
                </Typography>

                <Typography paragraph>
                  Yang selanjutnya disebut sebagai{" "}
                  <strong>TERGUGAT</strong>.
                </Typography>

                <Typography paragraph>
                  Kedua Belah Pihak telah menyetujui dalam Perjanjian Suplai
                  Pasir Besi dalam Smart Contract yang dilampirkan.
                </Typography>

                <Typography paragraph>
                  5 hari setelah Perjanjian ditandatangani, Tergugat menyatakan
                  bahwa Perjanjian Suplai Pasir Besi tidak serta merta jual beli
                  pasir besi namun ditafsirkan bahwa Tergugat bakal mensuplai
                  penduduk Somalia di rumah Penggugat untuk dipekerjakan karena
                  Pasir Besi disalah tafsirkan merupakan Penduduk Somalia.
                </Typography>

                <Typography paragraph>
                  Dalam hal ini, Penggugat mengajukan permintaan bahwa
                  Perjanjian <strong>Dapat Dibatalkan</strong> karena menurut
                  Pasal 1320 KUHPerdata syarat sah perjanjian harus meliputi
                  adanya Kesepakatan yang disepakati untuk memberi dan berbuat
                  sesuatu, dalam hal ini Penduduk Somalia tidak merupakan Suatu
                  Pokok Persoalan Tertentu yang disepakati oleh Penggugat dan
                  Tergugat pada saat Smart Contract ditandatangani. Penggugat
                  hanya setuju melakukan perbuatan hukum untuk melakukan dan
                  memberikan prestasi dengan Tergugat dalam perjanjian untuk
                  membeli Pasir Besi dengan kadar Fe minimum 90% yang merupakan
                  material bangunan, bukan disalah tafsirkan sebagai manusia
                  besi yang berasal dari Somalia. Dalam hal ini perjanjian{" "}
                  <strong>Dapat Dibatalkan</strong>.
                </Typography>

                <Typography paragraph>
                  Namun jika Tergugat bersedia dan sanggup untuk mensuplai Pasir
                  Besi dengan Kadar Fe minimum 90% maka aktivitas dapat
                  dilakukan, namun jika perjanjian ini disalah tafsirkan maka
                  perjanjian <strong>Dapat Dibatalkan</strong>.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="caption">
            ©{new Date().getFullYear()} - Surat Pembatalan Perjanjian
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Pembatalan;
