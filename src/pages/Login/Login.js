import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";

import bgImage from "../../assets/images/home.png";
import logoImage from "../../assets/images/logo.png";

import logo_left from "../../assets/images/logo_left.png";
import logo_right from "../../assets/images/logo_right.png";
import { TextFields } from "@mui/icons-material";
import blue_bg from "../../assets/images/BLUE_BG.jpg";
import { border } from "@mui/system";
import { grey } from '@mui/material/colors';
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.ysraarogyasri.ap.gov.in/"
        target="_blank"
      >
        Dr.YSR Aarogyasri Health Care Trust
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const initialValues ={
    userID:"",
    password: ""
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{
          backgroundImage: `url(${blue_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Grid width='70%' height='auto'>
        <Grid display='flex' justifyContent='flex-end' alignItems='center' fullWidth >
            <Typography variant="h6" color="black" textAlign='right'>EHS</Typography>
        </Grid>
        </Grid> */}
        <Grid display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Grid container xs={12} sm={10} lg={10} md={10} m={8}  >
          <Grid
            item
            xs={8}
            md={5}
            sx={{
              // height: "80vh", //remove
              spacing: 0,
              backgroundColor: "#F1F8FF",
              borderRight: "1px solid #CDE6FF",
              borderRadius: "5px 0 0 5px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              paddingRight:2
            }}
          >
            <Grid
              md={8}
              xs={6}
              component="img"
              alt="The house from the offer."
              src={logo_left}
              // margin={"15%"}
              // display='flex'
              // placeItems='center'
              // justifyContent='center'
              // alignItems='center'
              
            />
          </Grid>
          <Grid
            item
            xs={8}
            md={7}
            sx={{
              // height: "80vh",//rem
              spacing: 0,
              backgroundColor: "white",
              borderRight: "1px solid #CDE6FF",
              borderRadius: "0 5px 5px 0"
            }}
          >
            <Grid m={4}>
              <Grid
                item
                md={12}
                xs={12}
                component="img"
                alt="The house from the offer."
                src={logo_right}
                marginLeft={"15%"}
                marginTop={"5%"}
              />
              <Grid item xs={12} md={12}>
                <Formik
                  initialValues={initialValues}
                  onSubmit = {(values, formikHelpers) => {
                    console.log(values)
                    formikHelpers.resetForm()
                  }}
                  validationSchema= {object({
                    userID: string().required('Please enter UserID').min(5, "Username should be minimum 5 characters long"),
                    password: string().required('Please enter password').min(7, "Password should be minimum 7 characters"),
                  })}
                >
                {({errors, isValid, touched, dirty}) => (
                <Form>
                <Typography variant="body1" my={2} fontWeight={500} fontFamily='Lato, sans-serif'>ASRI PREAUTH</Typography>
                <Grid item md={12} xs={12} >
                  <Grid item md={12} xs={10}>
                    <Field
                      name='userID'
                      type= 'text'
                      as = {TextField}
                      label="User ID"
                      variant="outlined"
                      fullWidth
                      sx={{ border: "1px solid #EAEDF1", borderRadius: "5px" }}
                      size ='small'
                      error = {Boolean(errors.userID) && Boolean(touched.userID)}
                      helperText={Boolean(touched.userID) && errors.userID}
                    />
                  </Grid>
                  <Grid item md={12} xs={10} mt={0}>
                    <Field
                      name='password'
                      type= 'password'
                      as = {TextField}
                      color='primary'
                      label="Password"
                      variant="outlined"
                      fullWidth
                      sx={{ border: "1px solid #EAEDF1", borderRadius: "5px" }}
                      size ='small'
                      error = {Boolean(errors.password) && Boolean(touched.password)}
                      helperText={Boolean(touched.password) && errors.password}
                    />
                  </Grid>
                  
                  <Grid container spacing={2} display="flex" justifyContent="space-between">
                    <Grid item xs={7}>
                    {/* <FormControlLabel
                      
                      control={
                        <Checkbox
                          name="checkedB"
                          sx={{
                            color: grey[500]
                          }}
                          size="small"
                        />
                      }
                      label={
                        <Box fontSize={14} color={"#AEAEAE"}>
                          Remember Me
                        </Box>
                      }
                      
                    /> */}
                    </Grid>
                    <Grid item xs={3} mb={1.5} display="flex" justifyContent='end' textAlign='right'>
                        <Typography color={"#AEAEAE"} fontSize={14}>
                            Forgot Password?
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container xs={10} md={12} display='flex' justifyContent='end'>
                <Button disabled={!dirty || !isValid} variant="contained" type="submit" onClick={navigateToHome} sx={{backgroundColor: "#2169B2", padding: "12px 51px",borderRadius: "5px"}}>LOGIN</Button>
                </Grid>
                <Grid container item xs={10} justifyContent={"center"} mt={2}>
                      {/* <Typography color={"#AEAEAE"}>
                        Don't have an account?
                        <Link href="#">
                    {"Signup"}
                  </Link>
                      </Typography> */}
                </Grid>
                </Form> 
                )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
