import * as React from 'react';
import Container from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const logos = [
  { src: 'HTML5.png', name: 'HTML' },
  { src: 'CSS3.png', name: 'CSS' },
  { src: 'Bootstrap.png', name: 'Bootstrap' },
  { src: 'Material UI.png', name: 'MUI' },
  { src: 'JavaScript.png', name: 'Javascript' },
  { src: 'React.png', name: 'React' },
  { src: 'Express.png', name: 'Express.js' },
  { src: 'Vite.js.png', name: 'Vite.js' },
  { src: 'Redux.png', name: 'Redux' },
  { src: 'Jest.png', name: 'Jest' },
  { src: 'PostgresSQL.png', name: 'PostgreSQL' },
  { src: 'CSharp.png', name: 'C#' },
  { src: 'Git.png', name: 'Git' },
];

export default function LogoCollection() {
  const theme = useTheme();

  return (
    <Container
      id='logoCollection'
      sx={{ py: 6 }}
    >
      <Typography
        component='p'
        variant='subtitle2'
        align='center'
        color='text.secondary'
      >
        Technologies
      </Typography>
      <Grid
        container
        justifyContent='center'
        sx={{ mt: 1 }}
      >
        {logos.map((logo, index) => (
          <Grid
            item
            key={index}
            sx={{ alignContent: 'center' }}
          >
            <figure>
              <img
                src={logo.src}
                style={{ height: '80px' }}
              />
              <figcaption
                style={{
                  textAlign: 'center',
                  fontFamily: "'Courier New', monospace",
                  fontWeight: 550,
                }}
              >
                {logo.name}
              </figcaption>
            </figure>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
