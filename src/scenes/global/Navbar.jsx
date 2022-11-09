import {
  Box,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="100px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      lefto="0"
      zIndex="2"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[500]}
        >
          ECOMMERCE
        </Box>
        <Box>
          <TextField
            type="search"
            placeholder="Search by name, title or author"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: "black" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: "50vw" }}
          />
          <Box mt="20px" display="flex" justifyContent="space-around">
            <Box>Home</Box>
            <Box>Popular</Box>
            {/* TODO CATEGORY LIST  */}
            <Box>Category</Box>
            <Box>Bestseller</Box>
            <Box>Blog</Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <PersonOutlineIcon />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="neutral"
            invisible={cart.length === 0}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagIcon />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuBookIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
