import { Box, Container, Grid, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from "../../../assets/images/profile_img.jpg";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Theme } from "@mui/material/styles";
import StyledButton from "../../../components/StyledButton";
import { AnimatedBackground } from "../../../components/animatesBackground/AnimatedBackground";


function Hero() {
  const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
          paddingTop: "100px",

      },
      [theme.breakpoints.up('md')]: { // >=mobile
          paddingTop: "0",
      },
  }))

  const StyledImg = styled("img")(({ theme }) => ({ 
        width: "75%",
        borderRadius: "5%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
  }))
    
  return (
    <>
      <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"170%"} top={-100} right={0}>
                <AnimatedBackground/>
              </Box>
              <Box position="relative" textAlign="center">
              <StyledImg src={Avatar} alt="avatar"/>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="secondary.main" variant="h2" textAlign="center" pb={2}>Renato dos Santos</Typography>
            <Typography color="primary.contrastText" variant="h3" textAlign="center">Software Developer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon/>
                  <Typography>
                    Download CV
                  </Typography>
                </StyledButton>
              </Grid>  
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <WhatsAppIcon/>
                  <Typography>
                    Contact Me
                  </Typography>
                </StyledButton>
              </Grid>  
            </Grid>  
          </Grid>
        </Grid>
      </Container>
      </StyledHero>
    </>
  )
}
  
export default Hero