import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CircularProgressDemo = () => {
  const [progress, setProgress] = useState(50); // Default progress
  const [label, setLabel] = useState('Views');

  const dataSets = [
    {value: 50, label: 'Views'},
    {value: 70, label: 'Reached'},
    {value: 85, label: 'Interested'},
    {value: 40, label: 'Chats'},
  ];

  // Function to change progress and label dynamically
  const changeData = () => {
    const randomIndex = Math.floor(Math.random() * dataSets.length);
    setProgress(dataSets[randomIndex].value);
    setLabel(dataSets[randomIndex].label);
  };

  return (
    <View style={{alignItems: 'center', marginTop: 50}}>
      <AnimatedCircularProgress
        size={150}
        width={10}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#fff">
        {fill => (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {label}: {progress}%
          </Text>
        )}
      </AnimatedCircularProgress>

      <Button title="Change Data" onPress={changeData} />
    </View>
  );
};

export default CircularProgressDemo;
