import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function Item({ item, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name, image } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;
  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="300px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer", objectFit: "cover" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* AMOUNT */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton //to make shure count doesn't go below 1
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
            {/* BUTTON */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "#fff" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">{price}</Typography>
      </Box>
    </Box>
  );
}

export default Item;
