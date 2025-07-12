{/* <View style={styles.header}>
<View style={styles.logo}>
  <View style={styles.logoIcon}>
    <Text style={styles.logoIconText}>S</Text>
  </View>
  <Text style={styles.logoText}>Skylead</Text>
</View>

<View style={styles.userInfo}>
  <Text style={styles.userName}>John Doe</Text>
  <View style={styles.userAvatar}>
    <Text style={styles.userInitials}>JD</Text>
  </View>
</View>
</View> */}




import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/context/AuthContext';
// import UserAvatar from 'react-native-user-avatar';
// import { Avatar, AvatarGroup } from "@chakra-ui/avatar"
import TextAvatar from 'react-native-text-avatar';

export default function Header() {
  const { logout, user } = useAuth();
  
  const [userStats] = useState({
    totalUsers: 1234,
    activeUsers: 890,
    newUsers: 45,
    revenue: 12500,
  });

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: logout, style: 'destructive' },
      ]
    );
  };

//   const StatCard = ({ title, value, color = '#007AFF' }: { title: string; value: string; color?: string }) => (
//     <View style={[styles.statCard, { borderLeftColor: color }]}>
//       <Text style={styles.statTitle}>{title}</Text>
//       <Text style={[styles.statValue, { color }]}>{value}</Text>
//     </View>
//   );

//   const ActionButton = ({ title, onPress, color = '#007AFF' }: { title: string; onPress: () => void; color?: string }) => (
//     <TouchableOpacity
//       style={[styles.actionButton, { backgroundColor: color }]}
//       onPress={onPress}
//     >
//       <Text style={styles.actionButtonText}>{title}</Text>
//     </TouchableOpacity>
//   );

  return (
    <>
        <StatusBar barStyle="light-content" />
      {/* <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back, {user?.name || 'User'}!</Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View> */}

<View style={styles.header}>
<View style={styles.logo}>
<Image
              source={require("@/assets/images/justlogo.png")}
              style={styles.reactLogo}
            />
  {/* <View style={styles.logoIcon}>
    <Text style={styles.logoIconText}>S</Text>
  </View> */}
  <Text style={styles.logoText}>Skylead</Text>
</View>

<View style={styles.userInfo}>
  <Text style={styles.userName}>{user?.name || "User Name"}</Text>
  <TouchableOpacity  onPress={handleLogout}>
  {/* <View style={styles.userAvatar}>
    <Text style={styles.userInitials}>JD</Text>
    
  </View> */}

  <TextAvatar
 backgroundColor={'#4ade80'} // optional
 textColor={'#fff'}
 size={36}
 type={'circle'} // optional
>{user?.name || "User Name"}</TextAvatar>
  
  </TouchableOpacity>
</View>
</View>

      {/* <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statsContainer}>
            <StatCard
              title="Total Users"
              value={userStats.totalUsers.toLocaleString()}
              color="#007AFF"
            />
            <StatCard
              title="Active Users"
              value={userStats.activeUsers.toLocaleString()}
              color="#34C759"
            />
            <StatCard
              title="New Users"
              value={userStats.newUsers.toLocaleString()}
              color="#FF9500"
            />
            <StatCard
              title="Revenue"
              value={`$${userStats.revenue.toLocaleString()}`}
              color="#FF3B30"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            <ActionButton
              title="View Reports"
              onPress={() => Alert.alert('Info', 'Reports feature coming soon!')}
              color="#007AFF"
            />
            <ActionButton
              title="Add User"
              onPress={() => Alert.alert('Info', 'Add user feature coming soon!')}
              color="#34C759"
            />
            <ActionButton
              title="Settings"
              onPress={() => Alert.alert('Info', 'Settings feature coming soon!')}
              color="#FF9500"
            />
            <ActionButton
              title="Analytics"
              onPress={() => Alert.alert('Info', 'Analytics feature coming soon!')}
              color="#5856D6"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityItem}>
              <View style={[styles.activityDot, { backgroundColor: '#34C759' }]} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>New user registered</Text>
                <Text style={styles.activityTime}>5 minutes ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={[styles.activityDot, { backgroundColor: '#007AFF' }]} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Report generated</Text>
                <Text style={styles.activityTime}>1 hour ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={[styles.activityDot, { backgroundColor: '#FF9500' }]} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>System backup completed</Text>
                <Text style={styles.activityTime}>3 hours ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#4ade80',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userName: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  userAvatar: {
    width: 36,
    height: 36,
    backgroundColor: '#4ade80',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInitials: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },

  reactLogo: {
    height: 30,
    width: 30,
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
  },


//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   welcomeText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   dateText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   logoutButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#FF3B30',
//   },
//   logoutButtonText: {
//     color: '#FF3B30',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   section: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 12,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   statCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     width: '48%',
//     marginBottom: 12,
//     borderLeftWidth: 4,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   statTitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   actionButton: {
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     width: '48%',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   actionButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   activityContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   activityItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   activityDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginRight: 12,
//   },
//   activityContent: {
//     flex: 1,
//   },
//   activityTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//   },
//   activityTime: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 2,
//   },
});
