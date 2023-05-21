import { Box, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function AboutCover() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          src="../src/assets/Images/About/cover.png"
          sx={{ opacity: "0.8" }}
        />

        <Box
          role="presentation"
          onClick={handleClick}
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: { xs: "20px", md: "35px" },
              fontWeight: { xs: 550, md: 700 },
            }}
          >
            About Us
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: { xs: "10px", md: "20px" },
                "&:hover": {
                  color: "white",
                  cursor: "pointer",
                },
              }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                fontSize: { xs: "10px", md: "20px" },
                "&:hover": {
                  color: "white",
                  cursor: "pointer",
                },
              }}
              color="inherit"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              About Us
            </Link>
          </Breadcrumbs>
        </Box>
      </Box>
    </>
  );
}

export default AboutCover;
