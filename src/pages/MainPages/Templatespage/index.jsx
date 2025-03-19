/**
 * @file TemplatesPage component - Displays a list of UI component templates with filtering options.
 * @module TemplatesPage
 */

import React, { useState } from 'react';
import { Code, CopyAll, Check } from '@mui/icons-material';
import { Box, Card, CardContent, Typography, IconButton, Button, Stack } from '@mui/material';

import { templates } from './constants';
import { containerStyles, headerStyles, filterButtonStyles, cardStyles, codeBlockStyles } from './styles';

/**
 * CodeBlock component - Displays a code snippet with a copy-to-clipboard feature.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.code - The code snippet to display.
 * @returns {JSX.Element} The rendered CodeBlock component.
 */
const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    /**
     * Handles copying the code to the clipboard.
     * @async
     */
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Box sx={codeBlockStyles.container}>
            <IconButton onClick={handleCopy} sx={codeBlockStyles.iconButton}>
                {copied ? <Check /> : <CopyAll />}
            </IconButton>
            <pre style={codeBlockStyles.pre}>
                <code>{code}</code>
            </pre>
        </Box>
    );
};

/**
 * TemplatesPage component - Displays UI component templates with category filtering.
 * 
 * @returns {JSX.Element} The rendered TemplatesPage component.
 */
export const Templatespage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    /**
     * Extracts unique categories from the templates list.
     * @type {string[]}
     */
    const categories = [...new Set(templates.map(t => t.category))];

    /**
     * Filters templates based on the selected category.
     * @type {Array}
     */
    const filteredTemplates = selectedCategory === "All" ? templates : templates.filter(t => t.category === selectedCategory);

    return (
        <Box sx={containerStyles}>
            <Box sx={headerStyles.container}>
                <Typography variant="h3" gutterBottom>
                    UI Templates
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    A collection of reusable UI components for your projects
                </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={headerStyles.filterContainer}>
                <Button
                    variant={selectedCategory === "All" ? "contained" : "outlined"}
                    onClick={() => setSelectedCategory("All")}
                    sx={filterButtonStyles(selectedCategory === "All")}
                >
                    All
                </Button>
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "contained" : "outlined"}
                        onClick={() => setSelectedCategory(category)}
                        sx={filterButtonStyles(selectedCategory === category)}
                    >
                        {category}
                    </Button>
                ))}
            </Stack>
            <Box sx={{ display: 'grid', gap: 4 }}>
                {filteredTemplates.map((template, idx) => (
                    <Card key={idx} sx={cardStyles.card}>
                        <CardContent>
                            <Box sx={cardStyles.titleContainer}>
                                <Code sx={cardStyles.icon} />
                                <Typography variant="h5">{template.title}</Typography>
                            </Box>
                            <Typography variant="body1" color="textSecondary" sx={cardStyles.description}>
                                {template.description}
                            </Typography>
                            <Box sx={cardStyles.previewContainer}>
                                {template.preview}
                            </Box>
                            <CodeBlock code={template.code} />
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};
