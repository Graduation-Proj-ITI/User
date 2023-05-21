import { CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function Team() {
  const names = [
    {
      id: 1,
      img: "../src/assets/Images/About/img.jpg",
      name: "Mohamed Yahia",
      role: "Fullstack developer",
    },
    {
      id: 2,
      img: "../src/assets/Images/About/Testimonials/test2.jpg",
      name: "Zeinab Mohamed",
      role: "Frontend developer",
    },
    {
      id: 3,
      img: "../src/assets/Images/About/Testimonials/test2.jpg",
      name: "Rahma Hanafy",
      role: "Frontend developer",
    },
    {
      id: 4,
      img: "../src/assets/Images/About/img.jpg",
      name: "Mohamed Naiem",
      role: "Frontend developer",
    },
    {
      id: 5,
      img: "../src/assets/Images/About/Testimonials/test2.jpg",
      name: "Mayar Mohamed",
      role: "Frontend developer",
    },
  ];

  return (
    <>
      <Typography
        component="div"
        variant="h2"
        sx={{
          fontSize: { xs: "24px", sm: "35px" },
          fontWeight: 650,
          display: "flex",
          justifyContent: "center",
          color: "#133A5E",
          margin: { xs: "40px 0", md: "80px 0 30px" },
        }}
      >
        Who we are
      </Typography>
      <Grid
        container
        sx={{ spacing: { xs: "10px", md: "20px" } }}
        justifyContent="center"
        margin="0 auto"
        maxWidth="900px"
      >
        {names.map((item) => (
          <Grid key={item.id} item xs={7} sm={5} md={4} marginBottom="40px">
            <CardMedia
              component="img"
              src={item.img}
              sx={{
                width: { xs: "150px", md: "180px" },
                height: { xs: "150px", md: "180px" },
                borderRadius: "50%",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 550,
                textAlign: "center",
                margin: "20px 0 5px",
              }}
            >
              {item.name}
            </Typography>
            <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
              {item.role}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Team;
