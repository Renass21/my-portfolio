import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";



function NavBar() {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
    }));

    const [activeSection, setActiveSection] = useState("hero");

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"];
      const offsets = sections.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });
  
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const activeIndex = offsets.findIndex((offset, index) => {
        const nextOffset = offsets[index + 1] || Infinity;
        return scrollPosition >= offset && scrollPosition < nextOffset;
      });
  
      if (activeIndex !== -1) {
        setActiveSection(sections[activeIndex]);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem
            onClick={() => scrollToSection("home")}
            selected={activeSection === "home"}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("about")}
            selected={activeSection === "about"}
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("skills")}
            selected={activeSection === "skills"}
          >
            Skills
          </MenuItem>
          <MenuItem
            onClick={() => scrollToSection("projects")}
            selected={activeSection === "projects"}
          >
            Projects
          </MenuItem>
        </StyledToolbar>
      </AppBar>
    )
  }
  
  export default NavBar
