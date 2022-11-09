import { useDispatch } from "react-redux";
import { Box, Typography, IconButton, Button, Tabs, Tab } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { shades } from "../../theme";

import { addToCart } from "../../state";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ItemDetails() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValues] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (newValue) => {
    setValues(newValue);
  };

  async function getItem() {
    const res = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await res.json();
    setItem(itemsJson.data);
  }

  useEffect(function () {
    getItem();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" margin="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* ACTIONS */}
        <Box flex="1 1 40%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.atributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton //to make shure count doesn't go below 1
                onClick={() => setCount(Math.max(count - 1, 1))}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "#fff",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>
      {/* INFORMATION */}
      <Box m="20px">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Description" value="description" />
          <Tab label="Reviews" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>
      {/* RELATED ITEMS */}
      <Box m="20px">
        <Typography>RELATED ITEMS</Typography>
        <Typography variant="h4">COMING SOON...</Typography>
      </Box>
    </Box>
  );
}

export default ItemDetails;
