import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {Header} from 'react-native-elements';
var {height, width} = Dimensions.get('window');

const DetailScreen = props => {
  console.log('🚀 ~ file: DetailScreen.js ~ line 14 ~ props', props);
  const [data, setData] = React.useState('');

  const callAPI = () => {
    const url = 'http://10.0.2.2:3000/api/products/' + props.route.params._id;
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log('data test', responseJson);
        setData(responseJson.products);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    callAPI();
  }, []);

  console.log('data', data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        leftComponent={{
          icon: 'chevron-left',
          color: 'white',
          type: 'font-awesome-5',
          marginVertical: 5,
          style: {
            marginTop: 10,
          },
        }}
        rightComponent={{
          icon: 'bookmark',
          color: 'white',
          type: 'font-awesome-5',
          marginVertical: 5,
          style: {
            marginTop: 10,
          },
        }}
        containerStyle={{
          borderBottomColor: '#daa520',
          backgroundColor: '#daa520',
        }}
      />
      <View
        style={{
          width: width,
          height: height / 2,
          backgroundColor: '#daa520',
          alignItems: 'center',
        }}>
        <Image
          style={{
            borderRadius: 10,
            width: width / 2.5,
            height: width / 1.9,
            marginTop: 8,
          }}
          source={{
            uri: data.thumbnailUrl
              ? data.thumbnailUrl.replace('localhost', '10.0.2.2')
              : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fmichaeltnietzel%2F2020%2F12%2F01%2Fthe-best-higher-education-books-of-2020%2F&psig=AOvVaw140ORBja7gFZvGAylvqbwT&ust=1618472427813000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLi-yuSd_e8CFQAAAAAdAAAAABAD',
          }}
        />
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          {data.title}
        </Text>
      </View>

      {/*end header  */}
    </SafeAreaView>
  );
};

export default DetailScreen;
