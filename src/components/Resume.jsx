import { Button, Typography, Card, CardContent } from '@mui/material';

export default function Resume() {
  return (
    <Card sx={{ bgcolor: '#d7760fc1', color: 'white', mb: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Resume
        </Typography>
        <Typography variant="body1" paragraph>
          You can download my resume below:
        </Typography>
        <Button
          component="a"
          href="/assets/Hamdi_Resume.pdf"
          download
          sx={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#333',
            borderRadius: '25px',
            fontWeight: 'bold',
            border: '2px solid #ccc',
            textDecoration: 'none',
            display: 'inline-block',
            transition: '0.3s ease',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          📄 Download Resume
        </Button>
      </CardContent>
    </Card>
  );
}
