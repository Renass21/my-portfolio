import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  styled,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "pt-BR", label: "Português", countryCode: "BR" },
  { code: "en-US", label: "English (US)", countryCode: "US" },
];

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    marginTop: "0.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 0,
  },
}));

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("language", languageCode);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Language selector"
      >
        <Button size="small" onClick={handleToggle}>
          <ReactCountryFlag
            countryCode={currentLanguage?.countryCode || "BR"}
            svg
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </Button>
        <Button
          size="small"
          aria-controls={open ? "language-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select language"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </StyledButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="language-menu" autoFocusItem>
                  {languages.map((language) => (
                    <MenuItem
                      key={language.code}
                      selected={language.code === i18n.language}
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{
                          width: "1.2rem",
                          height: "1.2rem",
                          marginRight: "0.75rem",
                        }}
                      />
                      {language.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

export default LanguageSwitcher;
