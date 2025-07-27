import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function Education() {
  return (
    <Card
      sx={{
        bgcolor: '#f5f1e9', // soft beige background
        color: '#d7760f', // soft orange text
        mb: 4,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Education
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Bachelor of Science in Applied Computer Technology
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
            United States International University (USIU)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Expected Graduation: <strong>2027</strong>
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 600, lineHeight: 1.6, color: '#555' }}>
            My studies have provided me with a strong foundation in core computer science principles, with focused coursework in cybersecurity, software engineering, data structures, algorithms, and network security. I’m passionate about applying this knowledge to real-world projects and continuously growing as a developer.
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2 }}>
          Relevant Coursework:
        </Typography>
        <ul style={{ paddingLeft: '1.25rem', color: '#555' }}>
          <li>Cybersecurity Fundamentals</li>
          <li>Software Engineering</li>
          <li>Data Structures & Algorithms</li>
          <li>Database Management Systems</li>
          <li>Network Security</li>
        </ul>
      </CardContent>
    </Card>
  );
}
