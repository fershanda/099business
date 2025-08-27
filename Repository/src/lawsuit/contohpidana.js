// src/paper/dakwaan.js
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

function Dakwaan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />

      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Surat Dakwaan Pidana
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "justify" }}>
                {/* Bagian A */}
                <Typography variant="h6" gutterBottom>A. Terdakwa</Typography>
                <Typography paragraph>Nama Lengkap: Orsatasona</Typography>
                <Typography paragraph>Tempat Lahir: Wekasobala</Typography>
                <Typography paragraph>Umur/Tgl. Lahir: 30 tahun / 24 Maret 1970</Typography>
                <Typography paragraph>Jenis Kelamin: Laki-laki</Typography>
                <Typography paragraph>Kebangsaan/Kewarganegaraan: Wekasobala</Typography>
                <Typography paragraph>Tempat Tinggal: Jalan Surtatasara no.14 Wekasobala</Typography>
                <Typography paragraph>Agama: Islam</Typography>
                <Typography paragraph>Pekerjaan: Pengusaha</Typography>
                <Typography paragraph>Pendidikan: Sarjana</Typography>

                <Divider sx={{ my: 2 }} />

                {/* Bagian B */}
                <Typography variant="h6" gutterBottom>B. Dakwaan</Typography>
                <Typography variant="subtitle1" gutterBottom>I. Uraian Kejadian Pidana</Typography>
                <Typography paragraph>
                  - Pada tanggal 2 Januari hingga 9 Desember tahun 2000, Orsatasona mengirim pasir
                  sesuai spesifikasi dan pembayaran lancar tidak ada masalah.
                </Typography>
                <Typography paragraph>
                  - Sejak tanggal 14 Januari 2001 Pasir Besi dikirim seperti biasa dan tidak ada
                  kecurigaan mengenai pengiriman Pasir Besi sesuai spesifikasi.
                </Typography>
                <Typography paragraph>
                  - Pada tanggal 9 Juni 2001 Ardonado kedatangan pegawai bidang standar mutu beton
                  dan memeriksa Pasir Besi yang ditimbun setelah diterima pengiriman oleh Terdakwa,
                  dan ternyata Pasir Besi hanya memiliki kadar Fe maksimum 70%.
                </Typography>
                <Typography paragraph>
                  - Pada tanggal 22 Juni 2001 Ardonado mulai mengambil sampel terhadap beton dan
                  dengan menggunakan penelitian secara ilmiah, ditemukan sekitar 5000 ton Pasir
                  Besi yang memiliki kadar Fe maksimum 70%.
                </Typography>

                <Typography variant="subtitle1" gutterBottom>II. Unsur Pidana</Typography>
                <Typography paragraph>
                  - <b>Barang Siapa:</b> pada kasus ini Terdakwa memiliki kontrak suplai Pasir Besi
                  dengan Ardonado berspesifikasi pada Kontrak yang ditandatangani di Blockchain
                  membenarkan Pasir Besi harus minimal memiliki kadar Fe minimal 90%.
                </Typography>
                <Typography paragraph>
                  - <b>Mengambil barang sesuatu, yang seluruhnya atau sebagian kepunyaan orang
                  lain:</b> Terdakwa telah menerima pembayaran dari Ardonado terhadap Pasir Besi
                  sejak hari pertama pengiriman hingga Surat Dakwaan ini dibuat. Dengan adanya
                  masalah bahwa Pasir Besi memiliki kadar Fe maksimal 70%, ini membuktikan
                  Terdakwa telah mengambil sebagian barang kepunyaan orang lain dengan Surat
                  Laboratorium membuktikan terdapat sejumlah 5000 ton pasir besi.
                </Typography>
                <Typography paragraph>
                  - <b>Dengan maksud untuk dimiliki secara melawan hukum:</b> Terdakwa telah
                  menerima uang pembayaran dari Ardonado terhadap 5000 ton pasir besi yang dikirim
                  Terdakwa. Disini Terdakwa memiliki maksud untuk mencuri atau memiliki uang
                  pembayaran dari Ardonado secara melawan hukum, karena tidak sesuai dengan
                  Perjanjian Suplai Pasir Besi yang telah disepakati oleh kedua pihak.
                </Typography>

                <Typography paragraph>
                  Perbuatan Terdakwa tersebut telah memenuhi Unsur Delik Pidana mengenai
                  Pencurian yang diatur pada Pasal 362 KUHP. Mengenai berapa tuntutan hukuman
                  pidana yang akan diderita, akan menyesuaikan dengan Jaksa Penuntut Umum.
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Bagian C */}
                <Typography variant="h6" gutterBottom>C. Alat Bukti</Typography>
                <Typography paragraph>1. Surat Perjanjian - Telah dilampirkan Surat Perjanjian Suplai Pasir Besi.</Typography>
                <Typography paragraph>2. Surat Laboratorium - Pada tanggal 22 Juni 2001 telah dikeluarkan Surat Laboratorium dari Badan Penyesuaian Mutu yang membuktikan bahwa Pasir Besi yang dikirim telah menyalahi spesifikasi pada Perjanjian Suplai Pasir Besi, berjumlah 5000 ton.</Typography>
                <Typography paragraph>3. Saksi Korban - Terdapat banyak pegawai dalam konstruksi bangunan yang telah membenarkan bahwa Ardonado telah menerima Pasir Besi dari Terdakwa secara rutin sejak Perjanjian ditandatangani hingga tanggal 22 Juni 2001. Keterangan Saksi telah dilampirkan.</Typography>
                <Typography paragraph>4. Saksi-Saksi Sopir Truck - Para Sopir Truck yang mengirim Pasir Besi telah membenarkan bahwa Pasir Besi yang diterima oleh Ardonado adalah dari Terdakwa untuk memenuhi Perjanjian Suplai Pasir Besi.</Typography>
                <Typography paragraph>5. Barang Bukti - Dilampirkan sejumlah beton dari konstruksi bangunan yang membenarkan mengandung Pasir Besi pengiriman oleh Terdakwa.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} - Contoh Surat Dakwaan Pidana
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Dakwaan;
