import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {RouteStack} from '../../routes';

export const HomeScreen = () => {
  const uri = 'https://avatars.githubusercontent.com/u/33847803?v=4';
  const navigation = useNavigation<RouteStack>();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Animated.Image
        sharedTransitionTag="profile"
        source={{uri: uri}}
        style={styles.profile}
      />
      <View style={styles.box}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              profileImg: uri,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  box: {
    marginTop: 'auto',
    padding: 20,
    width: '100%',
    gap: 24,
  },
});
