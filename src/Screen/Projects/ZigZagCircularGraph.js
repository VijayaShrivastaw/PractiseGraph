import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export const ZigZagCircularGraph = ({ count }) => {
  const size = 150; // Circle size
  const strokeWidth = 6; // Stroke thickness
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // Full circle length
  const progress = (count / 100) * circumference; // Visible zig-zag length
  
  // Function to create a zig-zag pattern
  const createZigZagPath = () => {
    let path = "";
    const step = 10; // Distance between peaks
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
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Zig-Zag Circular Progress */}
        <Path
          d={createZigZagPath()} // Generates zig-zag
          stroke="blue"
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress}, ${circumference}`} // Controls how much is visible
          fill="none"
        />
      </Svg>
      
      {/* Text at Center */}
      <Text style={styles.text}>{count}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
  },
});


