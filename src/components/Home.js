import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import heroImg from '../assets/images/Hero Image.png';
import Header from './Header';
import Footer from './Footer';
import Sample from './Sample';



const tiers = [
  
];



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      {/* Hero unit */}
       <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item lg={40}>
            <div className="hero__img-box mt-5">
              <img src={heroImg} alt="" />
            </div>
          </Grid>
        </Grid>
        <Typography variant="h2" align="center" gutterBottom>
              Top Tours
            </Typography>
      </Container>

      {/* End hero unit */}
      <Container>
     
        <Sample></Sample>
      </Container>
    </ThemeProvider>
  );
}