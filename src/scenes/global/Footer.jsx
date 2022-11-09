import { Box, Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[700]}
          >
            ECOMMMER
          </Typography>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ab
            temporibus, reiciendis molestiae nobis nihil ipsum aspernatur
            repellendus! Consectetur laboriosam maxime impedit voluptas alias
            beatae quidem numquam eveniet doloremque eum?
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">13 lorem blvd. lorem ipsum, 154248</Typography>
          <Typography mb="30px">Email: loremipsumn@loremipsumn.com</Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
