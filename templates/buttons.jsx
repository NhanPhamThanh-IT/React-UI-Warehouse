/**
 * This file contains the data for the buttons template.
 * Each object in the 'buttons' array represents a different button example.
 * Each button object has the following properties:
 * - title: the title of the button example
 * - description: a brief description of the button example
 * - code: the code snippet for the button example
 * - preview: the JSX preview of the button example
 * - category: the category of the button example
 */

/**
 * Import necessary components from Material-UI
 */
import { Button, Stack } from '@mui/material';

/**
 * Import necessary components from Material-UI icons
 */
import { CircularProgress } from '@mui/material';
import Icon from '@mui/material/Icon';

/**
 * 
 * Define the buttons array, which contains objects representing different button examples.
 * Each button object has the following properties:
 * - title: the title of the button example
 * - description: a brief description of the button example
 * - code: the code snippet for the button example
 * - preview: the JSX preview of the button example
 * - category: the category of the button example
 */
export const buttons = [
    {
        title: 'Basic Button',
        description: 'A standard button with default styling.',
        code: `<Button variant="contained">Click Me</Button>`,
        preview: (
            <Button variant="contained">Click Me</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Outlined Button',
        description: 'A button with an outlined style.',
        code: `<Button variant="outlined">Click Me</Button>`,
        preview: (
            <Button variant="outlined">Click Me</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Text Button',
        description: 'A button with no background, just text.',
        code: `<Button variant="text">Click Me</Button>`,
        preview: (
            <Button variant="text">Click Me</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Icon Button',
        description: 'A button that contains only an icon.',
        code: `<Button variant="contained" startIcon={<Icon>star</Icon>}>Favorite</Button>`,
        preview: (
            <Button variant="contained" startIcon={<Icon>star</Icon>}>Favorite</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Loading Button',
        description: 'A button with a loading spinner.',
        code: `<Button variant="contained" disabled>
    <CircularProgress size={24} />
</Button>
        `,
        preview: (
            <Button variant="contained" disabled>
                <CircularProgress size={24} />
            </Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Full-Width Button',
        description: 'A button that expands to the full width of its container.',
        code: `<Button variant="contained" fullWidth>Full Width</Button>`,
        preview: (
            <Button variant="contained" fullWidth>Full Width</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Button with Different Sizes',
        description: 'Buttons with small, medium, and large sizes.',
        code: `<Stack spacing={2} direction="row">
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
</Stack>`,
        preview: (
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
        ),
        category: 'Buttons',
    },
    {
        title: 'Disabled Button',
        description: 'A button that is disabled.',
        code: `<Button variant="contained" disabled>Disabled</Button>`,
        preview: (
            <Button variant="contained" disabled>Disabled</Button>
        ),
        category: 'Buttons',
    },
    {
        title: 'Button with Custom Color',
        description: 'A button with a different color, like success or warning.',
        code: `<Button variant="contained" color="success">Success</Button>`,
        preview: (
            <Button variant="contained" color="success">Success</Button>
        ),
        category: 'Buttons',
    }
];
