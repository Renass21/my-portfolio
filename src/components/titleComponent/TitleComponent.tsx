import { Typography } from '@mui/material';


function TitleComponent() {
  return (
    <Typography color="secondary.main" variant="h2" textAlign="center" pb={2}>
      <span style={{ fontFamily: '"Bungee Shade", cursive', color: '#ffffff'}}>Renato </span>
      <span style={{ fontFamily: '"Bungee Outline", cursive' }}>dos Santos</span>
    </Typography>
  );
}

export default TitleComponent;