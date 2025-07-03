
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-router-dom";



function NavBar() {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
    }));

    return (
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem component={Link} to="/about">About</MenuItem>
          <MenuItem component={Link} to="/skills">Skills</MenuItem>
          <MenuItem component={Link} to="/projects">Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    )
  }
  
  export default NavBar
  