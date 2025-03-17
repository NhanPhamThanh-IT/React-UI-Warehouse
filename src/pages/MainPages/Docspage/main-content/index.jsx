/**
 * MainContent Component
 *
 * This component renders the main content section, including:
 * - A title and description section.
 * - A set of action buttons.
 * - A search bar fixed at the bottom.
 *
 * Utilizes Material-UI components such as Container, Box, Grid, Button, and Typography.
 *
 * @component
 * @returns {JSX.Element} The rendered MainContent component.
 */
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SearchBar } from "../../../../components/others/search-bar";
import { data } from "./constants";
import { styles } from "./styles";

/**
 * MainContent Component
 * @returns {JSX.Element} The rendered MainContent component.
 * @example
 * return <MainContent />;
 */
export const MainContent = () => {
    return (
        <Container maxWidth="md" sx={{ ...styles.container, position: "relative" }}>
            {/* Title and Description Section */}
            <Box mb={4}>
                <Typography variant="h3" component="h1" gutterBottom sx={styles.title}>
                    {data.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {data.description}
                </Typography>
            </Box>

            {/* Button Section */}
            <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={styles.buttonsContainer}>
                {data.buttons.map((button, index) => (
                    <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
                        <Button fullWidth startIcon={button.icon} sx={styles.button(button)}>
                            {button.label}
                        </Button>
                    </Grid>
                ))}
            </Grid>

            {/* Search Bar Section - Fixed at the bottom */}
            <Box
                sx={{
                    position: "fixed",
                    bottom: 20,
                    width: "60%",
                    zIndex: 10,
                }}
            >
                <SearchBar />
            </Box>
        </Container>
    );
};
