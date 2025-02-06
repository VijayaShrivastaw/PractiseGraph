import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import GraphOnPrace from "./GraphOnPrace";
import GraphChartScreen4 from "./GraphChartScreen4";

const ChartScreen = () => {
    const [viewType, setViewType] = useState("day");

    // Sample Instagram-like view data (Replace this with actual data from API)
    const viewCounts = {
        day: [50, 70, 120, 200, 300, 450, 500], // Last 7 days
        week: [1000, 1500, 1800, 2000, 2300], // Last 5 weeks
        month: [5000, 7000, 8000, 9000, 10000, 12000], // Last 6 months
        year: [30000, 40000, 50000, 60000, 70000], // Last 5 years
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

    return (
        <ScrollView>
            {/* <Text
                style={{
                    color: 'red',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    textAlign: 'center',
                }}
            >
                View Count Graph
            </Text> */}

            {/* Line Chart */}
            {/* <LineChart
                data={{
                    labels: getXAxisLabels(),
                    datasets: [{ data: getViewData() }],
                }}
                width={350}
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
            />

       
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                {["day", "week", "month", "year"].map((type) => (
                    <TouchableOpacity key={type} onPress={() => setViewType(type)}>
                        <Text style={{ color: viewType === type ? 'blue' : 'black', fontSize: 16 }}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View> */}
            <GraphOnPrace
            />
            {/* <GraphChartScreen4/> */}
        </ScrollView>
    );
};

export default ChartScreen;
