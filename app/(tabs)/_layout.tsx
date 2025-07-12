// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Dashboard',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="history"
//         options={{
//           title: 'History',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { BlurView } from 'expo-blur';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import MaterialCommunityIcons from 'react-native-vector-icons/fontawesome6';
import { FontAwesome6,FontAwesome5,Ionicons } from '@expo/vector-icons';

// Custom Tab Bar Background with Glassmorphism
const CustomTabBarBackground = () => {
  return (
    <BlurView
      intensity={20}
      style={StyleSheet.absoluteFillObject}
      tint="dark"
    />
  );
};

// Custom Tab Bar with notification badge support
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: BottomTabNavigationProp<any>;
}) => {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.tabContainer}>
      <View  style={styles.tabBar} >
        <View style={styles.tabItems}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined 
              ? options.tabBarLabel 
              : options.title !== undefined 
              ? options.title 
              : route.name;

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

            // Get notification count (you can customize this logic)
            const getNotificationCount = (routeName: string) => {
              switch (routeName) {
                case 'index':
                  return 0; // Dashboard notifications
                case 'history':
                  return 0;
                case 'profile':
                  return 0;
                default:
                  return 0;
              }
            };

            const notificationCount = getNotificationCount(route.name);

            return (
              <HapticTab
                key={route.key}
                style={[
                  styles.tabItem,
                  isFocused && styles.tabItemActive
                ]}
                onPress={onPress}
              >
                <View style={styles.tabIconContainer}>
                  {options.tabBarIcon && (
                    <View style={styles.iconWrapper}>
                      {options.tabBarIcon({ 
                        color: isFocused ? '#4ade80' : 'rgba(255, 255, 255, 0.6)',
                        size: 20,
                        focused: isFocused 
                      })}
                    </View>
                  )}
                  
                  {/* Notification Badge */}
                  {notificationCount > 0 && (
                    <View style={styles.notificationBadge}>
                      <Text style={styles.badgeText}>{notificationCount}</Text>
                    </View>
                  )}
                </View>
                
                <Text style={[
                  styles.tabLabel,
                  isFocused && styles.tabLabelActive
                ]}>
                  {label}
                </Text>
              </HapticTab>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#4ade80',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        headerShown: false,
        tabBarStyle: {
          display: 'none', // Hide default tab bar since we're using custom one
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            // <Text style={{ color, fontSize: size }}>📞</Text>
            <Ionicons name="call" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => (
            // <Text style={{ color, fontSize: size }}>📋</Text>
            <FontAwesome5 name="history" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            // <Text style={{ color, fontSize: size }}>👤</Text>
            <FontAwesome6 name="user" color={color} size={size} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>⚙️</Text>
          ),
        }}
      /> */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    paddingBottom: Platform.select({
      ios: 34, // Safe area for iOS
      android: 20,
    }),
  },
  tabBar: {
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor:'#274949',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    minWidth: 60,
    position: 'relative',
  },
  tabItemActive: {
    backgroundColor: 'rgba(74, 222, 128, 0.2)',
  },
  tabIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#4ade80',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#ef4444',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
});