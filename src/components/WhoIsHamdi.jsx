import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const funFacts = [
  "🔢 Obsessed with prime numbers and mathematical patterns",
  "♟️ Loves chess and can game the whole night without blinking",
  "📖 Deeply passionate about philosophy, history, and world cultures",
  "🧠 Overthinks *everything*, even this sentence",
  "🧪 Believes coding is modern-day alchemy",
];

const WhoIsHamdi = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        background: "linear-gradient(135deg, #f9dcc4 0%, #f6b26b 100%)", // soft beige to orange gradient
        color: "#4a2c0f", // dark brown for good contrast
        boxShadow: "0 4px 10px rgba(246, 178, 107, 0.4)",
        maxWidth: 700,
        margin: "auto",
        mt: 6,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ color: "#d9730d" }} // deeper orange for header
      >
        Who is Hamdi, really?
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        You’ve seen the projects, the skills, and the experience. But here's what
        makes me... me.
      </Typography>
      <List>
        {funFacts.map((fact, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={fact}
              primaryTypographyProps={{ fontWeight: "medium" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WhoIsHamdi;
