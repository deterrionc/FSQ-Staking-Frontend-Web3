import { useRef } from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";

export default function EnticementSlick() {
  const sliderRef = useRef();
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    // autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mb: 5 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" color="white">
            More to come...{" "}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 60,
                height: 60,
                bgcolor: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ChevronLeftIcon />
            </Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 60,
                height: 60,
                bgcolor: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => sliderRef.current.slickNext()}
            >
              <ChevronRightIcon />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box sx={{ pb: 10 }}>
        <Slider {...settings} ref={sliderRef}>
          {[...Array(19)].map((item, index) => (
            <Stack sx={{ px: 5 }} key={index}>
              <Stack sx={{ p: 3, bgcolor: "#a6d94e", borderRadius: 2 }}>
                <Box
                  component="img"
                  src={`/images/sliders/${index + 1}.png`}
                  sx={{ borderRadius: 2 }}
                />
              </Stack>
            </Stack>
          ))}
        </Slider>
      </Box>
    </>
  );
}
