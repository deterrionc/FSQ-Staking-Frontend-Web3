import { useLocation, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import Scrollbar from "components/Scrollbar";
import ParticlesBg from "particles-bg";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <Box>
        <MainNavbar />
        <Box sx={{ mt: 10 }}>
          <Outlet />
        </Box>
        {/* <MainFooter /> */}
      </Box>
    </>
  );
}
