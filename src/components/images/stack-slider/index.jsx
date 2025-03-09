/**
 * Import necessary libraries.
 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

/**
 * Import slider configuration constants.
 */
import { settings } from "./constants";

/**
 * Import custom styles for the slider component.
 */
import { styles } from "./styles";

/**
 * StackImageSlider is a component that renders an image slider using react-slick.
 *
 * @component
 * @example
 * // Example usage:
 * const data = { images: ["image1.jpg", "image2.jpg", "image3.jpg"] };
 * return <StackImageSlider data={data} />;
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.data - Data object containing image details.
 * @param {string[]} props.data.images - Array of image URLs to be displayed in the slider.
 * @returns {JSX.Element} A slider component that displays a list of images.
 */
export const StackImageSlider = ({ data }) => {
    const { images } = data;

    return (
        <Box sx={styles.slider}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`Slide ${index + 1}`}
                        sx={styles.slide}
                    />
                ))}
            </Slider>
        </Box>
    );
};
