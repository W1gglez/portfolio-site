import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Link } from '@mui/material';

const items = [
  {
    icon: <DevicesRoundedIcon />,
    title: 'FitTrack',
    description:
      'A user-friendly app to help you effortlessly track your workouts and calorie intake.',
    image: 'url("fittrack-screenshots.png")',
    url: 'https://lweigel-fit-track.fly.dev',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'RJ Energy Solutions - Audit Portal',
    description:
      "Worked closely with the client to build  a proof-of-concept web app improving  the company's Google Sheets workflow for tracking equipment, costs, and carbon footprint",
    image: 'url("RJ audi portal.png")',
    url: 'https://energy-solutions-portal.fly.dev/',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id='features'
      sx={{ py: { xs: 8, sm: 16 } }}
    >
      <Grid
        container
        spacing={6}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <div>
            <Typography
              component='h2'
              variant='h4'
              color='text.primary'
              sx={{
                mb: 8,
              }}
            >
              Projects
            </Typography>
          </div>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description, url }, index) => (
              <Card
                key={index}
                variant='outlined'
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index
                      ? 'primary.dark'
                      : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color='text.primary'
                      variant='body2'
                      fontWeight='bold'
                    >
                      {title}
                    </Typography>
                    <Typography
                      color='text.secondary'
                      variant='body2'
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      sx={{ display: 'flex', alignItems: 'center' }}
                      href={url}
                      target='_blank'
                    >
                      Explore App <ChevronRight fontSize='sm' />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant='outlined'
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: items[selectedItemIndex].image,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
