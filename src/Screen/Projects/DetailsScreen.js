import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvySvg from '../../Assets/Svgs/EvySvg';
import StepsSvg from '../../Assets/Svgs/StepsSvg';
import IntrestedSvg from '../../Assets/Svgs/IntrestedSvg';
import MessageSvg from '../../Assets/Svgs/MessageSvg';
import LikeSvg from '../../Assets/Svgs/LikeSvg';
import PoolSVG from '../../Assets/Svgs/PoolSvg';
const {height, width} = Dimensions.get('screen');
const DetailsScreen = () => {
  const route = useRoute();
  const formatDate = isoDate => {
    const date = new Date(isoDate);

    if (isoDate === undefined) {
      return '';
    } else {
      const options = {day: 'numeric', month: 'short', year: '2-digit'};
      const formattedDate = date.toLocaleDateString('en-GB', options);

      // Adding ordinal suffix (st, nd, rd, th) manually
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
  const {item} = route.params;
  console.log(item, 'ppppppp');
  return (
    <ScrollView
      style={{
        padding: 16,
        // paddingBottom: 20,
      }}>
      {/* Property Identity */}
      <Image
        source={{
          uri: item?.property.photos[0],
        }}
        style={{width: '100%', height: 250, borderRadius: 10}}
      />

      <View
        style={{
          position: 'absolute',
          right: 10,
          top: 180,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            // marginVertical: 8,
            color: '#F2F0EF',
          }}>
          {item.property.propertyType} in {item.property.location.city}
        </Text>
        <Text
          style={{
            color: 'gray',
            fontWeight: '500',
            color: '#F2F0EF',
          }}>
          Posted on: {formatDate(item.Property_Details.possessionDate)}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          paddingTop: 10,
          width: width / 2 + 50,
          justifyContent: 'space-between',
        }}>
        <View
          style={
            {
              //   position: 'absolute',
              //   left: 10,
              //   top: 4,
            }
          }>
          <LikeSvg />
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
            }}>
            {item.insights.likes}
          </Text>
        </View>
        <View
          style={
            {
              //   position: 'absolute',
              //   left: 10,
              //   top: 4,
            }
          }>
          <EvySvg />
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
            }}>
            {item.insights.views}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
            }}>
            <StepsSvg />
          </View>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
            }}>
            {item.insights.reachedPersons}
          </Text>
        </View>
        <View
          style={
            {
              //   position: 'absolute',
              //   left: 10,
              //   top: 4,
            }
          }>
          <IntrestedSvg />
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
            }}>
            {item.insights.interestedPersons}
          </Text>
        </View>
        <View
          style={{
            //   position: 'absolute',
            //   left: 10,
            //   top: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MessageSvg />
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
            }}>
            {item.insights.chatInitiated}
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginVertical: 8,
          color: '#000',
          fontWeight: '500',
        }}>
        Amenities:
      </Text>
      <FlatList
        data={item.property.amenities}
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
              //   elevation: 0.5,
              alignItems: 'center',
            }}>
            {item.icon}
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Region-based Graph */}
      <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
        Region-Based Views
      </Text>
      <BarChart
        data={{
          labels: item.insights.regionData.map(d => d.region),
          datasets: [{data: item.insights.regionData.map(d => d.views)}],
        }}
        style={{
          paddingBottom: 50,
        }}
        width={380}
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

export default DetailsScreen;
