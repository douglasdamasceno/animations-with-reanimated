import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInLeft, FadeOutLeft} from 'react-native-reanimated';
import {RouteStack} from '../../routes';

type DetailsScreen = RouteProp<RouteStack, 'Home'>;

type Props = {
  route: DetailsScreen;
};
export const DetailsScreen = ({navigation, route}) => {
  const {profileImg} = route.params;
  const [showCard, setShowCard] = useState(true);
  return (
    <View style={styles.container}>
      <Text>DetailsScreen Screen</Text>
      <Animated.Image
        sharedTransitionTag="profile"
        source={{uri: profileImg}}
        style={styles.profile}
      />
      {showCard && (
        <Animated.View
          entering={FadeInLeft.duration(500).delay(300)}
          exiting={FadeOutLeft.duration(500).delay(300)}
          style={styles.card}
        />
      )}
      <View style={styles.box}>
        <Button title="Show Card" onPress={() => setShowCard(prev => !prev)} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: 250,
    height: 150,
    backgroundColor: '#000022',
  },
  profile: {
    width: '100%',
    height: 350,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    marginTop: 'auto',
    padding: 20,
    width: '100%',
    gap: 24,
  },
});
