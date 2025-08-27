// src/paper/Gugatan.js
import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  CssBaseline,
  Divider,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function formatIDR(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
}

function Gugatan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const penggugat = {
    nama: "Ardonado",
    kewarganegaraan: "Jatbatiko",
    alamat: "Dricto Street 15 Jatbatiko",
    pekerjaan: "Wirausaha",
    agama: "Islam",
    domisili: "kantor kuasa di atas",
  };

  const tergugat = {
    nama: "Orsatasona",
    kewarganegaraan: "Wekasobala",
    alamat: "Metrapata Street 45 Wekasobala",
    pekerjaan: "Wirausaha",
    agama: "Islam",
  };

  const nilaiKontrak = 400_000_000_000; // 400 milyar
  const biayaPR = 20_000_000_000; // 20 milyar
  const totalKerugian = nilaiKontrak + biayaPR;

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            Surat Gugatan Perbuatan Melawan Hukum dan Ganti Rugi
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Penggugat
                </Typography>
                <Typography paragraph>
                  Nama: {penggugat.nama}
                  <br />
                  Kewarganegaraan: {penggugat.kewarganegaraan}
                  <br />
                  Alamat: {penggugat.alamat}
                  <br />
                  Pekerjaan: {penggugat.pekerjaan}
                  <br />
                  Agama: {penggugat.agama}
                  <br />
                  Domisili hukum: {penggugat.domisili}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Tergugat
                </Typography>
                <Typography paragraph>
                  Nama: {tergugat.nama}
                  <br />
                  Kewarganegaraan: {tergugat.kewarganegaraan}
                  <br />
                  Alamat: {tergugat.alamat}
                  <br />
                  Pekerjaan: {tergugat.pekerjaan}
                  <br />
                  Agama: {tergugat.agama}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Dasar Gugatan
              </Typography>
              <Box sx={{ textAlign: "justify" }}>
                <Typography paragraph>
                  Bahwa berdasarkan Putusan Pengadilan Negeri Jatbaiko, telah
                  dinyatakan bahwa {tergugat.nama} telah melakukan Tindak Pidana
                  Pencurian terhadap pasir besi yang dikirim kepada {penggugat.nama}.
                  Atas dasar tersebut, Penggugat mengajukan gugatan Perbuatan Melawan
                  Hukum dan tuntutan ganti rugi terhadap Tergugat.
                </Typography>

                <Typography paragraph>
                  Kerugian material: {penggugat.nama} memiliki Kontrak Kerja dalam
                  pembangunan bangunan Lantai 69 dengan nilai kontrak sebesar{" "}
                  {formatIDR(nilaiKontrak)}. Selain itu timbul kerugian immateriil
                  berkaitan dengan reputasi perusahaan sehingga diperlukan aktivitas
                  Public Relation and Communication yang diperkirakan sebesar{" "}
                  {formatIDR(biayaPR)}. Dengan demikian total kerugian yang ditaksir
                  sebesar {formatIDR(totalKerugian)}.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Tuntutan / Petitum
              </Typography>

              <Typography paragraph sx={{ fontWeight: 600 }}>
                Primair:
              </Typography>
              <Box component="ol" sx={{ pl: 3 }}>
                <li>
                  <Typography paragraph>
                    Menerima dan mengabulkan gugatan Penggugat untuk seluruhnya.
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Menyatakan secara sah dan berharga sita jaminan terhadap barang
                    milik Tergugat baik barang tetap maupun barang bergerak yang sejenis.
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Menghukum Tergugat untuk membayar kerugian materiil sejumlah{" "}
                    {formatIDR(nilaiKontrak)} dan kerugian immaterial sejumlah{" "}
                    {formatIDR(biayaPR)} secara tunai dan sekaligus sejak keputusan
                    perkara ini mempunyai kekuatan hukum tetap sampai Tergugat
                    melaksanakan putusan ini.
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Menjatuhkan putusan ini dapat dilaksanakan terlebih dahulu
                    meskipun ada upaya banding, kasasi maupun verzet pihak ketiga
                    (uitvoerbaar bij voorraad).
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                    Menghukum Tergugat untuk membayar biaya perkara yang timbul
                    dalam perkara ini.
                  </Typography>
                </li>
              </Box>

              <Typography paragraph sx={{ fontWeight: 600, mt: 1 }}>
                Subsidair:
              </Typography>
              <Typography paragraph>
                Apabila Pengadilan Negeri Tangerang berpendapat lain, mohon dapat
                memberikan putusan yang seadil-adilnya (ex aequo et bono).
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Jatbatiko, {new Date().toLocaleDateString("id-ID")}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  PENGGUGAT,
                </Typography>
                <Typography variant="body2" sx={{ mt: 6 }}>
                  ({penggugat.nama})
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="caption">
            ©{new Date().getFullYear()} - Surat Gugatan Perdata
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Gugatan;
