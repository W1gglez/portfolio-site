import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import LogoCollection from './components/LogoCollection';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar
        mode={mode}
        toggleColorMode={toggleColorMode}
      />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Divider />
        <LogoCollection />
        <Divider />
        <Features />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
