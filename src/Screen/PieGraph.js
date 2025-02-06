import React, { useState } from "react";
import { View, Text, Image, Button, Modal, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";

const dummyData = [
  {
    id: 1,
    name: "Luxury Villa",
    image: "https://via.placeholder.com/150",
    views: {
      daily: [1, 4, 8, 12, 16, 20, 2],
      weekly: [100, 200, 150, 300, 250, 400, 350],
      monthly: [500, 600, 700, 800, 900, 1000, 1100],
      yearly: [5000, 6000, 7000, 8000, 9000, 10000, 11000],
      fiveYear: [25000, 26000, 27000, 28000, 29000, 30000, 31000],
      allTime: [50000, 55000, 60000, 65000, 70000, 75000, 80000]
    },
    postDate: "2024-01-01",
    trademarkOwner: "John Doe",
  }
];

const PieGraph = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewType, setViewType] = useState("daily");

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setModalVisible(true);
  };

  const getXAxisLabels = () => {
    // X-axis labels corresponding to each data type
    return ["Day", "Week", "Month", "Year", "5 Year", "All Time"];
  };

  return (
    <ScrollView>
      {dummyData.map((property) => (
        <View key={property.id} style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{property.name}</Text>
          <Image source={{ uri: property.image }} style={{ width: 100, height: 100 }} />
          <Text>Trademark Owner: {property.trademarkOwner}</Text>
          <Text>Posted On: {property.postDate}</Text>
          <Button title="View Details" onPress={() => handleViewDetails(property)} />
        </View>
      ))}
      <Modal visible={modalVisible} animationType="slide">
        {selectedProperty && (
          <View style={{ padding: 20 }}>
            <Text>{selectedProperty.name}</Text>
            <Image source={{ uri: selectedProperty.image }} style={{ width: 150, height: 150 }} />
            <Text>Trademark Owner: {selectedProperty.trademarkOwner}</Text>
            <Text>Posted On: {selectedProperty.postDate}</Text>

            {/* Line Chart */}
            <LineChart
              data={{
                // labels: getXAxisLabels(), // Set x-axis labels based on selected viewType
                datasets: [
                  {
                    data: selectedProperty.views[viewType], // Dynamically change dataset based on viewType
                  },
                ],
              }}
              width={300}
              height={200}
              yAxisLabel=""
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
            />

            {/* X-axis Buttons for viewType */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
              {["daily", "weekly", "monthly", "yearly", "fiveYear", "allTime"].map((type) => (
                <TouchableOpacity key={type} onPress={() => setViewType(type)}>
                  <Text style={{ color: 'blue', fontSize: 16 }}>
                    {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalize the first letter */}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        )}
      </Modal>
    </ScrollView>
  );
};

export default PieGraph;
