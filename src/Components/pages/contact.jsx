import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  TextField,
  Button,
  Card,
  Grid,
  Box,
  Container,
  Breadcrumbs,
  Typography,
  Link,
  Stack,
  CardContent,
  CardMedia,
} from "@mui/material";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const handleSubmit = (e) => {
  e.preventDefault();
  // Add your form submission logic here
};

const Contact = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#000" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography
      key="2"
      color="#fff
    "
    >
      Contact Us
    </Typography>,
  ];

  const cards = [
    {
      icon: "phone.svg",
      desc: "01234567890",
    },
    {
      icon: "email.svg",
      desc: "Example@gmail.com",
    },
    {
      icon: "location.svg",
      desc: "Ismailia, ITI",
    },
  ];

  return (
    <div>
      <Box marginBottom={10}>
        <header
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            left: "0px",
            top: "0px",
            background: `url("contact.png"), #D9D9D9`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: 0, marginBottom: 10 }}>Contact Us</h1>

            <Stack>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                color="#000"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Container>

          {/* overlay */}
          <div
            className="overlay"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
              background: "rgba(117, 117, 117, 0.39)",
              zIndex: "1",
            }}
          ></div>
        </header>
      </Box>

      {/* cards contact */}

      <Box>
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: "2",
            color: "#fff",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <Grid
            container
            spacing={{ xs: "44", md: "80" }}
            justifyContent="center"
          >
            {cards.map((card, ind) => (
              <Grid item xs={7} md={4} key={ind}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "50px",
                    color: "#fff",
                    textAlign: "center",
                    width: "100%",
                    minHeight: "140px",
                    overflow: "visible",
                    boxShadow: "0px 0px 20px rgba(185, 185, 185, 0.25)",
                    borderRadius: "16px",
                  }}
                >
                  <CardContent sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        background: "#eee",
                        width: "32px",
                        padding: "10px",
                        borderRadius: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        top: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="auto"
                        image={`icons/${card.icon}`}
                        alt="green iguana"
                        sx={{ maxWidth: "100%", width: "30px" }}
                      />
                    </Box>
                    <Typography
                      variant="heading"
                      component="div"
                      textAlign={"center"}
                      color={"#133A5E"}
                      sx={{ fontWeight: "bold", mt: -2, mb: 2 }}
                    >
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* form */}
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: "2",
            color: "#fff",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <Grid container spacing={{ xs: "5", md: "60" }}>
            <Grid item xs={9} sx={{ m: "auto" }} md={5}>
              <img src="Vector.png" style={{ maxWidth: "100%" }} />
            </Grid>
            <Grid item xs={12} md={7} style={{ alignSelf: "center" }}>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    borderColor="#F3F3F3"
                    backgroundColor="#F3F3F3"
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    borderColor="#F3F3F3"
                    backgroundColor="#F3F3F3"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "30px",
                  }}
                >
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="email"
                    backgroundColor="#F3F3F3"
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="phone"
                    backgroundColor="#F3F3F3"
                  />
                </div>

                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  backgroundColor="#F3F3F3"
                />
                <Box textAlign="center" mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: "#133A5E", padding: "7px" }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
