import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, Paper } from "@mui/material";
import L from "leaflet";

// Custom icon for markers
const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// List of capital cities with coordinates
const capitalCities = [
    { name: "Hanoi, Vietnam", position: [21.0285, 105.8542] },
    { name: "Tokyo, Japan", position: [35.6895, 139.6917] },
    { name: "Paris, France", position: [48.8566, 2.3522] },
    { name: "Washington D.C., USA", position: [38.9072, -77.0369] },
    { name: "London, UK", position: [51.5074, -0.1278] },
    { name: "Berlin, Germany", position: [52.5200, 13.4050] },
];

export const WorldMap = () => {
    return (
        <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                World Map with Capital Cities
            </Typography>
            <Paper elevation={3} sx={{ p: 2, display: "inline-block" }}>
                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    style={{ height: "500px", width: "800px", borderRadius: "10px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {capitalCities.map((city, index) => (
                        <Marker key={index} position={city.position} icon={customIcon}>
                            <Popup>{city.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Paper>
        </Box>
    );
};
