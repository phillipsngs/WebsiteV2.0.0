import React from "react";
import styles from "@/pages/about/About.module.scss";
import Image from "next/image";
import pictures from "@/assets/images/phillips.jpg";

interface Svg {
    width: number;
    height: number;
    stroke: string;
}

export default function MailIcon({width, height, stroke}: Svg) {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier"
               stroke-width="0">
            </g>
            <g id="SVGRepo_tracerCarrier"
               stroke-linecap="round"
               stroke-linejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke={stroke}
                      stroke-width="1.6"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                <rect x="3" y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke={stroke}
                      stroke-width="1.6"
                      stroke-linecap="round"></rect>
            </g>
        </svg>
    )
}

