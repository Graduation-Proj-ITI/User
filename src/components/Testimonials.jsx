import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = [
  {
    description:
      "Finding furniture that aligns with my sustainability values was a priority for me, and this website exceeded my expectations. I was able to find beautifully designed pieces that are made with sustainable materials.",
    img: "../src/assets/Images/About/Testimonials/test.jpg",
    name: "Jenny Wilson",
    role: "Graphic Designer",
  },
  {
    description:
      "I was impressed by the attention to detail and the exquisite craftsmanship of the furniture I purchased from this website. The pieces I received were even more beautiful in person than in the pictures.",
    img: "../src/assets/Images/About/Testimonials/test2.jpg",
    name: "Leslie Alexander",
    role: "Frontend Developer",
  },
  {
    description: `I couldn't be happier with my experience shopping at this furniture website. The selection of furniture is amazing, and the quality is top-notch. The customer service team was incredibly helpful.`,
    img: "../src/assets/Images/About/Testimonials/test3.jpg",
    name: "Wade Warren",
    role: "Backend Developer",
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
          margin: { xs: "20px 0 30px", md: "80px 0 30px" },
        }}
      >
        Testimonials
      </Typography>
      <Box
        sx={{
          height: { xs: "520px", sm: "510px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F3F3F3",
          width: "100%",
        }}
      >
        <FormatQuoteRoundedIcon
          sx={{
            fontSize: { xs: "45px", md: "60px" },
            color: "#FF9934",
            marginTop: "20px",
          }}
        />
        <Box
          sx={{
            maxWidth: 500,
            p: 2,
            textAlign: "center",
            lineHeight: { xs: "24px", sm: "30px", md: "25px" },
            fontSize: { sm: "28px", md: "18px" },
          }}
        >
          {steps[activeStep].description}
        </Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            src={steps[activeStep].img}
            sx={{
              width: "95px",
              height: "95px",
              borderRadius: "50%",
              marginTop: "15px",
              backgroundColor: "transparent",
            }}
          />
        </Paper>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: 600,
            margin: "10px 0 5px",
          }}
        >
          {steps[activeStep].name}
        </Typography>
        <Typography
          variant="body"
          sx={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 300,
            marginBottom: "40px",
          }}
        >
          {steps[activeStep].role}
        </Typography>

        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            backgroundColor: "transparent",
            gap: "40px",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              disableRipple
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              {activeStep && activeStep === maxSteps - 1 ? (
                <ArrowForwardIosIcon
                  sx={{
                    color: "#133A5E",
                    fontSize: { xs: "20px", sm: "25px" },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                />
              ) : (
                <ArrowForwardIosIcon
                  sx={{
                    color: "#FF9934",
                    fontSize: { xs: "20px", sm: "25px" },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              disableRipple
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              {activeStep !== 0 ? (
                <ArrowBackIosIcon
                  sx={{
                    color: "#FF9934",
                    fontSize: { xs: "20px", sm: "25px" },
                  }}
                />
              ) : (
                <ArrowBackIosIcon
                  sx={{
                    color: "#133A5E",
                    fontSize: { xs: "20px", sm: "25px" },
                  }}
                />
              )}
            </Button>
          }
        />
      </Box>
    </>
  );
}
