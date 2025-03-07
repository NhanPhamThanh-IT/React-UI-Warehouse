import { Box, Typography, IconButton } from "@mui/material";
import accounts from "../../constants/socialAccount";

const Footer = () => {
    return (
        <Box component="footer" sx={{ textAlign: "center", py: 2, mt: 4 }}>
            <Typography variant="body1" gutterBottom>Connect with me</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {accounts.map((account, index) => {
                    const IconComponent = account.icon;
                    return (
                        <IconButton key={index} href={account.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent />
                        </IconButton>
                    );
                })}
            </Box>
            <Typography variant="body2" color="textSecondary">© {new Date().getFullYear()} Your Name</Typography>
        </Box>
    );
};

export default Footer;
