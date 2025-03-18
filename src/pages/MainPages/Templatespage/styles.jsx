/**
 * Styles for the main container that wraps the entire application.
 * Provides full viewport height and applies a background color with padding.
 * 
 * @constant {Object} containerStyles
 * @property {string} minHeight - Ensures the container takes at least the full viewport height.
 * @property {string} bgcolor - Sets the background color to a light grey.
 * @property {number} py - Vertical padding applied to the container.
 * @property {number} px - Horizontal padding applied to the container.
 */
export const containerStyles = {
    minHeight: '100vh',
    bgcolor: 'grey.100',
    py: 6,
    px: 3,
};

/**
 * Styles for the header section, including both the main header container and filter controls.
 * This defines the maximum width, alignment, and spacing for elements within the header.
 * 
 * @constant {Object} headerStyles
 * @property {Object} container - Contains styles for the main header layout.
 * @property {string} container.maxWidth - Restricts the maximum width to a large size.
 * @property {string} container.mx - Centers the header using auto margin.
 * @property {string} container.textAlign - Aligns the text content to the center.
 * @property {number} container.mb - Adds bottom margin for spacing.
 * @property {Object} filterContainer - Contains styles for the filter section within the header.
 * @property {number} filterContainer.mb - Adds bottom margin for spacing.
 * @property {string} filterContainer.justifyContent - Centers the filter elements horizontally.
 */
export const headerStyles = {
    container: {
        maxWidth: 'lg',
        mx: 'auto',
        textAlign: 'center',
        mb: 6,
    },
    filterContainer: {
        mb: 4,
        justifyContent: 'center',
    },
};

/**
 * Generates styles for filter buttons based on their selection state.
 * 
 * @function filterButtonStyles
 * @param {boolean} isSelected - Determines if the button is currently selected.
 * @returns {Object} - The style object containing the button variant.
 * @property {string} variant - Defines the button appearance (contained if selected, outlined otherwise).
 */
export const filterButtonStyles = (isSelected) => ({
    variant: isSelected ? 'contained' : 'outlined',
});

/**
 * Styles for card components, including layout and visual properties for different elements within a card.
 * 
 * @constant {Object} cardStyles
 * @property {Object} card - General styles for the card container.
 * @property {string} card.overflow - Prevents content overflow within the card.
 * @property {Object} titleContainer - Styles for the title section within the card.
 * @property {string} titleContainer.display - Uses flexbox for layout alignment.
 * @property {string} titleContainer.alignItems - Vertically aligns items in the title container.
 * @property {number} titleContainer.mb - Adds bottom margin for spacing.
 * @property {Object} icon - Styles for icons displayed in the card header.
 * @property {number} icon.mr - Adds right margin for spacing next to the title.
 * @property {string} icon.color - Sets the icon color to the primary theme color.
 * @property {Object} description - Styles for the description text within the card.
 * @property {number} description.mb - Adds bottom margin for spacing.
 * @property {Object} previewContainer - Styles for preview sections inside the card.
 * @property {number} previewContainer.mb - Adds bottom margin for spacing.
 * @property {number} previewContainer.p - Adds padding inside the preview container.
 * @property {string} previewContainer.bgcolor - Sets the background color to light grey.
 * @property {number} previewContainer.borderRadius - Rounds the corners of the preview container.
 */
export const cardStyles = {
    card: {
        overflow: 'hidden',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        mb: 2,
    },
    icon: {
        mr: 1,
        color: 'primary.main',
    },
    description: {
        mb: 2,
    },
    previewContainer: {
        mb: 2,
        p: 2,
        bgcolor: 'grey.50',
        borderRadius: 1,
    },
};

/**
 * Styles for code blocks, ensuring proper layout, color scheme, and spacing.
 * 
 * @constant {Object} codeBlockStyles
 * @property {Object} container - Styles for the main code block container.
 * @property {string} container.position - Positions the container relative to allow absolute child elements.
 * @property {string} container.bgcolor - Sets the background color to dark grey.
 * @property {number} container.p - Adds padding inside the container.
 * @property {number} container.borderRadius - Rounds the container corners for a smooth look.
 * @property {string} container.color - Sets the text color to white for contrast.
 * @property {string} container.overflowX - Enables horizontal scrolling for long lines of code.
 * @property {Object} iconButton - Styles for the icon button within the code block.
 * @property {string} iconButton.position - Positions the button absolutely within the container.
 * @property {number} iconButton.top - Sets the distance from the top of the container.
 * @property {number} iconButton.right - Sets the distance from the right of the container.
 * @property {string} iconButton.color - Sets the button color to white for visibility.
 * @property {Object} pre - Styles for the preformatted text inside the code block.
 * @property {number} pre.margin - Removes margin for clean alignment.
 * @property {string} pre.whiteSpace - Ensures proper formatting by wrapping preformatted text.
 */
export const codeBlockStyles = {
    container: {
        position: 'relative',
        bgcolor: 'grey.900',
        p: 2,
        borderRadius: 2,
        color: 'white',
        overflowX: 'auto',
    },
    iconButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        color: 'white',
    },
    pre: {
        margin: 0,
        whiteSpace: 'pre-wrap',
    },
};
