import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const propertyData = {
  property: {
    id: 1,
    name: 'Luxury Villa',
    photo: 'https://example.com/property.jpg',
    datePosted: '2024-02-01',
    amenities: ['Pool', 'Gym', 'Parking'],
    insights: {
      views: 120,
      reachedPersons: 80,
      interestedPersons: 35,
      regionData: [
        {region: 'New York', views: 50},
        {region: 'Los Angeles', views: 30},
        {region: 'Chicago', views: 40},
      ],
      chatInitiated: 10,
    },
  },
};

const DummyScreen = () => {
  const {property} = propertyData;

  return (
    <ScrollView style={{padding: 16}}>
      {/* Property Identity */}
      <Image
        source={{uri: property.photo}}
        style={{width: '100%', height: 200, borderRadius: 10}}
      />
      <Text style={{fontSize: 22, fontWeight: 'bold', marginVertical: 8}}>
        {property.name}
      </Text>
      <Text style={{color: 'gray'}}>Posted on: {property.datePosted}</Text>
      <Text style={{marginVertical: 8}}>
        Amenities: {property.amenities.join(', ')}
      </Text>

      {/* Insights */}
      <FlatList
        data={[
          {label: 'Views', value: property.insights.views},
          {label: 'Reached Persons', value: property.insights.reachedPersons},
          {
            label: 'Interested Persons',
            value: property.insights.interestedPersons,
          },
          {label: 'Chat Initiated', value: property.insights.chatInitiated},
        ]}
        keyExtractor={item => item.label}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              margin: 5,
              backgroundColor: '#eee',
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.label}</Text>
            <Text style={{fontSize: 18, color: 'blue'}}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Region-based Graph */}
      <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
        Region-Based Views
      </Text>
      <BarChart
        data={{
          labels: property.insights.regionData.map(d => d.region),
          datasets: [{data: property.insights.regionData.map(d => d.views)}],
        }}
        width={350}
        height={300}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: () => '#000',
        }}
        verticalLabelRotation={30}
      />
    </ScrollView>
  );
};

export default DummyScreen;
