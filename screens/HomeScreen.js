import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import {Chip, Searchbar} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import {ListItem, Avatar, Badge} from 'react-native-elements';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5s8694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58s694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
//item Book
const Item = ({item}) => (
  <View style={{flex: 1, marginTop: 15}}>
    <Image
      style={{
        borderRadius: 10,
        width: width / 3,
        height: width / 2.2,
        marginRight: 10,
      }}
      source={{
        uri: item.thumbnailUrl.replace('localhost', '10.0.2.2'),
      }}
    />
    <Text ellipsizeMode="tail" numberOfLines={1} style={{width: 100}}>
      {item.title}
    </Text>
  </View>
);
const ItemAvatar = ({title}) => (
  <View style={{margin: 2}}>
    <Avatar
      source={{
        uri:
          'https://lh3.googleusercontent.com/proxy/bV1O4fTqxaBlhuukTYSGr7Yn8ThDhy2EIFGY6mlfwzGOki5WnMzIVSAHBNpqm4fYrWY66-9m3GizlXcwFppCaFLO36oxJW-mA8Sp9zrHlA',
      }}
      size="large"
      rounded
      title="MT"
      onPress={() => console.log('Works!')}
      activeOpacity={0.7}
    />
  </View>
);

//Render item Book

const HomeScreen = props => {
  const renderItemBook = ({item}) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('HomeDetail', {_id: item._id})}>
      <Item item={item} />
    </TouchableOpacity>
  );
  const renderItemAvatar = ({item}) => <ItemAvatar title={item.title} />;

  console.log('🚀 ~ file: HomeScreen.js ~ line 83 ~ props', props);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState('');
  const callAPI = () => {
    const url = 'http://10.0.2.2:3000/api/products';
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
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <StatusBar animated={true} backgroundColor="#61dafb" /> */}
      <Header
        leftComponent={{
          icon: 'bars',
          color: 'black',
          type: 'font-awesome-5',
          marginVertical: 5,
        }}
        centerComponent={{
          text: 'Home',
          style: {
            color: 'black',
            fontWeight: 'bold',
            marginTop: 8,
          },
        }}
        rightComponent={
          <Avatar
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/bV1O4fTqxaBlhuukTYSGr7Yn8ThDhy2EIFGY6mlfwzGOki5WnMzIVSAHBNpqm4fYrWY66-9m3GizlXcwFppCaFLO36oxJW-mA8Sp9zrHlA',
            }}
            size="small"
            rounded
            title="MT"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
        }
        containerStyle={{
          borderBottomColor: 'white',
        }}
        backgroundColor="white"
      />
      {/*header  */}

      <ScrollView>
        {/*---header/>  */}
        <View style={{margin: 10}}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        {/* Search */}
        <View style={{margin: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Categories</Text>
          <View
            style={{
              width: width,
              alignItems: 'baseline',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Chip
              marginTop={5}
              icon={'information'}
              // avatar={
              //   <Avatar
              //     source={{
              //       uri:
              //         'https://lh3.googleusercontent.com/proxy/bV1O4fTqxaBlhuukTYSGr7Yn8ThDhy2EIFGY6mlfwzGOki5WnMzIVSAHBNpqm4fYrWY66-9m3GizlXcwFppCaFLO36oxJW-mA8Sp9zrHlA',
              //     }}
              //     size="large"
              //     rounded
              //     title="MT"
              //     onPress={() => console.log('Works!')}
              //     activeOpacity={0.7}
              //   />
              // }
              // selected={true}
              onPress={() => console.log('Pressed')}>
              Tâm lý học
            </Chip>
            <Chip
              marginTop={5}
              icon={'information'}
              // avatar={
              //   <Avatar
              //     source={{
              //       uri:
              //         'https://lh3.googleusercontent.com/proxy/bV1O4fTqxaBlhuukTYSGr7Yn8ThDhy2EIFGY6mlfwzGOki5WnMzIVSAHBNpqm4fYrWY66-9m3GizlXcwFppCaFLO36oxJW-mA8Sp9zrHlA',
              //     }}
              //     size="large"
              //     rounded
              //     title="MT"
              //     onPress={() => console.log('Works!')}
              //     activeOpacity={0.7}
              //   />
              // }
              // selected={true}
              onPress={() => console.log('Pressed')}>
              Khoa học
            </Chip>
            <Chip
              marginTop={5}
              icon={'information'}
              // avatar={
              //   <Avatar
              //     source={{
              //       uri:
              //         'https://lh3.googleusercontent.com/proxy/bV1O4fTqxaBlhuukTYSGr7Yn8ThDhy2EIFGY6mlfwzGOki5WnMzIVSAHBNpqm4fYrWY66-9m3GizlXcwFppCaFLO36oxJW-mA8Sp9zrHlA',
              //     }}
              //     size="large"
              //     rounded
              //     title="MT"
              //     onPress={() => console.log('Works!')}
              //     activeOpacity={0.7}
              //   />
              // }
              // selected={true}
              onPress={() => console.log('Pressed')}>
              Lịch sử
            </Chip>
          </View>
        </View>
        {/* Category */}
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, flex: 1}}>
              Trending Books
            </Text>
            <Text
              style={{
                textAlign: 'right',
                flex: 1,
                color: '#808080',
                fontWeight: 'bold',
              }}>
              See all
            </Text>
          </View>
          {/* end title  */}
          <View>
            {/* list of books */}

            <FlatList
              horizontal={true}
              data={data}
              renderItem={renderItemBook}
              keyExtractor={item => item._id}
            />
          </View>
          {/* end list book */}
          <View style={{marginTop: 10}}>
            {/* TItle */}
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Top Authors</Text>
            {/* end title */}
            {/* start avatar */}
            <View style={{marginTop: 5}}>
              {/* BOOK */}
              <FlatList
                horizontal={true}
                data={DATA}
                renderItem={renderItemAvatar}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          {/* end avatar */}
          {/* <Image
            source={{
              uri: 'http://10.0.2.2:3000/uploads/myImage-1618321802203.jpg',
            }}
            style={{width: 150, height: 200}}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
