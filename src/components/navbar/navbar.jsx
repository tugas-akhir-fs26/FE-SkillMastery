import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CustomAvatar from "./avatar";
import { Routes, Route, Link } from "react-router-dom";

const pages = ["course", "workshop", "mentor"];
const settings = ["Profile", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" }, mx: 5 }}>
            <Typography
              variant="h5"
              sx={{ color: "#0460D9", fontWeight: 700, fontSize: "2em" }}
            >
              Skill
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "black", fontWeight: 700, fontSize: "2em" }}
            >
              Mastery
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              backgroundColor: "#0460D9",
            }}
          >
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
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            SkillMastery
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mx: 3,
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  variant="text"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 5,
                    color: "black",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "1.1em",
                    fontWeight: 500,
                    ":hover": {
                      color: "#0460D9",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>

            {isLogin ? (
              <CustomAvatar
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                settings={settings}
              />
            ) : (
              <Box
                sx={{
                  width: "200px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#0460D9", color: "white" }}
                >
                  Masuk
                </Button>
                <Button variant="outlined">Daftar</Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
