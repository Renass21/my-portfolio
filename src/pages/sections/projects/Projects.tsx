import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardProjects from "../../../components/cardProjects/CardProjects";
import { projects } from "../../../database/projects";
import { useTranslation } from "react-i18next";

interface Props {
  id?: string;
}

function Projects({ id }: Props) {
  const { t } = useTranslation();

  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: "100vh",
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "80px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
  }));
  return (
    <StyledSkills id={id}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h2" marginBottom="2rem">
            {t("projects.title")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              width: "100%",
            }}
          >
            {projects.map((project) => (
              <CardProjects
                key={project.id}
                titleProject={t(`projects.${project.translationKey}.name`)}
                description={t(`projects.${project.translationKey}.description`)}
                imageCard={project.imageCard}
                projectUrl={project.projectUrl}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </StyledSkills>
  );
}

export default Projects;
