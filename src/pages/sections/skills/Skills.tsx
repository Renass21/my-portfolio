import { Grid, styled } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import CardSkills from "../../../components/cardSkills/CardSkills"



interface Props {
    id?: string;
}

function Skills({ id }: Props) {

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: "100vh",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
          paddingTop: "50px",
      },
      [theme.breakpoints.up('md')]: {
          paddingTop: "0",
      },
  }))
    return(
        <StyledSkills id={id}>
            <Container maxWidth="lg">
            <Box display="flex" alignItems="center" textAlign="center" justifyContent="center" flexDirection="column">
                <Typography variant="h2" marginBottom="2rem" >
                    SKILLS
                </Typography>
               <Grid item xs={12} md={4} gap="1rem" display="flex" justifyContent="center">
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
                <CardSkills />
               </Grid>
               
            </Box>
            </Container>
        </StyledSkills>      
    )
}

export default Skills