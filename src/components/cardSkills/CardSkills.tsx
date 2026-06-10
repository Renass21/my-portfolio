import Box from '@mui/material/Box';

interface CardSkillsProps {
  skillName: string;
  skillImage: string;
}

function CardSkills({ skillName, skillImage }: CardSkillsProps) {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '1',
        minWidth: 100,
        borderRadius: 1,
        bgcolor: '#007FFF',
        '&:hover': {
          bgcolor: '#0066CC',
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
  );
}

export default CardSkills
