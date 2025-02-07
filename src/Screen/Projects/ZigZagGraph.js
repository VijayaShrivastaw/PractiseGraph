import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export const ZigzagGraph = ({ data }) => {
  const width = Dimensions.get("window").width - 100; // Dynamic width
  const padding = 20; // Padding for the graph
  const maxDataValue = Math.max(...data);
  const minDataValue = Math.min(...data);
  const height = (maxDataValue - minDataValue )/2 ; // Dynamic height

  // Normalize data to fit within the graph height
  const normalize = (value) => {
    return height - ((value - minDataValue) / (maxDataValue - minDataValue)) * height;
  };

  // Convert data into points
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * width/3, // Spacing based on width
    y: normalize(value), // Normalized height
  }));

  // Create path for SVG
  const pathData = points
    .map((point, index) => (index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`))
    .join(" ");

  return (
    <View style={{
    
     }}>
      <Svg width={width/2} height={height }>
        <Path d={pathData} stroke="blue" strokeWidth="3" fill="none" />
      </Svg>
    </View>
  );
};

