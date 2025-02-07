import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const AllTypeGraph = () => {
  const viewPercentage = 70; // Change this to test different percentages

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Different Graph Representations</Text>

      {/* 1. Horizontal Bar Graph */}
      <Text style={styles.label}>Horizontal Bar Graph</Text>
      <View style={styles.barContainer}>
        <View style={[styles.filledBar, { width: `${viewPercentage}%` }]} />
        <View style={[styles.unfilledBar, { width: `${100 - viewPercentage}%` }]} />
      </View>

      {/* 2. Zig-Zag Line Graph */}
      <Text style={styles.label}>Zig-Zag Line Graph</Text>
      <Svg width={300} height={50}>
        <Path d={createZigZagPath(10, 300, 50)} stroke="gray" strokeWidth="4" fill="none" />
        <Path d={createZigZagPath(7, (viewPercentage / 100) * 300, 50)} stroke="blue" strokeWidth="4" fill="none" />
      </Svg>

      {/* 3. Circular Progress Graph */}
      <Text style={styles.label}>Circular Progress Graph</Text>
      <Svg width={150} height={150}>
        <Circle cx="75" cy="75" r="60" stroke="gray" strokeWidth="6" fill="none" />
        <Circle
          cx="75"
          cy="75"
          r="60"
          stroke="blue"
          strokeWidth="6"
          fill="none"
          strokeDasharray={`${(viewPercentage / 100) * 2 * Math.PI * 60}, ${2 * Math.PI * 60}`}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.percentageText}>{viewPercentage}%</Text>

      {/* 4. Zig-Zag Circular Graph */}
      <Text style={styles.label}>Zig-Zag Circular Graph</Text>
      <Svg width={150} height={150}>
        <Path
          d={createZigZagCircle(75, 75, 60, 12)}
          stroke="gray"
          strokeWidth="4"
          fill="none"
        />
        <Path
          d={createZigZagCircle(75, 75, 60, 8)}
          stroke="blue"
          strokeWidth="4"
          strokeDasharray={`${(viewPercentage / 100) * 2 * Math.PI * 60}, ${2 * Math.PI * 60}`}
          fill="none"
        />
      </Svg>
      <Text style={styles.percentageText}>{viewPercentage}%</Text>

    </ScrollView>
  );
};

// Function to create a Zig-Zag Line Path
const createZigZagPath = (segments, width, height) => {
  let path = `M0,${height / 2} `;
  for (let i = 0; i < segments; i++) {
    const x = (i + 1) * (width / segments);
    const y = i % 2 === 0 ? 0 : height;
    path += `L${x},${y} `;
  }
  return path;
};

// Function to create Zig-Zag Circular Path
const createZigZagCircle = (cx, cy, r, segments) => {
  let path = "";
  for (let i = 0; i < 360; i += 360 / segments) {
    const angle = (i * Math.PI) / 180;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += `${i === 0 ? "M" : "L"}${x},${y} `;
  }
  return path;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  barContainer: {
    flexDirection: "row",
    width: "80%",
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 5,
  },
  filledBar: {
    height: "100%",
    backgroundColor: "blue",
  },
  unfilledBar: {
    height: "100%",
    backgroundColor: "gray",
  },
  percentageText: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -75,
  },
});

export default AllTypeGraph;
