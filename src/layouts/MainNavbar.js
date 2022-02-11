import { useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import { AppBar, Toolbar, Container, Hidden, Link, Box } from "@mui/material";
import ConnectButton from "components/ConnectButton";
import Logo from "components/Logo";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 100;
const APP_BAR_DESKTOP = 100;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  background: "#0d0415",
  boxShadow: "none",
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0,
            px: { xs: 5, md: 0 },
          }}
        >
          <Link href="https://eloncream.com/">
            <Logo />
          </Link>

          <Box flex={1} />
          <Link
            href="https://eloncream.com/"
            sx={{ mr: 5, textDecoration: "none", color: "white" }}
          >
            Home
          </Link>
          <ConnectButton />
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
