import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const activeTheme = useTheme();
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 3, marginTop: 14 }}
      component="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        <span role="img">✨</span> Cosmic Conversations
        <span role="img">✨</span>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Journey Through Universes, One Conversation at a Time.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link
          to={{
            pathname: "https://hansel.xyz",
          }}
          target="_blank"
          style={{ color: activeTheme.palette.primary.dark }}
        >
          HanselV
        </Link>
        {` `}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
