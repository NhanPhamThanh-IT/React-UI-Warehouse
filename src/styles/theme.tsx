// Desc: Theme for the app

// Importing necessary modules
import { createTheme } from '@mui/material/styles';

// Creating theme for the app
const theme = createTheme({
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
    },
});

// Exporting theme
export default theme;