import { Box, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box>
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                My Blog
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
                A blog about web development
            </Typography>
        </Box>
    );
};

export default Header;