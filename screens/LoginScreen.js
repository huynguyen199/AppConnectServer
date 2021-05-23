import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const LoginScreen = () => {
  const [Username, setUsername] = useState('admin');
  const [Password, setPassword] = useState('admin');
  console.log('text', Username);
  const login = () => {
    console.log('click');
    // fetch('http://10.0.2.2:3000/api/login', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: Username,
    //     password: Password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    fetch('http://10.0.2.2:3000/api/login', {
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
        console.log('data', data);
      })

      .catch(e => console.error(e))
      .done();
    //     if (res.success === true) {
    //       var username = res.message;
    //       AsyncStorage.setItem('username', username);
    //       this.props.navigation.navigate('app');
    //       alert('Login success');
    //     } else {
    //       alert('Invalid Credentials');
    //     }
  };

  return (
    <View>
      <Input
        placeholder="username"
        onChangeText={setUsername}
        value={Username}
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        onChangeText={setPassword}
        value={Password}
        placeholder="password"
        leftIcon={<Icon name="user" size={24} color="black" />}
        secureTextEntry={true}
      />
      <Button onPress={login} title="sada" />
    </View>
  );
};

export default LoginScreen;
