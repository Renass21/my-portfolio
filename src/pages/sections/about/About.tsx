import { Container, Grid, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

interface Props {
  id?: string;
}
function About({ id }: Props) {
  const { t } = useTranslation();
  const StyledAbout = styled("div")(({ theme }) => ({
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
    [theme.breakpoints.up("sm")]: {
      paddingTop: "60px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "50px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "50px",
    },
  }));
  return (
    <StyledAbout id={id}>
      <Container maxWidth="lg">
        <Grid
          maxWidth="xl"
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDirection="column"
          spacing={2}
          pt={3}
        >
          <Typography variant="h2" margin="1rem">
            {t("about.title")}
          </Typography>
          <Typography variant="body3" margin="0.5rem">
            {t("about.paragraph1")}
          </Typography>
          <Typography variant="body3" margin="0.5rem">
            {t("about.paragraph2")}
          </Typography>
          <Typography variant="body3" margin="0.5rem">
            {t("about.paragraph3")}
          </Typography>
        </Grid>
      </Container>
    </StyledAbout>
  );
}

export default About;
