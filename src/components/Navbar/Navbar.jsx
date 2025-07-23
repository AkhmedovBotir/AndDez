import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ButtonPrimary from "../Button/Button";
import LanguageControl from "../Select/LanguageControl";
import { useTranslation } from "react-i18next";
import logo from "../../assets/svg/logo.svg";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  box-sizing: border-box;
`;

const Placeholder = styled.div`
  height: 80px; /* Same as the height of the Navbar */
`;

function Navbar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (itemKey) => {
    setActiveItem(itemKey);
    handleCloseNavMenu();
  };

  const navItems = [
    { key: "home", label: t("navbar.home"), href: "/" },
    { key: "services", label: t("navbar.services"), href: "#services" },
    { key: "aboutUs", label: t("navbar.aboutUs"), href: "#about" },
    { key: "faq", label: t("navbar.faq"), href: "#faq" },
  ];

  return (
    <>
      <NavbarContainer>
        <AppBar
          sx={{
            position: "fixed",
            backgroundColor: "#fff",
            color: "#000",
            height: "80px",
            marginTop: "0px",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2257bf",
                }}
              >
                <img
                  src={logo}
                  style={{ width: "60px", marginTop: "10px" }}
                  alt=""
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "none", md: "block" },
                    ms: 2,
                    mr: 3,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                    color: "#2257bf",
                  }}
                >
                  {t("navbar.appTitle")}
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => handleMenuItemClick(item.key)}
                    style={{
                      margin: "0 16px",
                      fontSize: "15px",
                      color: activeItem === item.key ? "#2257bf" : "#000",
                      textDecoration: "none",
                      borderBottom:
                        activeItem === item.key ? "2px solid #2257bf" : "none",
                      transition: "border-color 0.3s ease-out",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </Box>

              <LanguageControl />

              <Box sx={{display:{xs:'none', md:'flex'}}}>
              <ButtonPrimary />
              </Box>
              <Box
                sx={{
                  width: "auto",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="#2257bf"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    color: "#000",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.key}
                      onClick={() => handleMenuItemClick(item.key)}
                    >
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => handleMenuItemClick(item.key)}
                        style={{
                          margin: "0 16px",
                          fontSize: "15px",
                          color: activeItem === item.key ? "#2257bf" : "#000",
                          textDecoration: "none",
                          borderBottom:
                            activeItem === item.key
                              ? "2px solid #2257bf"
                              : "none",
                          transition: "border-color 0.3s ease-out",
                        }}
                      >
                        {item.label}
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </NavbarContainer>
      <Placeholder /> {/* Placeholder to prevent content from being hidden */}
    </>
  );
}

export default Navbar;
