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
import Logo from "./button-logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const pages = ["course", "workshop", "instruktur"];
const settings = ["Profile", "Logout"];

function Navbar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

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
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", py: 1, width: "100%", px: 1 }}
    >
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
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <Logo />
            </Link>
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
                <Link
                  key={page}
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/${page}`}
                >
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
                      fontSize: "20px",
                      fontWeight: 400,
                      ":hover": {
                        color: "#0460D9",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
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
                  width: "170px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "24px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0460D9",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
