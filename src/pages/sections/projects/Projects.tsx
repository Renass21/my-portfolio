import { styled } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import CardProjects from "../../../components/cardProjects/CardProjects"

interface Props {
    id?: string;
}

function Projects({ id }: Props) {

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
                    PROJECTS
                </Typography>
                <CardProjects />
            </Box>
            </Container>
        </StyledSkills>      
    )
}

export default Projects