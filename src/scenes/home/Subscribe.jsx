import { Typography, Box, Divider, InputBase, IconButton } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadIcon />
      </IconButton>
      <Typography variant="h3">Subscribe to our Newsletter</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam a
        consectetur laudantium.
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#f2f2f2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
}

export default Subscribe;
