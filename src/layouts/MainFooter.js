import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Container,
  IconButton,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import facebookFill from "@iconify/icons-cib/facebook";
import instagramFill from "@iconify/icons-cib/instagram";
import Logo from "components/Logo";
export default function MainFooter() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 15 }}>
          <Stack>
            <Typography variant="h3" color="#050027">
              #OccupyDefi
            </Typography>
            <Typography variant="h3" color="#050027">
              #FrogNation
            </Typography>
            {/* <Stack direction="row" spacing={3}>
            <Link target="_blank" href="https://discord.gg/TEkeZaCCzq">
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Icon icon={facebookFill} fontSize={18} color="black" />
              </IconButton>
            </Link>

            <Link target="_blank" href="https://twitter.com/TreeHunksClub">
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Icon icon={twitterFill} fontSize={18} color="black" />
              </IconButton>
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/treehunksclub/"
            >
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                <Icon icon={instagramFill} fontSize={18} color="black" />
              </IconButton>
            </Link>
          </Stack> */}
          </Stack>
          <Stack direction="row" spacing={15} sx={{ mr: { xs: 4, md: 10 } }}>
            {/* <Stack spacing={2}>
              <Typography fontSize={20} color="#050027">
                About
              </Typography>
              <Typography
                fontSize={17}
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                Frogenomics
              </Typography>
              <Typography
                fontSize={17}
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                Frogmap
              </Typography>
              <Typography
                fontSize={17}
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                FAQ
              </Typography>
            </Stack> */}

            <Stack spacing={2}>
              <Typography fontSize={20} color="#050027">
                Socials
              </Typography>
              <Typography
                component={Link}
                underline="none"
                target="_blank"
                fontSize={17}
                href="https://discord.com/invite/FrogNationDAO"
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                Discord
              </Typography>
              <Typography
                component={Link}
                underline="none"
                target="_blank"
                fontSize={17}
                href="https://twitter.com/69420Frogs"
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                Twitter
              </Typography>
              <Typography
                component={Link}
                underline="none"
                target="_blank"
                fontSize={17}
                href="https://medium.com/@FrogNationDAO"
                color="#7a7b98"
                sx={{ cursor: "pointer", "&:hover": { color: "#ff975c" } }}
              >
                Medium
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          textAlign="center"
          sx={{ pt: 4, pb: 8, borderTop: "2px solid rgba(122, 123, 152, 0.2)" }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Logo />
            <Typography
              fontSize={17}
              color="#7a7b98"
              sx={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
            >
              Terms & Conditions
            </Typography>
          </Stack>
        </Stack>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              // bgcolor: "rgba(255, 255, 255, 0.3)",
              bgcolor: "white",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <DialogTitle id="alert-dialog-title">Terms & Service</DialogTitle>
          <DialogContent>
            <DialogContentText color="black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
}
