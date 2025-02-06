import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PoolSVG from '../../Assets/Svgs/PoolSvg';
import PlumberSVG from '../../Assets/Svgs/PlumberSVG';
import GardenSVG from '../../Assets/Svgs/GardenSVG';
import LiftSVG from '../../Assets/Svgs/LiftSVG';

const {width, height} = Dimensions.get('screen');

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
      viewsByTime: {
        day: 20, // example: 20 views in the past day
        week: 100, // example: 100 views in the past week
        month: 350, // example: 350 views in the past month
        year: 120, // example: 1200 views in the past year
        fiveYears: 500, // example: 5000 views in the past 5 years
        allTime: 385, // total views
      },
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
  {
    property: {
      _id: '6757f4e5e7f0845aee3fc745',
      propertyId: 'P17572914737',
      title: 'Premium Villa with Roof Terrace in Shanti Niketan',
      description:
        'The villa has been designed with a modern aesthetic, featuring high ceilings, spacious rooms, and luxurious finishes.',
      userId: 'U66001502490',
      availability: true,
      sold: false,
      location: {
        state: 'DELHI',
        city: 'New Delhi',
        address: 'Pigpo Shanti Niketan',
        streetName: 'Road No 4',
        landMark: 'Sector 4',
        administrative_area_level_1: 'DELHI',
        administrative_area_level_2: 'New Delhi',
        administrative_area_level_3: 'Vasant Vihar',
        locality: 'New Delhi',
        subLocality: 'Shanti Niketan',
        country: 'India',
        lat: '28.57713',
        long: '77.16865',
      },
      type: 'buy',
      category: 'residential',
      subCategory: 'villa',
      priceDetails: {
        total: 166877897,
        breakdown: [],
      },
      contactDetails: {
        ownerName: 'Nilesh',
        email: 'nileshpandey212@gmail.com',
        phone: 7726906242,
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
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_0.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_1.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_2.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_3.jpeg',
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Pictures/U66001502490_P17572914737_4.jpeg',
      ],
      videos: [
        'https://rentlog-test.s3.ap-south-1.amazonaws.com/Property/Property_Videos/U66001502490_P17572914737.mp4',
      ],
      propertyType: 'Flat',
      propertyDetails: 'P17573336484',
      viewsByTime: {
        day: 18,
        week: 95,
        month: 300,
        year: 110,
        fiveYears: 400,
        allTime: 328,
      },
      __v: 0,
    },
    Property_Details: {
      _id: '6757f4e5e7f0845aee3fc743',
      villaId: 'P17573336484',
      bhk: '2 BHK',
      carpetArea: 951,
      totalArea: 1141.2,
      totalBalconies: 1,
      floorNumber: 1,
      washroomType: 'Indian',
      facingType: 'east',
      plotType: 'residential',
      plotArea: 20000,
      possessionDate: '2024-11-27T09:37:03.824Z',
      __v: 0,
    },
    insights: {
      likes: 200,
      views: 100,
      reachedPersons: 90,
      interestedPersons: 20,
      regionData: [
        {region: 'New York', views: 50},
        {region: 'Los Angeles', views: 30},
        {region: 'India', views: 40},
      ],
      chatInitiated: 50,
    },
  },
];

const HomeScreeen = () => {
  const navigation = useNavigation();

  function formatCost(value) {
    const numericValue = Number(value);
    if (isNaN(numericValue)) {
      return 'Invalid';
    }
    if (numericValue < 1001) {
      return numericValue.toString();
    } else if (numericValue < 100000) {
      return (numericValue / 1000).toFixed(1) + ' K';
    } else if (numericValue < 10000000) {
      return (numericValue / 100000).toFixed(1) + ' L';
    } else {
      return (numericValue / 10000000).toFixed(1) + ' Cr';
    }
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
      }}>
      <FlatList
        data={villa}
        contentContainerStyle={{
          marginHorizontal: 20,
        }}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                navigation.navigate('DetailsScreen', {item});
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  marginVertical: 10,
                  borderRadius: 10,
                  padding: 10,
                }}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: item?.property.photos[0],
                      // uri: 'https://rumah.soloproperty.co.id/wp-content/uploads/2022/04/rumah.png',
                    }}
                    resizeMode="cover"
                    style={styles.image}
                  />
                </View>

                <View style={styles.textContainer}>
                  <View style={styles.propertyMainContainer}>
                    <View style={styles.propertyContainer}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.propertyText}>
                        {item.property.propertyType} in{' '}
                        {item.property.location.city}
                      </Text>
                    </View>

                    <View style={styles.areaContainer}>
                      <Text
                        style={styles.areaText}
                        numberOfLines={1} // Limits text to a single line
                        ellipsizeMode="tail">
                        {item.Property_Details.plotArea
                          ? item.Property_Details.plotArea
                          : item.Property_Details.coveredArea
                          ? item.Property_Details.coveredArea
                          : item.Property_Details.totalArea}{' '}
                        sq.ft
                      </Text>
                    </View>
                  </View>
                  <View style={styles.addressContainer}>
                    <Text
                      numberOfLines={1} // Limits text to a single line
                      ellipsizeMode="tail"
                      style={styles.addressText}>
                      {item.property.location.address},
                      {item.property.location.city}
                    </Text>
                  </View>

                  <>
                    <View style={styles.availabilityContainer}>
                      <Text
                        style={styles.balconiesText}
                        numberOfLines={1} // Limits text to a single line
                        ellipsizeMode="tail">
                        {item.Property_Details.totalBalconies} Balconies |{' '}
                        {item.Property_Details.floorNumber} Floor
                      </Text>
                    </View>
                  </>

                  <View style={styles.lowerConatiner}>
                    <View style={styles.priceContainer}>
                      <Text style={styles.priceText}>
                        INR{' '}
                        {formatCost(item?.property?.priceDetails?.total) ||
                          'N/A'}
                      </Text>
                    </View>
                    {/* <TouchableOpacity
                                        style={styles.buttonContainer}
                                        onPress={() => handleViewProperty(item)}
                                    >
                                        <Text style={styles.buttonText}>View Property</Text>
                                    </TouchableOpacity> */}
                  </View>
                </View>
              </View>
              <View style={styles.statusMainConatiner}></View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: height / 8,
    width: width / 3,
    borderRadius: 10,
  },
  imageContainer: {
    paddingRight: 10,
  },
  propertyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreeen;
