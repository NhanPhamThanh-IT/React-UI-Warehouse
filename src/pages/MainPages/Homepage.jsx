import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Typography, Paper, Button } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Mã nguồn của các component được lưu dưới dạng chuỗi
const headerSource = `import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;`;

const footerSource = `import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', p: 2, mt: 4 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;`;

const Homepage = () => {
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => alert("Mã nguồn đã được copy!"))
            .catch(() => alert("Copy mã nguồn thất bại!"));
    };

    return (
        <Container sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
                Demo Component với Mã Nguồn
            </Typography>

            {/* Hiển thị Header và mã nguồn */}
            <Typography variant="h6" gutterBottom>
                Header Component
            </Typography>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Header />
            </Paper>
            <SyntaxHighlighter language="javascript" style={docco}>
                {headerSource}
            </SyntaxHighlighter>
            <Button
                variant="contained"
                onClick={() => copyToClipboard(headerSource)}
                sx={{ my: 2 }}
            >
                Copy Header Code
            </Button>

            {/* Hiển thị Footer và mã nguồn */}
            <Typography variant="h6" gutterBottom>
                Footer Component
            </Typography>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Footer />
            </Paper>
            <SyntaxHighlighter language="javascript" style={docco}>
                {footerSource}
            </SyntaxHighlighter>
            <Button
                variant="contained"
                onClick={() => copyToClipboard(footerSource)}
            >
                Copy Footer Code
            </Button>
        </Container>
    );
};

export default Homepage;
