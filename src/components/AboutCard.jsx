import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function AboutCard() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          component="div"
          variant="h2"
          sx={{
            fontSize: { xs: "24px", sm: "35px" },
            fontWeight: 650,
            display: "flex",
            justifyContent: "center",
            color: "#133A5E",
          }}
        >
          More About Us
        </Typography>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            height: { xs: 500, sm: 200, md: 300 },
            maxWidth: { xs: 250, sm: 595, md: 890 },
            borderRadius: "16px",
            boxShadow: " 4px 4px 20px rgba(185, 185, 185, 0.25)",
            margin: { xs: "30px 0 8px", md: "30px 0 50px" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: 250, md: 330 }, height: { xs: 260, sm: 300 } }}
            image="../src/assets/Images/About/team1.jpg"
            alt="Live from space album cover"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flex: "1 0 auto",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: { xs: "2px", md: "20px" },
              }}
            >
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: { xs: "20px", md: "22px" },
                  fontWeight: { xs: 550, md: 600 },
                }}
              >
                This is how it's began
              </Typography>
              <Typography
                variant="body"
                sx={{
                  lineHeight: { xs: "20px", sm: "26px", md: "30px" },
                  fontSize: { xs: "14px", sm: "20px" },
                  color: "#3C3C3D",
                  fontFamily: "Inter",
                  marginTop: { xs: "5px", sm: "18px", md: "20px" },
                }}
              >
                From the initial stages of brainstorming and ideation to the
                final implementation, our team works hand in hand, pooling our
                collective talents and perspectives. We foster an environment
                that encourages open communication, creative thinking, and
                mutual respect.
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            height: { xs: 560, sm: 300 },
            width: { xs: 250, sm: 595, md: 890 },
            borderRadius: "16px",
            boxShadow: " 4px 4px 20px rgba(185, 185, 185, 0.25)",
            margin: "30px 0 50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flex: "1 0 auto",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: { xs: "2px", md: "20px" },
              }}
            >
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: { xs: "20px", md: "22px" },
                  fontWeight: { xs: 550, md: 600 },
                }}
              >
                Attention to details
              </Typography>
              <Typography
                variant="body"
                sx={{
                  lineHeight: { xs: "20px", sm: "26px", md: "30px" },
                  fontSize: { xs: "14px", sm: "20px" },
                  color: "#3C3C3D",
                  fontFamily: "Inter",
                  marginTop: { xs: "5px", sm: "18px", md: "20px" },
                }}
              >
                We are dedicated to provide our customers with the highest
                quality furniture that meets their lifestyle. Our team's
                commitment to meticulous craftsmanship, attention to detail, and
                a deep understanding of materials ensures that every piece we
                create reflects our passion for excellence.
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: { xs: 250, md: 330 }, height: { xs: 260, sm: 300 } }}
            image="../src/assets/Images/About/about.PNG"
            alt="Live from space album cover"
          />
        </Card>
      </Box>
    </>
  );
}

export default AboutCard;
