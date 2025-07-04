import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';



interface CardSkillsProps {
  skillName: string;
  skillImage: string;
}

function CardSkills({ skillName, skillImage }: CardSkillsProps) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1',
          minWidth: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
        }}
      >
        <img src={skillImage} alt={skillName} style={{ width: 40, height: 40, marginBottom: 8 }} />
        <span style={{ color: '#fff', fontWeight: 500, fontSize: 14, textAlign: 'center' }}>{skillName}</span>
      </Box>
    </ThemeProvider>
  );
}

export default CardSkills
