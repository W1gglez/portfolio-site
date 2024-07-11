import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AlternateEmail } from '@mui/icons-material';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      mt={1}
    >
      {'Copyright © Logan Weigel '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction='row'
          justifyContent='left'
          alignItems='center'
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <Typography>Lets Connect: </Typography>
          <IconButton
            color='inherit'
            href='mailto: weigelog@gmail.com'
            aria-label='email'
            sx={{ alignSelf: 'center' }}
          >
            <AlternateEmail />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://github.com/W1gglez'
            aria-label='GitHub'
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://www.linkedin.com/in/logan-weigel'
            aria-label='LinkedIn'
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
