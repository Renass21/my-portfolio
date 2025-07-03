import { Box, Container, styled } from "@mui/material"
import Typography from "@mui/material/Typography"

interface Props {
    id?: string;
}
function About({id}: Props) {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: "100vh",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
          paddingTop: "100px",
      },
      [theme.breakpoints.up('md')]: {
          paddingTop: "0",
      },
  }))
    return(
        <StyledAbout id={id}>
            <Container maxWidth="lg">
            <Box display="flex" alignItems="center" textAlign="center" justifyContent="center" flexDirection="column">
                <Typography variant="h2" marginBottom="2rem" >
                    ABOUT
                </Typography>
                <Typography variant="body1" marginTop="2rem">
                    Olá, me chamo Renato, tenho 33 anos e atualmente atuo como estagiário de suporte N2 e programação. Trabalho no período noturno como CLT 
                    em uma empresa fora do ramo de tecnologia, conciliando as duas atividades para ampliar meus conhecimentos e experiência profissional.
                </Typography>
                <Typography variant="body1" margin="0.5rem">
                    Possuo experiência em React, NextJs, NodeJs, Typescript, MySQL e PostgreSQL, com frameworks de banco de dados como PrismaORM e TypeORM.
                    Também tenho familiaridade com inteligência artificial generativa do Google, utilizando a Vertex AI para soluções que necessitam o uso da IA.
                </Typography>
                <Typography margin="0.5rem">
                    Estou sempre em busca de me aperfeiçoar, de acordo com o que o mercado pede e pronto para novos desafios.
                </Typography>
            </Box>
            </Container>
        </StyledAbout>      
    )
}

export default About