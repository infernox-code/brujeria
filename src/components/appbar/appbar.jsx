import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CustomButtonComponent from "../customButton/customButton";
import MagicHatIcon from '../../assets/witch-hat.png';
import "./appbar.css";

const pages = ["Inicio", "Servicios", "Testimonios", "Contactenos", "Terminos y condiciones"];

const ResponsiveAppBarComponent = ({ scrollSection }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=+573177837117&text=Hola Maestro", "_blank");
  }
  return (
    <>
    <img id="logo" src={MagicHatIcon} alt="magic hat icon"/>
    <AppBar id="appbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="center" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  scrollSection(index);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} className="mr-20">
            <CustomButtonComponent onClick={handleClick} variant="outlined" startIcon={<PhoneInTalkIcon />}>
              Chat en linea con los maestros!
            </CustomButtonComponent>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default ResponsiveAppBarComponent;