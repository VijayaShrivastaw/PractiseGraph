import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('screen');

const PropertyScreen = () => {
  const route = useRoute();
  const [animationValue] = useState(new Animated.Value(0)); // Animated value for the animation
  const {item} = route.params;
  useEffect(() => {
    // Trigger the animation when the component mounts
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);

  // Calculate the animated population values for the pie chart
  const animatedData = [
    {name: 'Likes', population: item.insights.likes * animationValue._value},
    {
      name: 'Views',
      population: item.viewCounts.allTime * animationValue._value,
    },
    {
      name: 'Reached Person',
      population: item.insights.reachedPersons * animationValue._value,
    },
    {
      name: 'Interested Person',
      population: item.insights.interestedPersons * animationValue._value,
    },
    {
      name: 'Chats',
      population: item.insights.chatInitiated * animationValue._value,
    },
    {
      name: 'Interested Persons',
      population: item.insights.interestedPersons * animationValue._value,
    },
  ];

  const insets = useSafeAreaInsets();
  const formatDate = isoDate => {
    const date = new Date(isoDate);
    if (isoDate === undefined) {
      return '';
    } else {
      const options = {day: 'numeric', month: 'short', year: '2-digit'};
      const formattedDate = date.toLocaleDateString('en-GB', options);

      const day = date.getDate();
      const suffix =
        day % 10 === 1 && day !== 11
          ? 'st'
          : day % 10 === 2 && day !== 12
          ? 'nd'
          : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

      return `${day}${suffix} ${formattedDate.split(' ')[1]}, ${
        formattedDate.split(' ')[2]
      }`;
    }
  };

  return (
    <ScrollView
      style={{
        paddingRight: responsiveWidth(3),
        paddingLeft: responsiveWidth(2),
        backgroundColor: '#F8F8F8',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: insets.top,
          //   height: responsiveHeight(8),
          marginBottom: responsiveHeight(1.8),
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: responsiveFontSize(2.5),
            fontWeight: '600',
          }}>
          Property Details
        </Text>
      </View>
      {/* Property Identity */}
      <Image
        source={{uri: item?.property.photos[0]}}
        style={{
          width: width - 20,
          height: 250,
          borderRadius: 15,
          borderWidth: 2,
          borderColor: '#E2E2E2',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 210,
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#F2F0EF'}}>
          {item.property.propertyType} in {item.property.location.city}
        </Text>
        <Text
          style={{
            color: '#F2F0EF',
            fontWeight: '500',
            fontSize: 16,
          }}>
          Owner: {item.property.contactDetails.ownerName}
        </Text>
        <Text
          style={{
            color: '#F2F0EF',
            fontWeight: '500',
            fontSize: 16,
          }}>
          Posted on: {formatDate(item.Property_Details.possessionDate)}
        </Text>
      </View>
      {/* Donut Chart */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: responsiveHeight(0), // Adding some space around the chart
        }}>
        <PieChart
          data={[
            {
              name: 'Likes',
              population: item.insights.likes,
              color: 'rgb(234, 131, 148)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
            {
              name: 'Views',
              population: item.viewCounts.allTime,
              color: 'rgb(136, 110, 178)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
            {
              name: 'Reached Person',
              population: item.insights.reachedPersons,
              color: 'rgb(213, 138, 127)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
            {
              name: 'Interested Person',
              population: item.insights.interestedPersons,
              color: 'rgba(255, 142, 0, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
            {
              name: 'Chats',
              population: item.insights.chatInitiated,
              color: 'rgba(255, 99, 132, 1)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
            {
              name: 'Interested Persons',
              population: item.insights.interestedPersons,
              color: 'rgb(211, 178, 185)',
              legendFontColor: '#7F7F7F',
              legendFontSize: responsiveFontSize(1.5),
            },
          ]}
          width={width} // Keep width and height equal to maintain a circle
          height={200}
          //   width={width - 40} // Keep width and height equal to maintain a circle
          //   height={width - 40} // Keep the same value as width for a perfect circle
          chartConfig={{
            // backgroundColor: '#1cc910',
            // backgroundGradientFrom: '#43c6ac',
            // backgroundGradientTo: '#FDC830',
            // decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            // style: {
            //   borderRadius: 16,
            // },
          }}
          accessor="population"
          backgroundColor="transparent"
          //   center={[0, 0]} // Center the chart
          absolute
          hasLegend={true} // Show the legend
          //   paddingLeft="10" // Optional: add some padding to make the chart look centered
          style={
            {
              // marginBottom: 20,
              // borderRadius: 16,
              // borderWidth: 5,
              // borderColor: '#fff', // Optional: adds a border around the chart to enhance the donut effect
            }
          }
        />
      </View>
      {/* Amenities */}
      <Text
        style={{
          //   marginVertical: 16,
          marginBottom: responsiveHeight(1.5),
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}>
        Amenities:
      </Text>
      <FlatList
        data={item.property.amenities}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({item}) => (
          <View
            style={{
              width: responsiveWidth(28),
              paddingVertical: responsiveHeight(1),
              marginBottom: responsiveHeight(2),
              backgroundColor: '#F9F9F9',
              elevation: 2,
              borderRadius: responsiveWidth(2.5),
              borderWidth: 1,
              borderColor: 'rgb(243, 197, 197)',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: responsiveWidth(5),
            }}>
            {item.icon}
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                fontWeight: '600',
                color: '#333',
              }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default PropertyScreen;
