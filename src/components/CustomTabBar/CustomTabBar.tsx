import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Determine the label content
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}>
            <Ionicons
              name={
                route.name === 'Home'
                  ? isFocused
                    ? 'home'
                    : 'home-outline'
                  : route.name === 'Settings'
                  ? isFocused
                    ? 'settings'
                    : 'settings-outline'
                  : route.name === 'Profile'
                  ? isFocused
                    ? 'person'
                    : 'person-outline'
                  : isFocused
                  ? 'other-icon-name'
                  : 'other-icon-name-outline' // For the 3rd tab
              }
              size={24}
              color={isFocused ? 'tomato' : 'gray'}
            />
            {typeof label === 'string' && (
              <Text style={{color: isFocused ? 'tomato' : 'gray'}}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#121212',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default CustomTabBar;
