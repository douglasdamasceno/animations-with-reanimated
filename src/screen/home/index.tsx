import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RoutesNavigation} from '../../routes/types';
import {styles} from './styles';

export const HomeScreen = () => {
  const uri = 'https://avatars.githubusercontent.com/u/33847803?v=4';
  const navigation = useNavigation<RoutesNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Animated.Image
        sharedTransitionTag="profile"
        source={{uri: uri}}
        style={styles.profile}
      />
      <View style={styles.box}>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', {
              profileImg: uri,
            });
          }}
        />
      </View>
    </View>
  );
};
