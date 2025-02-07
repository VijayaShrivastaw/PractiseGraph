import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export const BezierGraph = ({ data }) => {
  const width = Dimensions.get("window").width - 40; // Dynamic width
  const padding = 20; // Padding for the graph
  const maxDataValue = Math.max(...data);
  const minDataValue = Math.min(...data);
  const height = maxDataValue - minDataValue + padding * 2; // Dynamic height

  // Normalize data to fit within the graph height
  const normalize = (value) => {
    return height - ((value - minDataValue) / (maxDataValue - minDataValue)) * height;
  };

  // Convert data into points
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * width, // Spacing based on width
    y: normalize(value), // Normalized height
  }));

  // Function to generate Bezier path
  const createBezierPath = (points) => {
    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`; // Move to first point

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];

      // Control points for smooth Bezier curve
      const cx = (current.x + next.x) / 2;
      const cy = (current.y + next.y) / 2;

      path += ` Q ${cx} ${current.y}, ${next.x} ${next.y}`;
    }

    return path;
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Svg width={width} height={height + padding}>
        <Path d={createBezierPath(points)} stroke="blue" strokeWidth="3" fill="none" />
      </Svg>
    </View>
  );
};
