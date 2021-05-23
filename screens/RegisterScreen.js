import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import AuthContext from '../context/AuthContext';

var {height, width} = Dimensions.get('window');

const RegisterScreen = props => {
  const [Username, setUsername] = useState('admin');
  const [Password, setPassword] = useState('123456');
  const [CofPassword, setCofPassword] = useState('123456');
  const {signUp} = useContext(AuthContext);

  console.log('text', Username);
  const Register = () => {
    console.log('click');

    fetch('http://10.0.2.2:3000/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: Username,
        password: Password,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.success === true) {
          alert('Register success');
          signUp();
        } else {
          alert('Register Failed');
        }
      })

      .catch(e => console.error(e))
      .done();
    // if (res.success === true) {
    //       var username = res.message;
    //       AsyncStorage.setItem('username', username);
    // props.navigation.navigate('app');
    // alert('Login success');
    // }
    // else {
    //       alert('Invalid Credentials');
    //     }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 10}}>
        <View
          style={{
            height: width / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/1119159.gif')}
            style={{
              resizeMode: 'stretch',
              width: 150,
              height: 150,
            }}
          />
          {/* background */}
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Create Account</Text>
          <Text style={{color: 'grey'}}>Please sign in to continue</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Input
            inputContainerStyle={{borderBottomWidth: 0}}
            placeholder="username"
            onChangeText={setUsername}
            value={Username}
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Input
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={setPassword}
            value={Password}
            placeholder="password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            height: 50,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <Input
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={setCofPassword}
            value={CofPassword}
            placeholder="password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={Register}>
          <View
            style={{
              height: 40,
              backgroundColor: 'deepskyblue',
              borderRadius: 10,
              shadowColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute', //Here is the trick
          bottom: 0, //Here is the trick
          flexDirection: 'row',
        }}>
        <Text style={{color: 'grey'}}>Dont have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{color: 'deepskyblue', fontWeight: 'bold'}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
