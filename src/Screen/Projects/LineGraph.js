import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const { height, width } = Dimensions.get('screen');

const LineGraph = ({ label, percentage, color }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const widthInterpolate = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {percentage}%</Text>
      <View style={styles.graphContainer}>
        <Animated.View style={[styles.filledBar, { width: widthInterpolate, backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
// width:width/2
  },
  label: {
    fontSize: responsiveFontSize(1.6),
    // fontWeight: "bold",
    marginBottom: 5,
    color:'#000'
  },
  graphContainer: {
    width: width / 4,
    height: responsiveHeight(1),
    borderRadius: 6,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
  },
  filledBar: {
    height: "100%",
  },
});

export default LineGraph;
