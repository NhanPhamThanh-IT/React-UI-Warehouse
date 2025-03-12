export const styles = {
    drawer: (open) => ({
        width: open ? 180 : 80,
        flexShrink: 0,
        transition: "width 0.3s ease-in-out",
        "& .MuiDrawer-paper": {
            width: open ? 180 : 80,
            transition: "width 0.3s ease-in-out",
            background: "linear-gradient(135deg, #1E1F29, #2E3245)",
            color: "#fff",
            overflowX: "hidden",
            pt: 8,
            boxShadow: "4px 0 10px rgba(0,0,0,0.2)",
            borderRight: "1px solid rgba(255,255,255,0.1)"
        },
    }),

    listItem: (open) => ({
        justifyContent: open ? "flex-end" : "center",
    }),


    iconButton: {
        color: "#fff",
        mx: 1,
    },

    divider: {
        background: "rgba(255,255,255,0.2)",
        my: 1,
    },

    sectionBox: (open) => ({
        py: 1,
    }),

    sectionTitle: {
        color: "rgba(255,255,255,0.7)",
        px: 2,
        fontWeight: "bold",
    },

    listItemButton: (open) => ({
        px: open ? 2.5 : 1.5,
        borderRadius: "8px",
        my: 0.5,
    }),

    listItemIcon: {
        color: "#fff",
        minWidth: 40,
    },
};
