import React from "react";
import PropTypes from "prop-types";

const color = "#F1726F";

const HeartIcon = ({isFull, size, withStroke}) => {
    const calculatedHeight = size - ((13*size)/100)
    console.log(calculatedHeight)
    return (
        <svg width={size} height={`${calculatedHeight}`} viewBox={`0 0 ${size} ${calculatedHeight}`} fill="none">
            <path
                d="M7.52632 12.75C7.43281 12.7506 7.34011 12.7317 7.25354 12.6943C7.16697 12.657 7.08824 12.602 7.02184 12.5325L1.50106 6.69751C0.808549 5.9589 0.420105 4.96169 0.420105 3.92251C0.420105 2.88334 0.808549 1.88613 1.50106 1.14751C2.19898 0.412896 3.14438 0.000366211 4.13 0.000366211C5.11562 0.000366211 6.06103 0.412896 6.75895 1.14751L7.52632 1.95751L8.29369 1.14751C8.99161 0.412896 9.93701 0.000366211 10.9226 0.000366211C11.9083 0.000366211 12.8537 0.412896 13.5516 1.14751C14.2441 1.88613 14.6325 2.88334 14.6325 3.92251C14.6325 4.96169 14.2441 5.9589 13.5516 6.69751L8.03079 12.5325C7.9644 12.602 7.88566 12.657 7.79909 12.6943C7.71252 12.7317 7.61983 12.7506 7.52632 12.75Z"
                fill={`${isFull ? color : "none"}`}
                stroke={`${withStroke ? "black" :"none"}`}
            />
        </svg>
    );
};

HeartIcon.defaultProps = {
    isFull: false,
    size: "15",
    withStroke: true
};
HeartIcon.propTypes = {
    isFull: PropTypes.bool,
    size: PropTypes.string,
    withStroke: PropTypes.bool
};

export default HeartIcon;
