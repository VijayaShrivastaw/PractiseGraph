import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const GraphChartScreen4 = () => {
    const [viewType, setViewType] = useState("day");
    const [modalVisible, setModalVisible] = useState(false);

    // Sample Instagram-like view data (Replace this with actual data from API)
    const viewCounts = {
        day: [50, 70, 120, 200, 300, 450, 500, 600, 700, 750, 800, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000], // Hourly data for a day (24 hours)
        week: [1000, 1500, 1800, 2000, 2300, 2500, 2700], // Daily data for a week (7 days)
        month: [5000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 17000, 19000, 20000, 22000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000, 41000], // Daily data for a month (30 days)
        year: [30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000], // Monthly data for a year (12 months)
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

    const getXAxisLabels = () => {
        switch (viewType) {
            case "day":
                return [
                    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", 
                    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", 
                    "20:00", "21:00", "22:00", "23:00"
                ]; // Hourly data for a day
            case "week":
                return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // Day data for a week
            case "month":
                return [
                    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
                    "11", "12", "13", "14", "15", "16", "17", "18", "19", 
                    "20", "21", "22", "23", "24", "25", "26", "27", "28", 
                    "29", "30"
                ]; // Day data for a month (30 days)
            case "year":
                return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // Monthly data for a year
            default:
                return ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", 
                    "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", 
                    "20:00", "21:00", "22:00", "23:00"];
        }
    };

    // Calculate percentage for each data point based on the max value
    const calculatePercentage = (data) => {
        const maxValue = Math.max(...data);
        return data.map((point) => ((point / maxValue) * 100).toFixed(1)); // Percentage of each point
    };

    const percentages = calculatePercentage(getViewData());

    return (
        <ScrollView>
            <Text
                style={{
                    color: 'red',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    textAlign: 'center',
                }}
            >
                Instagram View Count Graph
            </Text>

            {/* Line Chart */}
            <LineChart
                data={{
                    labels: getXAxisLabels(),
                    datasets: [{ data: getViewData() }],
                }}
                width={screenWidth}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                fromZero={true}
                segments={5} // Controls Y-Axis: 0, 100, 200, 300, ...
                chartConfig={{
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
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
                            color: 'black',
                        }}
                    >
                        {percentages[index]}%
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

export default GraphChartScreen4;
