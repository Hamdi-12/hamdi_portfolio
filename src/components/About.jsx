import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
  return (
    <MotionBox
      sx={{ p: 4 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      <Divider
        sx={{
          mb: 2,
          width: "60px",
          borderBottom: "3px solid #673ab7",
        }}
      />
      <Typography variant="body1" lineHeight={1.8}>
        I’m Hamdi Ali Abdullahi — a thinker, builder, and cyber dreamer. While many see code as logic and syntax, 
        I see it as poetry written in the language of machines.
        <br /><br />
        I don’t just solve problems. I dissect them, understand their roots, and architect solutions that are as meaningful as they are elegant. 
        My passion lies in cybersecurity, philosophy, and systems that shape how we interact with technology.
        <br /><br />
        I believe that technology should respect privacy, honor culture, and enhance the human experience — not complicate it.
        I may overthink everything, but in that chaos, I find clarity.
      </Typography>
    </MotionBox>
  );
};

export default About;
