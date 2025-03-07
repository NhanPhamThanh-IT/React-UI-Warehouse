// Importing necessary libraries and tools
import React from 'react';
import { Button } from '@mui/material';

/**
 * A customizable action button component using Material-UI.
 *
 * @param {object} props - The props for the ActionButton component.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {React.ReactNode} [props.icon] - The optional start icon of the button.
 * @param {object} [props.sx] - Additional styling using the sx prop.
 * @returns {JSX.Element} The rendered ActionButton component.
 */
export const ActionButton = ({ children, icon, sx, ...props }) => (
    <Button
        variant="contained"
        startIcon={icon}
        {...props}
        sx={{
            px: 2,
            py: 1,
            textTransform: 'none',
            borderRadius: 2,
            ...sx,
        }}
    >
        {children}
    </Button>
);
