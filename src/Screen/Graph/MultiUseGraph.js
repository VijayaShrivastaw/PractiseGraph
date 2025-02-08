import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Svg, {Circle, Path} from 'react-native-svg';

const {height, width} = Dimensions.get('screen');

// Create an Animated version of the Path component
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const MultiUseGraph = ({count, label, color}) => {
  const size = responsiveHeight(9); // Circle size
  const strokeWidth = 6; // Stroke thickness
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = (count / 100) * circumference;

  // Animated value for progress
  const [animatedProgress] = useState(new Animated.Value(0));

  // Function to create a zig-zag path
  const createZigZagPath = () => {
    let path = '';
    const step = 15; // Zig-Zag step size
    for (let i = 0; i < 360; i += step) {
      const angle = (i * Math.PI) / 180;
      const x = size / 2 + radius * Math.cos(angle);
      const y = size / 2 + radius * Math.sin(angle);
      path += `${i === 0 ? 'M' : 'L'}${x},${y} `;
    }
    return path;
  };

  useEffect(() => {
    // Trigger animation when count changes
    Animated.timing(animatedProgress, {
      toValue: progress, // Animate to the calculated progress
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // We cannot use native driver for strokeDasharray animations
    }).start();
  }, [count, progress]);

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

        {/* Animated Zig-Zag Progress (Wrapped in AnimatedPath) */}
        <AnimatedPath
          d={createZigZagPath()}
          stroke={color} // Color of the progress
          strokeWidth={strokeWidth}
          strokeDasharray={circumference} // Full circumference for the stroke
          strokeDashoffset={animatedProgress.interpolate({
            inputRange: [0, circumference], // Animate from no progress (circumference) to full progress (0)
            outputRange: [circumference, 0], // Stroke is hidden initially and gradually revealed
          })}
          fill="none"
        />
      </Svg>

      {/* Centered Text */}
      <View style={styles.textContainer}>
        <Text style={[styles.text, {color}]}>{count}%</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: 'bold',
  },
  label: {
    fontSize: responsiveFontSize(1.2),
    color: '#000',
  },
});
