import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import useColorScheme from '@hooks/useColorScheme';
import Colors from '@constants/Colors';
import { refreshAuth } from '@store/authSlice';
import normalize from '@utils/normalize';

import HomeIcon from '@assets/tabIcons/Home.svg';
import HeartIcon from '@assets/tabIcons/Heart.svg';
import PlacesIcon from '@assets/tabIcons/Places.svg';
import MoreIcon from '@assets/tabIcons/More.svg';

import Donate from '@screens/Donate';
import Places from '@screens/Places';
import More from '@screens/More';
import HomeStack from './HomeStack';
import { RootTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = (): JSX.Element => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#0C6D3D',
        tabBarStyle: {
          minHeight: '8%',
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: normalize(14),
          fontFamily: 'ps-bold',
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? '#fff' : Colors[colorScheme].tabIconDefault}
              outer={
                focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Donate"
        component={Donate}
        options={{
          title: 'Donate',
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? '#fff' : Colors[colorScheme].tabIconDefault}
              outer={
                focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Places"
        component={Places}
        options={{
          title: 'Places',
          tabBarIcon: ({ color, focused }) => (
            <PlacesIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? '#fff' : Colors[colorScheme].tabIconDefault}
              outer={
                focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <MoreIcon
              color={color}
              stroke={color}
              fill={focused ? color : undefined}
              /** Mapped to variable names ["#001" , "#002"] in .svgrrc that are replaced in the svg at runtime
               * Used here to achieve inner and outer paths changing color appropriately
               */
              inner={focused ? '#fff' : Colors[colorScheme].tabIconDefault}
              outer={
                focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
