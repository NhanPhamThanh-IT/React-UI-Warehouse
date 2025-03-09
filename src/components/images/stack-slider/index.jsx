/**
 * Import necessary libraries
 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

/**
 * Import constants for the component
 */
import { settings } from "./constants";

/**
 * Import custom styles
 */
import { styles } from "./styles";

/**
 * StackImageSlider component displays a slider containing a list of images.
 *
 * @component
 * @example
 * const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
 * return <StackImageSlider images={images} />;
 *
 * @param {Object} props - Component properties.
 * @param {string[]} props.images - An array containing the URLs of the images to be displayed in the slider.
 * @returns {JSX.Element} A slider component displaying a list of images.
 */
export const StackImageSlider = ({ images }) => {
    return (
        <Box sx={styles.slider}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`slide-${index}`}
                        sx={styles.slide}
                    />
                ))}
            </Slider>
        </Box>
    );
};
