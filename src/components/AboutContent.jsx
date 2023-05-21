import { Typography, Box, CardMedia } from "@mui/material";

function AboutContent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "center" },
          gap: { xs: "40px", sm: "120px", md: "200px", lg: "240px" },
          margin: "0 auto",
          marginTop: { xs: "40px", sm: "60px" },
          marginBottom: "80px",
          alignItems: "center",
          // width: "900px",
        }}
      >
        <Box sx={{ width: { xs: "220px", md: "320px" } }}>
          <Typography
            variant="h6"
            sx={{
              color: "#133A5E",
              fontWeight: 550,
              fontSize: { xs: "22px", md: "24px" },
              marginBottom: "20px",
            }}
          >
            We pick our team
          </Typography>
          <Typography
            variant="body"
            sx={{
              lineHeight: { xs: "20px", md: "30px" },
              fontSize: { xs: "15px", md: "18px" },
            }}
          >
            Our team is passionate about furniture, and we collaborate
            effectively to achieve your goals and deliver high-quality work.
            We're trying to go above and beyond to meet your expectations and
            deliver exceptional results to make your dream home true.
          </Typography>
        </Box>
        <Box>
          <CardMedia
            component="img"
            sx={{ height: { xs: "200px", sm: "200px", md: "310px" } }}
            image="../src/assets/Images/About/Vector.png"
            alt="Live from space album cover"
          />
        </Box>
      </Box>
    </>
  );
}

export default AboutContent;
