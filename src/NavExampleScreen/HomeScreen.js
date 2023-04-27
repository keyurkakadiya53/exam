import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    // const data=await fetch("https://jsonplaceholder.typicode.com/users");
    // const json=await data.json();
    // console.log(json);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        console.log('fetched data: ', responseJson);
      })
      .catch(error => console.error('get using fetch', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchDataAxios = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
        console.log('fetched data using axios: ', response.data);
      })
      .catch(error => console.error('get using axios', error));
  };

  const addData = (name, email) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: {
        name: {name},
        email: {email},
      },
    })
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(responseJson => {
        console.log(JSON.stringify(responseJson));
      })
      .catch(error => console.error('post: ', error));
  };

  const addDataAxios = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        amount: 6050,
        currency: 'INR',
      })
      .then(response => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch(error => console.error('post axios : ', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <FlatList
        data={data}
        renderItem={data => {
          return (
            <TouchableOpacity
              style={{
                margin: RFValue(10),
                backgroundColor: 'white',
                padding: RFValue(10),
              }}
              onPress={() => {
                addData(data.item.name, data.item.email);
              }}>
              <Text style={styles.text}>{data.item.name}</Text>
              <Text style={styles.text}>{data.item.email}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={data => data.id.toString()}></FlatList>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(18),
    color: 'black',
  },
});
