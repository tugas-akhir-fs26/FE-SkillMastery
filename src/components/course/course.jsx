// @ts-nocheck
import React, { useEffect, useState } from "react";
import styles from "./course.module.css";
import CourseCard from "../homepage/card";
import Pagination from "@mui/material/Pagination";
import { Box, Button, Typography, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import Testimonials from "./testimonial";
import axios from "axios";

function DaftarCourse() {
  const testimonialsData = [
    {
      name: "Muhammad Haikal Syahfarel",
      role: "Pekerja",
      imageSrc:
        "https://i.pinimg.com/564x/7d/c3/0b/7dc30bfe7d1ca4234aaf4ab8d45666e9.jpg",
      content:
        "Kelas website ini sungguh luar biasa! Materi yang disampaikan sangat jelas dan mudah dipahami. Saya benar-benar merasa meningkatkan keterampilan saya dalam membuat dan mengelola website. Terima kasih!",
      rating: 5,
    },
    {
      name: "Dionisius Reinaldo",
      role: "Mentor",
      imageSrc:
        "https://i.pinimg.com/564x/67/db/7e/67db7ec2aacb7a7730589d21d0d03d52.jpg",
      content: `Saya sangat puas dengan kelas website ini. Instrukturnya sangat
      kompeten dan responsif terhadap pertanyaan. Materi yang
      diberikan sangat relevan dan praktis. Sangat direkomendasikan!`,
      rating: 5,
    },
    {
      name: "Anri Daniata Purba",
      role: "Mahasiswa",
      imageSrc:
        "https://i.pinimg.com/564x/4b/0f/d9/4b0fd9c4f7fa6557d4681f150ade1e47.jpg",
      content: `Kelas ini sungguh luar biasa! Materi yang diajarkan sangat
      relevan dan guru memberikan penjelasan dengan sangat jelas. Saya
      merasa lebih percaya diri dalam memahami konsep-konsep yang
      sebelumnya sulit.`,
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Handler untuk mengubah nilai pencarian saat input berubah
  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://skillmastery.adaptable.app/courses/course?search=${searchKeyword}&page=${currentPage}`
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
        setIsLoading(false);
        setOpen(false);
        setTotalPage(response.data.totalPage);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [currentPage, searchKeyword]);

  return (
    <Box sx={{ p: 5 }}>
      {/* Search */}
      <Box className={styles.container} sx={{ p: 3 }}>
        <h1>
          Temukan wawasan baru di
          <b>
            Skill<span className={styles.mastery}>Mastery</span>
          </b>
        </h1>
        <Typography
          sx={{ textAlign: "left", fontSize: "18px", marginBottom: "16px" }}
        >
          Temukan Wawasan Baru: Pilih kursus yang sesuai dengan minat dan ambisi
          Anda
        </Typography>
        <form className={`d-flex ${styles.searchForm}`}>
          <TextField
            id="outlined-basic"
            label="Cari Kelas"
            variant="outlined"
            value={searchKeyword}
            onChange={handleSearchChange}
            // className={`${Styles.search}`}
            sx={{ width: "60vw", marginRight: "16px" }}
            size="small"
          />
          <Button
            variant="contained"
            sx={{
              px: 4,
              textTransform: "capitalize",
              fontWeight: 400,
              fontSize: "18px",
              marginTop: { xs: "12px", md: "0" },
            }}
          >
            Cari
          </Button>
        </form>
      </Box>

      {/* Course List */}
      <div className={styles.container}>
        <Box
          className={`${styles.courseList}`}
          sx={{ p: 3, marginBottom: "32px", height : "100%" }}
        >
          <Grid container spacing={0}>
            {data &&
              data.map((course) => (
                <Grid xs={12} md={3}>
                  <CourseCard
                    key={
                      // @ts-ignore
                      course.id
                    }
                    course={course}
                  />
                </Grid>
              ))}
          </Grid>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}
          >
            <Pagination
              count={totalPage}
              page={currentPage}
              shape="rounded"
              onChange={handlePageChange}
              sx={{ margin: "auto", textAlign: "center" }}
            />
          </Box>
        </Box>
      </div>

      {/* Testimonials */}
      <Box
        className={`${styles.container} ${styles.faq}`}
        sx={{ marginTop: "32px", height : "100vh" }}
      >
        <center>
          <h1>FAQ</h1>
          <p>Apa kata mereka tentang SkillMastery?</p>
        </center>
        <Box
          className={` ${styles.testimonials}`}
          sx={{
            display: "flex",
            marginTop: "32px",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "64px",
            width: "100%",
          }}
        >
          {/* Kalau mau ganti card, ganti dari bawah ini sampe div class card */}
          <Grid container>
            {testimonialsData.map((testi) => (
              <Grid xs={12} md={4}>
                <Testimonials
                  imageSrc={testi.imageSrc}
                  name={testi.name}
                  content={testi.content}
                  rating={testi.rating}
                  role={testi.role}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default DaftarCourse;
