/**
 * MUI Footer - Templates
 * Build a footer for your website or application with MUI.
 * MUI templates are production-ready and follow best practices.
 * https://mui.com/getting-started/templates/
 */

/**
 * Import components
 * @see https://mui.com/getting-started/templates/
 * @see https://mui.com/components/box/
 * @see https://mui.com/components/typography/
 * @see https://mui.com/components/link/
 * @see https://mui.com/components/container/
 * @see https://mui.com/components/grid/
 * @see https://mui.com/components/text-fields/
 * @see https://mui.com/components/buttons
 */
import { Box, Typography, Link, Container, Grid, TextField, Button } from '@mui/material';

/**
 * Define the templates
 */
export const footers = [
    {
        title: 'Simple Footer',
        description: 'A basic footer with centered content.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">© 2025 Your Company. All rights reserved.</Typography>
    </Container>
</Box>
        `,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="body2">© 2025 Your Company. All rights reserved.</Typography>
                </Container>
            </Box>
        ),
        category: 'Footers',
    },
    {
        title: 'Footer with Links',
        description: 'A footer containing links to the policy and terms pages.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">© 2025 Your Company</Typography>
        <Box>
            <Link href="/privacy" sx={{ color: 'white', mx: 1 }}>Privacy Policy</Link>
            <Link href="/terms" sx={{ color: 'white', mx: 1 }}>Terms of Service</Link>
        </Box>
    </Container>
</Box>`,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="body2">© 2025 Your Company</Typography>
                    <Box>
                        <Link href="/privacy" sx={{ color: 'white', mx: 1 }}>Privacy Policy</Link>
                        <Link href="/terms" sx={{ color: 'white', mx: 1 }}>Terms of Service</Link>
                    </Box>
                </Container>
            </Box>
        ),
        category: 'Footers',
    },
    {
        title: 'Footer with Social Icons',
        description: 'A footer containing social media icons.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2">Follow us on:</Typography>
        <Box>
            <Link href="https://facebook.com" sx={{ color: 'white', mx: 1 }}>Facebook</Link>
            <Link href="https://twitter.com" sx={{ color: 'white', mx: 1 }}>Twitter</Link>
            <Link href="https://linkedin.com" sx={{ color: 'white', mx: 1 }}>LinkedIn</Link>
        </Box>
    </Container>
</Box>`,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 3 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="body2">Follow us on:</Typography>
                    <Box>
                        <Link href="https://facebook.com" sx={{ color: 'white', mx: 1 }}>Facebook</Link>
                        <Link href="https://twitter.com" sx={{ color: 'white', mx: 1 }}>Twitter</Link>
                        <Link href="https://linkedin.com" sx={{ color: 'white', mx: 1 }}>LinkedIn</Link>
                    </Box>
                </Container>
            </Box>
        ),
        category: 'Footers',
    },
    {
        title: 'Footer with Multiple Columns',
        description: 'A footer divided into multiple sections with links.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
    <Container maxWidth="lg">
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Company</Typography>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>About Us</Link>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Careers</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Resources</Typography>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Blog</Link>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Help Center</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Legal</Typography>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Privacy Policy</Link>
                <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Terms of Service</Link>
            </Grid>
        </Grid>
    </Container>
</Box>`,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Company</Typography>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>About Us</Link>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Careers</Link>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Resources</Typography>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Blog</Link>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Help Center</Link>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Legal</Typography>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Privacy Policy</Link>
                            <Link href="#" sx={{ display: 'block', color: 'white', mt: 1 }}>Terms of Service</Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        ),
        category: 'Footers',
    },
    {
        title: 'Footer with Email Subscription',
        description: 'A footer with a newsletter subscription form.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h6">Subscribe to our Newsletter</Typography>
        <Box component="form" sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <TextField label="Your email" variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }} />
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>Subscribe</Button>
        </Box>
    </Container>
</Box>`,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">Subscribe to our Newsletter</Typography>
                    <Box component="form" sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <TextField label="Your email" variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }} />
                        <Button variant="contained" color="primary" sx={{ ml: 2 }}>Subscribe</Button>
                    </Box>
                </Container>
            </Box>
        ),
        category: 'Footers',
    },
    {
        title: 'Footer with Company Logo',
        description: 'A footer that includes a company logo.',
        code: `<Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4, textAlign: 'center' }}>
    <Container maxWidth="sm">
        <Box component="img" src="/logo.png" alt="Company Logo" sx={{ width: 120, mb: 2 }} />
        <Typography variant="body2">© 2025 Your Company. All rights reserved.</Typography>
    </Container>
</Box>
        `,
        preview: (
            <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 4, textAlign: 'center' }}>
                <Container maxWidth="sm">
                    <Box component="img" src="/logo.png" alt="Company Logo" sx={{ width: 120, mb: 2 }} />
                    <Typography variant="body2">© 2025 Your Company. All rights reserved.</Typography>
                </Container>
            </Box>
        ),
        category: 'Footers',
    }
];
