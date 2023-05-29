import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import universe from "../assets/universe.svg";
import { SunFill, MoonStarsFill } from "react-bootstrap-icons";
import { ThemeContext } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { UniverseIdType } from "../types/types";

const pages: { title: string; key: UniverseIdType }[] = [
  { title: "Harry Potter", key: "hp" },
  { title: "Lord of the Rings", key: "lotr" },
  { title: "Star Wars", key: "starwars" },
];

const Header: React.FC = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const activeTheme = useTheme();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleTheme = () => {
    localStorage.setItem("isDark", isDark ? "false" : "true");
    setIsDark(!isDark);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link to="/">
              <img src={universe} height="150px" />
            </Link>
          </Grid>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cosmic Conversations
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`/${page.key}`)}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Grid
            sx={{ display: { xs: "flex", md: "none" }, mr: 2, flexGrow: 1 }}
          >
            <Link to="/">
              <img src={universe} height="150px" />
            </Link>
          </Grid>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.key}
                to={`/${page.key}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Button
            onClick={handleToggleTheme}
            style={{
              border: `1px solid gray`,
            }}
          >
            {isDark ? (
              <SunFill color={activeTheme.palette.primary.main} />
            ) : (
              <MoonStarsFill color={activeTheme.palette.primary.contrastText} />
            )}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
