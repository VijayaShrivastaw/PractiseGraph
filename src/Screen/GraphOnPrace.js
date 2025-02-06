import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { height, width } = Dimensions.get("screen");

const GraphOnPrace = () => {
    const [viewType, setViewType] = useState("day");
    const [modalVisible, setModalVisible] = useState(false);

    // Sample Instagram-like view data (Replace this with actual data from API)
    const viewCounts = {
        day: [50, 70, 120, 20, 300, 450, 500], // Last 7 days
        week: [1000, 1500, 180, 1200, 2300], // Last 5 weeks
        month: [5000, 7000, 800, 9000, 1000, 12000], // Last 6 months
        year: [30000, 4000, 2000, 60000, 70000], // Last 5 years
    };

    const getViewData = () => {
        switch (viewType) {
            case "day":
                return viewCounts.day;
            case "week":
                return viewCounts.week;
            case "month":
                return viewCounts.month;
            case "year":
                return viewCounts.year;
            default:
                return viewCounts.day;
        }
    };
    const getMaxValue = () => Math.max(...getViewData());

    const getXAxisLabels = () => {
        switch (viewType) {
            case "day":
                return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            case "week":
                return ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
            case "month":
                return ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
            case "year":
                return ["2019", "2020", "2021", "2022", "2023"];
            default:
                return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        }
    };

    // Function to check if the value is increasing or decreasing
    const getDotColor = (index) => {
        const data = getViewData();
        if (index === 0) return "green"; // First point, no previous to compare
        return data[index] > data[index - 1] ? "green" : "red";
    };

    return (
        <ScrollView style={{
            width: width,
            paddingHorizontal: 30,
            // alignItems:'center',

        }}>
            <Text
                style={{
                    color: 'red',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    textAlign: 'center',
                }}
            >
                View Count Graph
            </Text>

            {/* Line Chart */}
            <LineChart
                data={{
                    labels: getXAxisLabels(),
                    datasets: [{ data: getViewData() }],
                }}
                style={{
                    borderRadius: 10,
                    alignSelf: "center"
                }}
                width={width - 20}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                fromZero={true}
                segments={5} // Controls Y-Axis: 0, 100, 200, 300, ...
                chartConfig={{
                    backgroundGradientFrom: "rgba(241, 241, 241, 0.5)",
                    backgroundGradientTo: "rgba(253, 192, 192, 0.76)",
                    decimalPlaces: 0,
                    color: (opacity) => `rgba(10, 8, 10, 0.8)`,
                    style: { borderRadius: 16 },
                }}
                bezier // Makes the curve smooth
                renderDotContent={({ x, y, index }) => (
                    <Text
                        key={index}
                        style={{
                            position: 'absolute',
                            top: y - 20, // Position the percentage above the dot
                            left: x - 10, // Centered horizontally
                            fontSize: 12,
                            color: getDotColor(index), // Use the dynamic color here
                        }}
                    >
                        {Math.round((getViewData()[index] / getMaxValue()) * 100)}%
                    </Text>
                )}
            />

            {/* Dropdown Button */}
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                    backgroundColor: 'lightgray',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 20,
                    alignItems: 'center',
                    marginHorizontal: 50,
                }}
            >
                <Text style={{ fontSize: 16, color: 'black' }}>
                    Select View Type: {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                </Text>
            </TouchableOpacity>

            {/* Modal for Dropdown */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                            width: 250,
                        }}
                    >
                        {["day", "week", "month", "year"].map((type) => (
                            <TouchableOpacity
                                key={type}
                                onPress={() => {
                                    setViewType(type);
                                    setModalVisible(false);
                                }}
                                style={{
                                    paddingVertical: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ddd',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: viewType === type ? 'blue' : 'black',
                                        textAlign: 'center',
                                    }}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default GraphOnPrace;
