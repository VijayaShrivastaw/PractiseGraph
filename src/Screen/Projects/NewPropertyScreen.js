import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import PoolSVG from '../../Assets/Svgs/PoolSVG';
import PlumberSVG from '../../Assets/Svgs/PlumberSVG';
import LiftSVG from '../../Assets/Svgs/LiftSVG';
import GardenSVG from '../../Assets/Svgs/GardenSVG';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {MultiUseGraph} from '../Graph/MultiUseGraph';
import CircularProgressDemo from '../Graph/CircularProgressDemo';
const {height, width} = Dimensions.get('screen');
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

const villa = [
  {
    property: {
      _id: '6757f4afe7f0845aee3fc73f',
      propertyId: 'P17518898729',
      title: 'Majestic Villa with Private Garden in Diplomatic Enclave',
      description:
        'The property boasts top-of-the-line security, ample parking, and proximity to embassies, high-end dining, and shopping areas, making it the perfect residence for diplomats or high-profile individuals.',
      userId: 'U66625880309',
      availability: true,
      sold: false,
      location: {
        state: 'DELHI',
        city: 'New Delhi',
        address: 'Taj Diplomatic Enclave',
        streetName: 'not available',
        landMark: 'Diplomatic Enclave',
        administrative_area_level_1: 'DELHI',
        administrative_area_level_2: 'New Delhi',
        administrative_area_level_3: 'Chanakya Puri',
        locality: 'New Delhi',
        subLocality: 'Chanakyapuri',
        country: 'India',
        lat: '28.59516',
        long: '77.17087',
      },
      type: 'buy',
      category: 'residential',
      subCategory: 'villa',
      priceDetails: {
        total: 136706570,
        breakdown: [],
      },
      contactDetails: {
        ownerName: 'Ritika',
        email: 'ritikagupta61341@gmail.com',
        phone: 9667879152,
      },
      amenities: [
        {
          icon: <PoolSVG />,
          name: 'Pool',
        },
        {
          icon: <PlumberSVG />,
          name: 'Plumber',
        },
        {
          icon: <LiftSVG />,
          name: 'LiftSVG',
        },
        {
          icon: <GardenSVG />,
          name: 'Garden',
        },
      ],
      nearbyFacilities: {
        schools: true,
        markets: false,
        shoppingMalls: false,
        hospitals: false,
        officeIndustrialArea: true,
      },
      photos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_0.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_1.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_2.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_3.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66625880309_P17518898729_4.jpeg',
      ],
      videos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Videos/U66625880309_P17518898729.mp4',
      ],
      propertyType: 'Villa',
      propertyDetails: 'P17519078094',

      __v: 0,
    },
    Property_Details: {
      _id: '6757f4afe7f0845aee3fc73d',
      villaId: 'P17519078094',
      bhk: '2 BHK',
      carpetArea: 525,
      totalArea: 630,
      totalBalconies: 1,
      floorNumber: 1,
      washroomType: 'Indian',
      facingType: 'south',
      plotType: 'residential',
      plotArea: 12000,
      possessionDate: '2024-11-27T09:37:03.824Z',
      __v: 0,
    },
    insights: {
      likes: 50,
      views: 10,
      reachedPersons: 80,
      interestedPersons: 35,
      chatInitiated: 10,
    },
    insightsData: [
      {label: 'Likes', count: 75, color: 'red'},
      {label: 'Views', count: 50, color: 'blue'},
      {label: 'Reached', count: 85, color: 'green'},
      {label: 'Chats', count: 40, color: 'purple'},
      {label: 'Reached', count: 80, color: '#551e12'},
      {label: 'Intrested', count: 35, color: '#d6d613'},
    ],

    viewCounts: {
      day: [50, 70, 120, 20, 300, 450, 500], // Last 7 days
      week: [1000, 1500, 180, 1200, 2300], // Last 5 weeks
      month: [5000, 7000, 800, 9000, 1000, 12000], // Last 6 months
      year: [30000, 4000, 2000, 60000, 70000], // Last 5 years
      allTime: 385,
    },
  },
];

const NewPropertyScreen = () => {
  const {property} = propertyData;
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
        flex: 1,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* Property Identity */}
      <Image
        // source={{uri: property.photo}}
        source={{uri: villa[0]?.property.photos[0]}}
        style={{
          width: width,
          height: 250,
          resizeMode: 'cover',
          // borderRadius: 15,
          // borderWidth: 2,
          // borderColor: '#E2E2E2',
          // alignSelf: 'center',
        }}
      />
      <View
        style={{
          // paddingHorizontal: responsiveWidth(3),
          paddingTop: responsiveHeight(2),
          // backgroundColor: '#fff',
        }}>
        <View style={{paddingHorizontal: responsiveWidth(3)}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>
            {villa[0].property.propertyType} in{' '}
            {villa[0].property.location.city}
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
              fontSize: 16,
            }}>
            Owner: {villa[0].property.contactDetails.ownerName}
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
              fontSize: responsiveFontSize(1.5),
            }}>
            Date : {formatDate(villa[0].Property_Details.possessionDate)}
          </Text>
        </View>
        <FlatList
          data={villa[0].insightsData}
          contentContainerStyle={{
            paddingHorizontal: responsiveWidth(3),
            marginTop: responsiveHeight(1.5),
          }}
          keyExtractor={item => item.label}
          numColumns={3} // Adjust layout to 2 columns for better UI
          renderItem={({item}) => (
            <View
              style={{
                // flex: 1,
                width: responsiveWidth(30),
                // alignItems: 'center',
                paddingLeft: responsiveWidth(2),
                paddingTop: responsiveHeight(1),
                // margin: responsiveHeight(1),
                marginRight: responsiveWidth(1.8),
                marginBottom: responsiveHeight(2),
                backgroundColor: '#F8F8F8',
                elevation: 1,
                borderRadius: responsiveWidth(2),
                borderWidth: 1,
                borderColor: '#F8F8F8',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(1.4),
                  fontWeight: '600',
                }}>
                {item.label} Count
              </Text>
              <MultiUseGraph
                count={item.count}
                label={item.label}
                color={item.color}
              />
            </View>
          )}
        />
        <Text
          style={{
            //   marginVertical: 16,
            // marginBottom: responsiveHeight(1.5),
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            paddingHorizontal: responsiveWidth(3),
          }}>
          Amenities:
        </Text>
        <FlatList
          data={villa[0].property.amenities}
          keyExtractor={item => item.name}
          contentContainerStyle={{
            paddingHorizontal: responsiveWidth(3),
            marginTop: responsiveHeight(1.5),
          }}
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
                // borderColor: 'rgb(243, 197, 197)',
                borderColor: '#F9F9F9',
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
      </View>
      {/* <CircularProgressDemo /> */}
    </ScrollView>
  );
};

export default NewPropertyScreen;
