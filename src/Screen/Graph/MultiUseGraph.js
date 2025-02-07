import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import Svg, { Circle, Path } from "react-native-svg";

const { height, width } = Dimensions.get('screen')
export const MultiUseGraph = ({ count, label, color }) => {
    const size = responsiveHeight(9); // Circle size
    const strokeWidth = 6; // Stroke thickness
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (count / 100) * circumference;

    // Function to create a zig-zag path
    const createZigZagPath = () => {
        let path = "";
        const step = 15; // Zig-Zag step size
        for (let i = 0; i < 360; i += step) {
            const angle = (i * Math.PI) / 180;
            const x = size / 2 + radius * Math.cos(angle);
            const y = size / 2 + radius * Math.sin(angle);
            path += `${i === 0 ? "M" : "L"}${x},${y} `;
        }
        return path;
    };

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Zig-Zag Progress */}
                <Path
                    d={createZigZagPath()}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${progress}, ${circumference}`}
                    fill="none"
                />
            </Svg>

            {/* Centered Text */}
            <View style={styles.textContainer}>
                <Text style={[styles.text, { color }]}>{count}%</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    textContainer: {
        position: "absolute",
        alignItems: "center",
    },
    text: {
        fontSize: responsiveFontSize(1.4),
        fontWeight: "bold",
    },
    label: {
        fontSize: responsiveFontSize(1.2),
        color: "#000",
    },
});
