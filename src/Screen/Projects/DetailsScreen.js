import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Animated,
} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvySvg from '../../Assets/Svgs/EvySvg';
import StepsSvg from '../../Assets/Svgs/StepsSvg';
import IntrestedSvg from '../../Assets/Svgs/IntrestedSvg';
import MessageSvg from '../../Assets/Svgs/MessageSvg';
import LikeSvg from '../../Assets/Svgs/LikeSvg';
import PoolSVG from '../../Assets/Svgs/PoolSVG';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const {height, width} = Dimensions.get('screen');
const DetailsScreen = () => {
  const route = useRoute();

  const getViewData = () => {
    switch (viewType) {
      case 'day':
        return item.viewCounts.day;
      case 'week':
        return item.viewCounts.week;
      case 'month':
        return item.viewCounts.month;
      case 'year':
        return item.viewCounts.year;
      default:
        return item.viewCounts.day;
    }
  };

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

  const [viewType, setViewType] = useState('day');
  const [modalVisible, setModalVisible] = useState(false);

  const getMaxValue = () => Math.max(...getViewData());

  const getXAxisLabels = () => {
    switch (viewType) {
      case 'day':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      case 'week':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
      case 'month':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      case 'year':
        return ['2019', '2020', '2021', '2022', '2023'];
      default:
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  };

  const getDotColor = index => {
    const data = getViewData();
    if (index === 0) return 'green';
    return data[index] > data[index - 1] ? 'green' : 'red';
  };

  const {item} = route.params;

  return (
    <ScrollView
      style={{
        paddingRight: 12,
        paddingLeft: 10,
        backgroundColor: '#F8F8F8',
      }}>
      <View
        style={{
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
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
          // left: 10,
          // right: 10,
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#F2F0EF'}}>
          {item.property.propertyType} in {item.property.location.city}
        </Text>
        <Text
          style={{
            color: '#F2F0EF',
            fontWeight: '500',
            // marginVertical: 5,
            fontSize: 16,
          }}>
          Owner: {item.property.contactDetails.ownerName}
        </Text>
        <Text
          style={{
            color: '#F2F0EF',
            fontWeight: '500',
            // marginVertical: 5,
            fontSize: 16,
          }}>
          Posted on: {formatDate(item.Property_Details.possessionDate)}
        </Text>
      </View>

      {/* Statistics */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <StatisticCard
          icon={<LikeSvg />}
          count={item.insights.likes}
          label="Likes"
        />
        <StatisticCard
          icon={<EvySvg />}
          count={item.viewCounts.allTime}
          label="Views"
        />
        <StatisticCard
          icon={<StepsSvg />}
          count={item.insights.reachedPersons}
          label="Reached Person"
        />
        <StatisticCard
          icon={<IntrestedSvg />}
          count={item.insights.interestedPersons}
          label="Interested Person"
        />
        <StatisticCard
          icon={<MessageSvg />}
          count={item.insights.chatInitiated}
          label="Chats"
        />
      </View>

      {/* Amenities */}
      <Text
        style={{
          marginVertical: 16,
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
              width: 112,
              padding: 10,
              marginBottom: 16,
              backgroundColor: '#F9F9F9',
              elevation: 2,
              borderRadius: 10,
              borderWidth: 1,
              // borderColor: '#E6E6E6',
              borderColor: 'rgb(243, 197, 197)',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 22,
            }}>
            {item.icon}
            <Text style={{fontSize: 14, fontWeight: '600', color: '#333'}}>
              {item.name}
            </Text>
          </View>
        )}
      />

      {/* View Count Graph */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>
          View Count Graph
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#F9F9F9',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'rgb(243, 197, 197)',
            elevation: 1,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '500',
            }}>
            {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
          </Text>
        </TouchableOpacity>
      </View>

      <LineChart
        data={{
          labels: getXAxisLabels(),
          datasets: [{data: getViewData()}],
        }}
        width={width - 20}
        height={height / 2 - 90}
        chartConfig={{
          backgroundGradientFrom: 'rgba(241, 241, 241, 0.5)',
          backgroundGradientTo: 'rgba(253, 192, 192, 0.76)',
          decimalPlaces: 0,
          color: opacity => `rgba(10, 8, 10, 0.8)`,
        }}
        style={{borderRadius: 10, paddingBottom: 30}}
        bezier
        fromZero
        renderDotContent={({x, y, index}) => (
          <Text
            key={index}
            style={{
              position: 'absolute',
              top: y - 20,
              left: x - 10,
              fontSize: 12,
              color: getDotColor(index),
            }}>
            {Math.round((getViewData()[index] / getMaxValue()) * 100)}%
          </Text>
        )}
      />

      {/* Modal for View Type */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: 250,
            }}>
            {['day', 'week', 'month', 'year'].map(type => (
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
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: viewType === type ? 'blue' : 'black',
                    textAlign: 'center',
                  }}>
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

const StatisticCard = ({icon, count, label}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      width: width / 2 - 40,
    }}>
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'rgb(243, 197, 197)',
      }}>
      {icon}
    </View>
    <View style={{marginLeft: 8}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#333'}}>
        {count}
      </Text>
      <Text style={{fontSize: 12, color: '#000'}}>{label}</Text>
    </View>
  </View>
);

export default DetailsScreen;
