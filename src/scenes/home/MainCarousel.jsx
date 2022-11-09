import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import { shades } from "../../theme";

// Imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroImageImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Carousel>
      {Object.values(heroImageImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="#fff"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
            <Typography variant="h1">LOREM IPSUM</Typography>
            <Typography fontWeight="bold">
              <Button sx={{ color: "#fff", textDecoration: "underline" }}>
                DISCOVER MORE
              </Button>
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
}

export default MainCarousel;
