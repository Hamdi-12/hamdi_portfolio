import React from 'react';
import { Card, CardContent, Typography, Link, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Contacts() {
  return (
    <Card
      sx={{
        bgcolor: '#f5f1e9', // soft beige background
        color: '#d7760f',    // soft orange text
        mb: 4,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact Me
        </Typography>
        <Typography paragraph>
          I’m always open to connect! Whether you want to discuss projects, collaborations, or just say hi, reach out anytime:
        </Typography>
        <Stack spacing={2} sx={{ fontSize: '1.1rem' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon />
            <Link
              href="mailto:hamdiissack30@gmail.com"
              underline="hover"
              color="inherit"
            >
              hamdiissack30@gmail.com
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <PhoneIcon />
            <Typography>+254 712 355 981</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <GitHubIcon />
            <Link
              href="https://github.com/Hamdi-12"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              github.com/Hamdi-12
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <TwitterIcon />
            <Link
              href="https://twitter.com/hamdiissack30"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              @hamdiissack30
            </Link>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
