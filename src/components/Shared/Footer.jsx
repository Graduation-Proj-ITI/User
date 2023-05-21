import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Box, CardMedia, Divider, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F3F3F3",
          height: { xs: "1000px", sm: "630px", md: "400px" },
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            justifyContent: { xs: "center", sm: "space-evenly" },
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: { sm: "400px", md: "100%" },
            margin: { sm: "0 auto", md: "none" },
            gap: { sm: "60px", md: "0" },
          }}
        >
          <Box sx={{ maxWidth: "240px", marginTop: "60px" }}>
            <CardMedia
              component="img"
              src="../src/assets/Images/Logo/Logo.png"
              sx={{ maxWidth: "120px", height: "30px", marginBottom: "20px" }}
            />
            <Typography variant="body" sx={{ fontSize: { xs: "15px" } }}>
              Lorem Ipsum is simply dummy text of the site. Lorem Ipsum is
              simply dummy text of the site
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                margin: "30px 0 40px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <RoomIcon sx={{ color: "#FF9934", fontSize: { xs: "20px" } }} />
                <Typography sx={{ fontSize: { xs: "15px" } }}>
                  Ismailia
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <CallIcon sx={{ color: "#FF9934", fontSize: { xs: "20px" } }} />
                <Typography sx={{ fontSize: { xs: "15px" } }}>
                  01234567890
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <EmailIcon
                  sx={{ color: "#FF9934", fontSize: { xs: "20px" } }}
                />
                <Typography sx={{ fontSize: { xs: "15px" } }}>
                  example@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: { xs: "20px", sm: "60px" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                marginBottom: "10px",
                color: "#133A5E",
              }}
            >
              Company
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              About
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              All Products
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              Login
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              Community
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                marginBottom: "20px",
                marginTop: { xs: "60px", sm: "0", md: "60px" },
                color: "#133A5E",
              }}
            >
              Catgories
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "60px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Sofas
                </Typography>
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Lamps
                </Typography>
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Chiars
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Tables
                </Typography>
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Doors
                </Typography>
                <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
                  Drawers
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: { xs: "60px", sm: "0", md: "60px" },
              marginLeft: { sm: "35px", md: "0" },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 550,
                fontSize: "20px",
                marginBottom: "10px",
                color: "#133A5E",
              }}
            >
              Customer Care
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              Contact us
            </Typography>
            <Typography sx={{ color: "#5F6D7E", cursor: "pointer" }}>
              Live Chat
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Divider
            variant="medium"
            sx={{
              border: "1px solid #FF9934",
              marginTop: { xs: "40px", md: "10px" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: { sm: "200px", md: "300px" },
              marginTop: "20px",
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", color: "#5F6D7E" }}
            >
              <CopyrightRoundedIcon sx={{ fontSize: { xs: "18px" } }} />
              <Typography sx={{ marginLeft: "10px", fontSize: "16px" }}>
                2023, All Rights are Reserved
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "15px" }}>
              <FacebookRoundedIcon
                sx={{ color: "#2623B1", fontSize: "28px" }}
              />
              <TwitterIcon sx={{ color: "#4DABC9", fontSize: "28px" }} />
              <InstagramIcon sx={{ color: "red", fontSize: "28px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
