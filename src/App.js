import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Archivo Black',
    ].join(','),
    h1: {
      fontFamily: 'Archivo Black'
    },
    h2: {
      fontFamily: 'Archivo Black'
    },
    h3: {
      fontFamily: 'Archivo Black'
    },
    h4: {
      fontFamily: 'Archivo Black'
    },
    h5: {
      fontFamily: 'Roboto'
    },
    h6: {
      fontFamily: 'Roboto'
    },
    p: {
      fontFamily: 'Roboto'
    }
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justifyContent="center"
            sx={{minHeight: "100vh"}}
          >
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography variant="h1">
                  Image Here
                </Typography>
              </Grid>
              <Grid item>
                <Grid 
                  container
                  spacing={2}
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h1">
                      AIVATAR
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">Custom AI Generated Avatars</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Typography variant="p">
                        GET YOUR AVATAR
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        </div>
    </ThemeProvider>
  );
}

export default App;
