// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import { useState, useEffect } from "react";
// import {
//   TextField,
//   Button,
//   Card,
//   Grid,
//   Box,
//   Container,
//   Breadcrumbs,
//   Typography,
//   Link,
//   Stack,
//   CardContent,
//   CardMedia,
// } from "@mui/material";

// import "../../contact.css";

// const Contact = () => {
//   const handleClick = (event) => {
//     // handle the logic for clicking the link
//     event.preventDefault();
//   };
//   const breadcrumbs = [
//     <Link underline="hover" key="1" color="#000" href="/" onClick={handleClick}>
//       Home
//     </Link>,
//     <Typography
//       key="2"
//       color="#fff
//     "
//     >
//       Contact Us
//     </Typography>,
//   ];
//   const cards = [
//     {
//       icon: "phone.svg",
//       desc: "01234567890",
//     },
//     {
//       icon: "email.svg",
//       desc: "Example@gmail.com",
//     },
//     {
//       icon: "location.svg",
//       desc: "Ismailia, ITI",
//     },
//   ];

//   const [formState, setFormState] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     fName: "",
//     lName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (event) => {
//     setFormState({
//       ...formState,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const isValidEmail = (email) => {
//     // Email validation logic (regex or other validation methods)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isValidPhone = (phone) => {
//     // Phone number validation logic (regex or other validation methods)
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
//   };

//   const validateForm = () => {
//     // Reset form errors
//     setFormErrors({
//       fName: "",
//       lName: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     let isValid = true;

//     // Set corresponding error messages if validation fails
//     if (formState.fName.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         fName: "first Name is required",
//       }));
//       isValid = false;
//     } else if (/\d/.test(formState.fName)) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         fName: "first Name cannot contain numbers",
//       }));
//       isValid = false;
//     }

//     if (formState.lName.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         lName: "last Name is required",
//       }));
//       isValid = false;
//     } else if (/\d/.test(formState.lName)) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         lName: "last Name cannot contain numbers",
//       }));
//       isValid = false;
//     }

//     if (formState.email.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "Email is required",
//       }));
//       isValid = false;
//     } else if (!isValidEmail(formState.email.trim())) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "Invalid email address",
//       }));
//       isValid = false;
//     }

//     if (formState.phone.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "Phone is required",
//       }));
//       isValid = false;
//     } else if (!isValidPhone(formState.phone.trim())) {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "Invalid phone number",
//       }));
//       isValid = false;
//     }

//     if (formState.message.trim() === "") {
//       setFormErrors((prevErrors) => ({
//         ...prevErrors,
//         message: "message is required",
//       }));
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       submitForm();
//     }
//   };
//   const submitForm = (e) => {
//     e.preventDefault();
//   };

//   const getInputColor = (fieldName) => {
//     return formState[fieldName] != "" && formErrors[fieldName] == ""
//       ? "success"
//       : "";
//   };

//   const colorAstrisk = () => {
//     const labels = document.querySelectorAll("label");
//     Array.from(labels).forEach((label) => {
//       console.log(label.parentElement.classList.contains("success"));
//       if (!label.parentElement.classList.contains("success")) {
//         label.innerHTML = label.innerHTML.replace(
//           "*",
//           "<span style='color:red'>*</span>"
//         );
//       } else {
//         label.innerHTML = label.innerHTML.replace(
//           "*",
//           "<span style='color:green'>*</span>"
//         );
//       }
//     });
//   };

//   useEffect(() => {
//     colorAstrisk();
//   }, [handleChange]);

//   //rememebr to fix success color in inputs when handle change
//   return (
//     <div>
//       <Box marginBottom={10}>
//         <header
//           style={{
//             position: "relative",
//             width: "100%",
//             height: "400px",
//             left: "0px",
//             top: "0px",
//             background: `url("contact/contact.png"), #D9D9D9`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center center",
//           }}
//         >
//           <Container
//             maxWidth="lg"
//             sx={{
//               position: "relative",
//               zIndex: "2",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               height: "100%",
//               flexDirection: "column",
//               color: "#fff",
//               textAlign: "center",
//             }}
//           >
//             <h1 style={{ margin: 0, marginBottom: 10 }}>Contact Us</h1>

//             <Stack>
//               <Breadcrumbs
//                 separator={<NavigateNextIcon fontSize="small" />}
//                 aria-label="breadcrumb"
//                 color="#000"
//               >
//                 {breadcrumbs}
//               </Breadcrumbs>
//             </Stack>
//           </Container>

//           {/* overlay */}
//           <div
//             className="overlay"
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               left: "0px",
//               top: "0px",
//               background: "rgba(117, 117, 117, 0.39)",
//               zIndex: "1",
//             }}
//           ></div>
//         </header>
//       </Box>

//       {/* cards contact */}

//       <Box>
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: "relative",
//             zIndex: "2",
//             color: "#fff",
//             textAlign: "center",
//             marginBottom: "80px",
//           }}
//         >
//           <Grid
//             container
//             spacing={{ xs: "44", md: "80" }}
//             justifyContent="center"
//           >
//             {cards.map((card, ind) => (
//               <Grid item xs={7} md={4} key={ind}>
//                 <Card
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     gap: "50px",
//                     color: "#fff",
//                     textAlign: "center",
//                     width: "100%",
//                     minHeight: "140px",
//                     overflow: "visible",
//                     boxShadow: "0px 0px 20px rgba(185, 185, 185, 0.25)",
//                     borderRadius: "16px",
//                   }}
//                 >
//                   <CardContent sx={{ width: "100%" }}>
//                     <Box
//                       sx={{
//                         background: "#eee",
//                         width: "50px",
//                         padding: "10px",
//                         borderRadius: "100%",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         position: "relative",
//                         top: "-50px",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                       }}
//                     >
//                       <CardMedia
//                         component="img"
//                         height="auto"
//                         image={`icons/${card.icon}`}
//                         alt="green iguana"
//                         sx={{ maxWidth: "100%", width: "100%" }}
//                       />
//                     </Box>
//                     <Typography
//                       variant="heading"
//                       component="div"
//                       textAlign={"center"}
//                       color={"#133A5E"}
//                       sx={{ fontWeight: "bold", mt: -2, mb: 2 }}
//                     >
//                       {card.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* form */}
//       <Box>
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: "relative",
//             zIndex: "2",
//             color: "#fff",
//             textAlign: "center",
//             marginBottom: "40px",
//           }}
//         >
//           <Grid container spacing={{ xs: "5", md: "60" }}>
//             <Grid item xs={9} sx={{ m: "auto" }} md={5}>
//               <img src="/contact/Vector.png" style={{ maxWidth: "100%" }} />
//             </Grid>
//             <Grid item xs={12} md={7} style={{ alignSelf: "center" }}>
//               <form onSubmit={handleSubmit}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     gap: "30px",
//                   }}
//                 >
//                   <TextField
//                     label="First Name*"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     name="fName"
//                     value={formState.fName}
//                     onChange={handleChange}
//                     error={formErrors.fName !== ""}
//                     helperText={formErrors.fName}
//                     className={getInputColor("fName")}
//                   />
//                   <TextField
//                     label="Last Name*"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     name="lName"
//                     value={formState.lName}
//                     onChange={handleChange}
//                     error={formErrors.lName !== ""}
//                     helperText={formErrors.lName}
//                     className={getInputColor("lName")}
//                   />
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     flexDirection: { xs: "column", sm: "column", md: "row" },
//                     gap: { xs: "5px", md: "30px" },
//                   }}
//                 >
//                   <TextField
//                     label="Email*"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     type="email"
//                     name="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     error={formErrors.email !== ""}
//                     helperText={formErrors.email}
//                     className={getInputColor("email")}
//                   />
//                   <TextField
//                     label="Phone*"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     type="phone"
//                     name="phone"
//                     value={formState.phone}
//                     onChange={handleChange}
//                     error={formErrors.phone !== ""}
//                     helperText={formErrors.phone}
//                     className={getInputColor("phone")}
//                   />
//                 </Box>

//                 <TextField
//                   label="Message*"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   multiline
//                   rows={4}
//                   name="message"
//                   value={formState.message}
//                   onChange={handleChange}
//                   error={formErrors.message !== ""}
//                   helperText={formErrors.message}
//                   className={getInputColor("message")}
//                 />

//                 {formErrors.general && (
//                   <Typography
//                     variant="body2"
//                     color="error"
//                     sx={{ backgroundColor: "#fff" }}
//                   >
//                     {formErrors.general}
//                   </Typography>
//                 )}
//                 <Box textAlign="center" mt={2}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     style={{ backgroundColor: "#133A5E", padding: "7px" }}
//                   >
//                     Send Message
//                   </Button>
//                 </Box>
//               </form>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default Contact;
