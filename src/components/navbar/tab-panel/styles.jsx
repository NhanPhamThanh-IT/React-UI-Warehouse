/**
 * Styles object for layout components.
 * 
 * @constant {Object} styles - Contains styling properties.
 * @property {Object} styles.contentContainer - Styling for the content container.
 * @property {number} styles.contentContainer.mt - Margin top value.
 * @property {number} styles.contentContainer.py - Vertical padding (top & bottom).
 * @property {number} styles.contentContainer.mx - Horizontal margin (left & right).
 * @property {number} styles.contentContainer.px - Horizontal padding (left & right).
 * @property {string} styles.contentContainer.textAlign - Text alignment for the content.
 * @property {string} styles.contentContainer.border - Border style.
 * @property {string} styles.contentContainer.borderRadius - Border radius value.
 * @property {string} styles.contentContainer.boxShadow - Box shadow effect.
 * 
 * @property {Object} styles.content - Styling for the text content.
 * @property {string} styles.content.color - Text color.
 */
export const styles = {
    contentContainer: {
        mt: 3,
        py: 1,
        mx: 4,
        px: 4,
        textAlign: "justify",
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    content: {
        color: "#454c54",
    }
};
