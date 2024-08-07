import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import '../../Assets/Css/Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="foot-footer">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          <Link color="inherit" href="https://Momentous.com">
            Momentous
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="/privacy-policy">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link color="inherit" href="/terms-of-service">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
