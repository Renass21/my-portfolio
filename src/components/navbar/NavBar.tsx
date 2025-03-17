import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


function NavBar() {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
    }));

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>   
      </>
    )
  }
  
  export default NavBar
  