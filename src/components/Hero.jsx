import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Hero() {
  return (
    <Box
      id='hero'
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Grid
          container
          sx={{ justifyContent: 'center' }}
        >
          <Grid
            item
            xs
            sx={{ alignContent: 'center', textAlign: 'center' }}
          >
            <img
              src='Logan 2.jpg'
              alt='Headshot'
              style={{
                width: '25vw',
                maxWidth: '300px',
                borderRadius: 12,
                boxShadow: '15px 19px 20px 0 rgba(0,0,0,0.4)',
              }}
            />
          </Grid>
          <Grid
            item
            container
            xs
          >
            <Stack
              spacing={2}
              useFlexGap
              sx={{ width: { xs: '100%', sm: '70%' }, flex: 1 }}
            >
              <Typography
                variant='h1'
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                }}
              >
                Greetings!
              </Typography>
              <Typography
                color='text.secondary'
                sx={{ width: { sm: '100%', md: '80%' }, ml: 2 }}
              >
                My passion for tech began when I was young, tinkering with
                computers and exploring how they worked. With a background in
                IT, I transitioned to software development to focus more on
                system logic and enjoy building applications.
                <br />
                <br />
                Outside of tech, I enjoy spending time outdoors. I love hiking,
                camping, hunting, and fishing, which all provide a refreshing
                balance to my work. Spending time with my family during these
                adventures is something I deeply cherish. <br />
                <br />
                I'm excited to bring my technical skills and enthusiasm for
                building things to new and innovative projects.
                <br />
                <br />
                Let's create something great together!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
