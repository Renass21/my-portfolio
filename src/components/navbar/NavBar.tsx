import { AppBar, MenuItem, styled, Toolbar, IconButton, Box } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

function NavBar() {
    const { t } = useTranslation();
    
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.up("xs")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0.5rem",
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: "1rem",
            padding: "0.75rem",
        },
    }));

    const StyledMenuContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: theme.palette.primary.main,
            padding: "1rem",
            gap: "0.5rem",
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            position: "static",
            backgroundColor: "transparent",
            padding: 0,
            gap: "1rem",
        },
    }));

    const [activeSection, setActiveSection] = useState("hero");
    const [openMenu, setOpenMenu] = useState(false);

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
        setOpenMenu(false);
      }
    };
  
    return (
      <AppBar position="absolute">
        <StyledToolbar>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              color="inherit"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <StyledMenuContainer sx={{ display: { xs: openMenu ? "flex" : "none", sm: "flex" } }}>
            <MenuItem
              onClick={() => scrollToSection("home")}
              selected={activeSection === "home"}
            >
              {t('navbar.home')}
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("about")}
              selected={activeSection === "about"}
            >
              {t('navbar.about')}
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("skills")}
              selected={activeSection === "skills"}
            >
              {t('navbar.skills')}
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("projects")}
              selected={activeSection === "projects"}
            >
              {t('navbar.projects')}
            </MenuItem>
          </StyledMenuContainer>
          
          <LanguageSwitcher />
        </StyledToolbar>
      </AppBar>
    )
  }
  
  export default NavBar
