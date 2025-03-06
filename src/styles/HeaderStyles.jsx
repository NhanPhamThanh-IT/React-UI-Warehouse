// Desc: Styles for the Header component

// Defining the headerStyles object
const headerStyles = {
    appBar: {
        position: "static",
        color: "default",
        boxShadow: 2
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        color: "#4F46E5"
    },
    navButtons: {
        display: { xs: "none", md: "flex" },
        gap: 2
    },
    menuIcon: {
        display: { xs: "block", md: "none" }
    },
    drawerBox: {
        width: 250
    }
};

// Exporting the headerStyles object
export default headerStyles;
