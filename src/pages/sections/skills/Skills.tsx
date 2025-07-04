import { styled } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import CardSkills from "../../../components/cardSkills/CardSkills"
import { skills } from '../../../database/skills';



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

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {skills.map((skill) => (
                  <Box
                    key={skill.id}
                    sx={{
                      width: { xs: '30%', sm: '22%', md: '15.5%' },
                      minWidth: 100,
                      aspectRatio: '1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CardSkills skillName={skill.skillName} skillImage={skill.skillImage} />
                  </Box>
                ))}
              </Box>
               
            </Box>
            </Container>
        </StyledSkills>      
    )
}

export default Skills