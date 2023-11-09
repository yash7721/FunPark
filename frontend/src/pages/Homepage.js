import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            FuningoHR  connect
                            {/* <br /> */}
                           
                            {/* System */}
                        </StyledTitle>
                        <StyledText>
                       
                            Your Gateway to a Productive Day

                            Get ready to dive into a day full of opportunities and teamwork. Log in, and you'll find everything you need to kickstart your workday. From important updates and announcements to your tasks and collaboration tools, it's all here. Let's make today awesome together!"

                        </StyledText>
                        <div
                            style={{
                                fontFamily: 'Arial, sans-serif',
                                fontSize: '24px',
                                color: '#333',
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)', // Blue box-shadow
                                border: '2px solid blue', // Blue border
                                textShadow: '1px 1px 2px #333', // 3D text effect
                            }}
                        >
                            Be Energetic. Be Humble. Keep Smiling.
                            <br />
                            <span
                                style={{
                                    fontFamily: 'Arial, sans-serif',
                                    fontSize: '16px',
                                    color: '#333',
                                }}
                            >
                                ऊर्जावजन बनें. विनम्र रहें, मुस्कराएं।
                            </span>
                        </div>


                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            {/* <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
                            {/* <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText> */}
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
