// src/paper/cabul.js
import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  CssBaseline,
  Divider,
  Grid,              // ✅ FIX: import Grid
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";   // ✅ import theme hook

function Cabul() {
  const theme = useTheme();                        // ✅ get theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />

      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Perbuatan Cabul dan Konsekuensi Hukumnya dalam Kesepakatan
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "justify" }}>
                <Typography paragraph>
                  Kekerasan seksual, khususnya perbuatan cabul yang dilakukan oleh pria terhadap
                  wanita, merupakan tindakan yang melanggar hak asasi manusia dan menimbulkan
                  dampak serius. Perbuatan cabul didefinisikan sebagai segala tindakan seksual yang
                  dilakukan tanpa persetujuan, seperti meraba, mencium, atau kontak fisik lainnya
                  yang bersifat seksual. Tindakan ini sering kali didasari oleh penyalahgunaan
                  kekuasaan dan dominasi. Perbuatan cabul bukanlah suatu bentuk pujian atau ajakan,
                  melainkan sebuah bentuk kejahatan yang merendahkan martabat dan mengintimidasi
                  korban.
                </Typography>

                <Typography paragraph>
                  Dampak dari perbuatan cabul sangat mendalam, baik secara fisik maupun
                  psikologis. Secara fisik, korban mungkin mengalami luka, trauma, atau penyakit
                  menular seksual. Dampak psikologisnya jauh lebih berat dan dapat berlangsung
                  lama, seperti kecemasan, depresi, post-traumatic stress disorder (PTSD), dan rasa
                  malu. Korban mungkin juga mengalami kesulitan dalam menjalin hubungan
                  interpersonal di masa depan. Penting untuk dipahami bahwa trauma yang dialami
                  korban bukanlah tanda kelemahan, melainkan respons alami terhadap tindakan
                  kekerasan yang tidak dapat diterima.
                </Typography>

                <Typography paragraph>
                  Penanganan dan pencegahan perbuatan cabul memerlukan peran aktif dari seluruh
                  elemen masyarakat. Masyarakat harus lebih peka dan berani melaporkan kasus yang
                  terjadi. Selain itu, penting untuk memberikan edukasi yang komprehensif mengenai
                  pentingnya persetujuan atau consent dalam setiap interaksi, serta membangun
                  lingkungan yang aman dan mendukung bagi para korban. Dengan demikian, kita dapat
                  bersama-sama menciptakan masyarakat yang menghargai dan melindungi hak serta
                  martabat setiap individu, tanpa memandang jenis kelamin.
                </Typography>
                <Typography paragraph>
                  Dalam Islam pada zaman Khulafaur Rashidin, terdapat dua kelas wanita yang dibedakan yaitu Wanita Merdeka dan Milku Yamin atau Kepunyaan Tangan Kanan. Meskipun tindakan cabul terhadap Wanita Merdeka tidak perlu ditafsirkan lagi, namun perlu penjelasan mengenai perbuatan cabul terhadap Milku Yamin. Milku Yamin berbeda dengan Wanita Merdeka yang hanya bisa melakukan perbuatan seksual dengan Suaminya, Milku Yamin dapat melakukan hubungan seksual dengan Suami dan Wali yang memiliki serta memberi makan mereka.
                </Typography>
                <Typography paragraph>
                    Pada paragraf ini ingin membahas Perbuatan Cabul terhadap Milku Yamin. Jika Milku Yamin terkena perbuatan seksual dengan selain suami dan wali mereka, maka hal ini merupakan perbuatan cabul. Mengenai Suami mereka adalah pria yang diberi persetujuan oleh wali mereka bahwa mereka dapat melakukan hubungan seksual. Wali dapat dengan hitungan detik untuk menceraikan Milku Yamin mereka dengan pria yang memiliki hubungan dengan Milku Yamin, dan membutuhkan Periode Menstruasi selanjutnya untuk berganti suami jika suami tersebut telah melakukan perbuatan seksual dengan Milku Yamin.
                </Typography>
                <Typography paragraph>
                    Jika saja Milku Yamin dipaksa dengan kekerasan untuk melakukan perbuatan seksual dengan seorang pria maka hal ini menyalahi peraturan pidana yang ada di Indonesia. Artinya Milku Yamin dapat menolak paksaan wali untuk melakukan hubungan seksual dengan pria yang dipaksa menjadi suaminya. Hal ini memenuhi unsur Pasal 289 KUHP.
                </Typography>
                <Typography paragraph>
                    Dalam Pasal 289 KUHP, diuraikan unsur delik. Barangsiapa adalah seorang. Memaksa Orang dengan Ancaman Kekerasan atau dengan Kekerasan, artinya seorang wanita atau pria menolak melakukan hubungan seksual dengan sukarela. Melakukan atau Membiarkan Lakukan, artinya melakukan perbuatan atau memberi perintah untuk melakukan perbuatan. Perbuatan Cabul artinya telah diuraikan pada paragraf satu sampai paragraf tiga.
                </Typography>
                <Typography paragraph>
                    Namun bagaimana jika wali atau Milku Yamin terikat perjanjian dengan pihak ketiga untuk menjadi suaminya atau melakukan hubungan seksual dengan Milku Yamin, hal ini diatur pada Pasal 1320 KUHPerdata bahwa syarat sah perjanjian harus mengenai Sebab Yang Halal. Sedangkan telah diuraikan bahwa perjanjian tersebut mengatur mengenai perbuatan pidana cabul yang dilarang oleh undang-undang. Hal ini mengakibatkan perjanjian tersebut Batal Demi Hukum.
                </Typography>
                <Typography paragraph>
                    Apa yang terjadi jika sebelumnya wali telah diberi sesuatu oleh pihak ketiga yang mengikatkan perjanjian, hal ini maka wali harus mengembalikan ulang dengan skala satu banding satu. Apabila Milku Yamin diberi sesuatu oleh pihak ketiga namun tidak mendapat persetujuan dari wali, maka kedua orang tersebut harus mengembalikan kembali sesuatu yang diberi oleh pihak ketiga dengan skala satu banding satu.
                </Typography>
                <Typography paragraph>
                    Dalam ranah hukum dan etika, perbuatan cabul yang didasari oleh tipu daya dan kesepakatan palsu merupakan bentuk kekerasan yang merusak. Pelaku sering kali menggunakan janji manis, bujuk rayu, atau bahkan ancaman terselubung untuk menciptakan kesan adanya "persetujuan" dari korban. Contoh klasik dari modus ini adalah janji akan dinikahi atau iming-iming lain yang menguntungkan. Korban, yang berada dalam posisi rentan atau memiliki ketergantungan emosional, bisa saja tidak menyadari bahwa persetujuan yang mereka berikan bukanlah persetujuan yang sah dan bebas, melainkan hasil dari manipulasi yang disengaja. Perbuatan ini tidak hanya melanggar privasi dan otonomi tubuh, tetapi juga merusak kepercayaan dan menimbulkan trauma psikologis yang mendalam bagi korban. 
                </Typography>
                <Typography paragraph>
                    Fenomena ini semakin marak, terutama dengan kemudahan akses pada media sosial. Pelaku dapat dengan mudah membangun identitas palsu atau mendekati korban dengan skema yang terencana. Kejahatan ini secara hukum dikategorikan sebagai tindakan pidana yang serius. Undang-Undang di Indonesia, seperti KUHP dan Undang-Undang Tindak Pidana Kekerasan Seksual (UU TPKS), secara jelas mengatur dan memberikan sanksi bagi pelaku yang melakukan perbuatan cabul dengan tipu muslihat atau serangkaian kebohongan. Hukuman yang dijatuhkan bagi pelaku dapat berupa pidana penjara yang berat dan denda yang signifikan, menunjukkan keseriusan negara dalam melindungi warganya dari tindakan keji ini. Penting bagi masyarakat untuk terus meningkatkan kesadaran akan bahaya modus-modus penipuan semacam ini dan mendorong korban untuk berani melaporkan, agar pelaku dapat ditindak tegas sesuai hukum yang berlaku. 
                </Typography>
              </Box>
            </Grid>
          </Grid> {/* ✅ FIX: close Grid container */}
        </Paper>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="caption">
            ©Credential Token {new Date().getFullYear()} - Informasi Hukum
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Cabul;
