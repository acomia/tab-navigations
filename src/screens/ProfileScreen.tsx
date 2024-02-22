import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {MainStackScreenProps} from 'types/navigations';

const ProfileScreen = ({navigation}: MainStackScreenProps<'Profile'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>{`Go to Home >`}</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: '#CCCCCC',
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    color: '#CCCCCC',
    fontWeight: '700',
  },
});
