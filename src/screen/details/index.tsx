import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Animated, {FadeInLeft, FadeOutLeft} from 'react-native-reanimated';
import {PagesRoute, RoutesNavigation} from '../../routes/types';
import {styles} from './styles';

export const DetailsScreen = () => {
  const navigation = useNavigation<RoutesNavigation>();
  const route = useRoute<PagesRoute<'Details'>>();
  const {profileImg} = route.params;

  const [showCard, setShowCard] = useState(true);
  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag="profile"
        source={{uri: profileImg}}
        style={styles.profile}
      />
      <Text style={styles.title}>DetailsScreen Screen</Text>

      {showCard && (
        <Animated.View
          entering={FadeInLeft.duration(500).delay(600)}
          exiting={FadeOutLeft.duration(500).delay(600)}
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
