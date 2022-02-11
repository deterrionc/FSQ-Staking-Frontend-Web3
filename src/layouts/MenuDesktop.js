import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  Hidden,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import ConnectButton from "components/ConnectButton";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
import instagramFill from "@iconify/icons-cib/instagram";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { useEthers } from "@usedapp/core";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { account } = useEthers();
  const isAdmin = account === process.env.REACT_APP_ADMIN_WALLET;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: 1, ml: 10 }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={5}
        flex={1}
        sx={{ fontSize: 14 }}
      >
        <Typography
          component={ScrollLink}
          to="frogenomics"
          spy
          smooth
          variant="h5"
          sx={{
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          FROGANOMICS
        </Typography>
        <Typography
          component={ScrollLink}
          to="frogmap"
          spy
          smooth
          variant="h5"
          sx={{
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          FROGMAP
        </Typography>
        <Typography
          component={ScrollLink}
          to="faq"
          spy
          smooth
          variant="h5"
          sx={{
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          FAQ
        </Typography>
        <Typography
          component={RouterLink}
          to="/view"
          variant="h5"
          sx={{
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          My NFT
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          sx={{ py: 2, px: 3, bgcolor: "#1da1f2", fontSize: 18 }}
          target="_blank"
          href="https://twitter.com/69420Frogs"
        >
          Twitter
        </Button>
        <ConnectButton />
      </Stack>
    </Stack>
  );
}
