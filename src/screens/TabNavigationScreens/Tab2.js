import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import TimeLogo from './../../../assets/images/timeLogo.png';
import {useSelector} from 'react-redux';

const Tab2 = () => {
  const mySelectedExplores = useSelector(state => state.selectedExplore);
  console.log('added selected explores', mySelectedExplores);

  const MsgItem2 = (item, index) => {
    // console.log('item', item);
    return  (
      <View style={styles.msgView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={{width: 30, height: 30}}></Image>
            <View style={{marginLeft: 5}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
                {item.name}
              </Text>
              <Text style={{color: 'white', fontSize: 10}}>{item.email}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 10, marginTop: 5}}>
            {item.discription}
          </Text>
        </View>
        <View
          style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={TimeLogo} style={{width: 12, height: 12}}></Image>
          <Text style={{color: 'white', fontSize: 11, marginLeft: 5}}>
            {item.datetime}
          </Text>
        </View>
      </View>
    )
  };

  return (
    <View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#50c833',
            width: 3,
            borderRadius: 3,
          }}></View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 8,
          }}>
          Selected Explore
        </Text>
      </View>
      <FlatList
        data={mySelectedExplores}
        renderItem={({item, index}) => MsgItem2(item, index)}
      />
    </View>
  );
};

export default Tab2;

const styles = StyleSheet.create({
  msgView: {
    backgroundColor: '#334b5f',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
