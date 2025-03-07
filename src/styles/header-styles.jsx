// Desc: Styles for the Header component

// Defining the headerStyles object
const headerStyles = {
    appBar: {
        position: "static",
        boxShadow: 2,
        color: "white",
        backgroundColor: "black"
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        color: "white"
    },
    navButtons: {
        display: { xs: "none", md: "flex" },
        gap: 2,
    },
    buttonLabel: {
        fontWeight: 600,
        textTransform: "none",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: "white",
            color: "black"
        },
        transition: "all 0.3s"
    },
    menuIcon: {
        display: { xs: "block", md: "none" },
        color: "white"
    },
    drawerBox: {
        width: 250
    }
};

// Exporting the headerStyles object
export default headerStyles;