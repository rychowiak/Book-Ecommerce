import React, { useState, useEffect } from "react";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/item";
import { setItems } from "../../state";
import { useDispatch, useSelector } from "react-redux";

function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // console.log("items", items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const res = await fetch("http://localhost:1337/api/items?populate=image", {
      method: "GET",
    });
    const itemsJson = await res.json();
    dispatch(setItems(itemsJson.data));
  }
  useEffect(function () {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Products
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="New Arrival" value="newArrival" />
        <Tab label="Top Rated" value="topRated" />
        <Tab label="Best Sellers" value="bestSellers" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item key={`${item.name}-${item.id}`} item={item} />
          ))}
        {value === "newArrival" &&
          newArrivalsItems.map((item) => (
            <Item key={`${item.name}-${item.id}`} item={item} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item key={`${item.name}-${item.id}`} item={item} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item key={`${item.name}-${item.id}`} item={item} />
          ))}
      </Box>
    </Box>
  );
}

export default ShoppingList;
