// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import Header from '@/components/header';

// const { width } = Dimensions.get('window');

// interface CallHistoryItem {
//   id: string;
//   name: string;
//   phone: string;
//   initials: string;
//   status: 'accepted' | 'rejected' | 'missed';
//   time: string;
//   type: string;
//   duration: string;
// }

// const CallHistory: React.FC = () => {
//   const [callHistory, setCallHistory] = useState<CallHistoryItem[]>([
//     {
//       id: '1',
//       name: 'Alice Miller',
//       phone: '+1 (555) 123-4567',
//       initials: 'AM',
//       status: 'accepted',
//       time: 'Today, 2:30 PM',
//       type: 'Sales Inquiry',
//       duration: '15 min',
//     },
//     {
//       id: '2',
//       name: 'Robert Johnson',
//       phone: '+1 (555) 987-6543',
//       initials: 'RJ',
//       status: 'rejected',
//       time: 'Today, 1:45 PM',
//       type: 'Support',
//       duration: '-',
//     },
//     {
//       id: '3',
//       name: 'Sarah Davis',
//       phone: '+1 (555) 456-7890',
//       initials: 'SD',
//       status: 'accepted',
//       time: 'Today, 11:20 AM',
//       type: 'Follow-up',
//       duration: '8 min',
//     },
//     {
//       id: '4',
//       name: 'Michael Brown',
//       phone: '+1 (555) 111-2222',
//       initials: 'MB',
//       status: 'missed',
//       time: 'Yesterday, 4:15 PM',
//       type: 'Consultation',
//       duration: '-',
//     },
//     {
//       id: '5',
//       name: 'Emma Wilson',
//       phone: '+1 (555) 333-4444',
//       initials: 'EW',
//       status: 'accepted',
//       time: 'Yesterday, 2:00 PM',
//       type: 'Sales Inquiry',
//       duration: '22 min',
//     },
//     {
//       id: '6',
//       name: 'David Lee',
//       phone: '+1 (555) 555-6666',
//       initials: 'DL',
//       status: 'rejected',
//       time: 'Yesterday, 10:30 AM',
//       type: 'Support',
//       duration: '-',
//     },
//   ]);

//   const [filteredHistory, setFilteredHistory] = useState<CallHistoryItem[]>(callHistory);
//   const [activeFilter, setActiveFilter] = useState<'all' | 'accepted' | 'rejected' | 'missed'>('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [stats, setStats] = useState({
//     total: 24,
//     accepted: 18,
//     avgDuration: '12m',
//   });

//   useEffect(() => {
//     filterCalls();
//   }, [activeFilter, searchQuery, callHistory]);

//   const filterCalls = () => {
//     let filtered = callHistory;

//     // Apply status filter
//     if (activeFilter !== 'all') {
//       filtered = filtered.filter(call => call.status === activeFilter);
//     }

//     // Apply search filter
//     if (searchQuery) {
//       filtered = filtered.filter(call =>
//         call.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         call.phone.includes(searchQuery)
//       );
//     }

//     setFilteredHistory(filtered);
//   };

//   const handleCallBack = (phoneNumber: string) => {
//     Alert.alert(
//       'Call Back',
//       `Calling ${phoneNumber}...`,
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Call', onPress: () => console.log('Calling...') },
//       ]
//     );
//   };

//   const handleShowDetails = (callerName: string) => {
//     Alert.alert(
//       'Call Details',
//       `Details for ${callerName}\n\n• Call notes and recordings\n• Previous interactions\n• Contact information\n• Follow-up actions`,
//       [{ text: 'OK' }]
//     );
//   };

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'accepted':
//         return { backgroundColor: '#dcfce7', color: '#166534' };
//       case 'rejected':
//         return { backgroundColor: '#fee2e2', color: '#991b1b' };
//       case 'missed':
//         return { backgroundColor: '#fef3c7', color: '#92400e' };
//       default:
//         return { backgroundColor: '#f3f4f6', color: '#6b7280' };
//     }
//   };

//   const FilterTab: React.FC<{
//     title: string;
//     filter: 'all' | 'accepted' | 'rejected' | 'missed';
//     isActive: boolean;
//     onPress: () => void;
//   }> = ({ title, filter, isActive, onPress }) => (
//     <TouchableOpacity
//       style={[styles.filterTab, isActive && styles.filterTabActive]}
//       onPress={onPress}
//     >
//       <Text style={[styles.filterTabText, isActive && styles.filterTabTextActive]}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );

//   const CallHistoryCard: React.FC<{ item: CallHistoryItem; index: number }> = ({ item, index }) => {
//     const slideAnim = new Animated.Value(0);

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     }, []);

//     const statusStyle = getStatusStyle(item.status);

//     return (
//       <Animated.View
//         style={[
//           styles.historyItem,
//           {
//             opacity: slideAnim,
//             transform: [
//               {
//                 translateY: slideAnim.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [20, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <View style={styles.historyHeader}>
//           <View style={styles.callerAvatar}>
//             <Text style={styles.callerInitials}>{item.initials}</Text>
//           </View>

//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{item.name}</Text>
//             <Text style={styles.callerPhone}>{item.phone}</Text>
//           </View>

//           <View style={styles.callStatus}>
//             <View style={[styles.statusBadge, statusStyle]}>
//               <Text style={[styles.statusText, { color: statusStyle.color }]}>
//                 {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//               </Text>
//             </View>
//             <Text style={styles.callTime}>{item.time}</Text>
//           </View>
//         </View>

//         <View style={styles.callDetails}>
//           <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{item.type}</Text>
//           </View>
//           <Text style={styles.callDuration}>{item.duration}</Text>
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnCallback]}
//             onPress={() => handleCallBack(item.phone)}
//           >
//             <Text style={styles.btnCallbackText}>📞 Call Back</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnDetails]}
//             onPress={() => handleShowDetails(item.name)}
//           >
//             <Text style={styles.btnDetailsText}>📋 Details</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
//       <Text style={styles.emptyIcon}>📞</Text>
//       <Text style={styles.emptyTitle}>
//         No {activeFilter === 'all' ? '' : activeFilter} calls found
//       </Text>
//       <Text style={styles.emptySubtitle}>
//         Your call history will appear here once you start receiving calls.
//       </Text>
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//      <Header/>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <View style={styles.mainContent}>
//           <Text style={styles.pageTitle}>Call History</Text>
//           <Text style={styles.pageSubtitle}>Review your call activity</Text>

//           {/* Search */}
//           <View style={styles.searchContainer}>
//             <Text style={styles.searchIcon}>🔍</Text>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search calls..."
//               placeholderTextColor="rgba(255, 255, 255, 0.5)"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>

//           {/* Filter Tabs */}
//           <View  style={styles.filterTabs}>
//             <FilterTab
//               title="All"
//               filter="all"
//               isActive={activeFilter === 'all'}
//               onPress={() => setActiveFilter('all')}
//             />
//             <FilterTab
//               title="Accepted"
//               filter="accepted"
//               isActive={activeFilter === 'accepted'}
//               onPress={() => setActiveFilter('accepted')}
//             />
//             <FilterTab
//               title="Rejected"
//               filter="rejected"
//               isActive={activeFilter === 'rejected'}
//               onPress={() => setActiveFilter('rejected')}
//             />
//             <FilterTab
//               title="Missed"
//               filter="missed"
//               isActive={activeFilter === 'missed'}
//               onPress={() => setActiveFilter('missed')}
//             />
//           </View>

//           {/* Stats Summary */}
//           <View style={styles.statsGrid}>
//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.total}</Text>
//               <Text style={styles.statLabel}>Total Calls</Text>
//             </View>

//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.accepted}</Text>
//               <Text style={styles.statLabel}>Accepted</Text>
//             </View>

//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.avgDuration}</Text>
//               <Text style={styles.statLabel}>Avg Duration</Text>
//             </View>
//           </View>

//           {/* Call History */}
//           {filteredHistory.length === 0 ? (
//             <EmptyState />
//           ) : (
//             filteredHistory.map((item, index) => (
//               <CallHistoryCard key={item.id} item={item} index={index} />
//             ))
//           )}
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       {/* <BlurView intensity={20} style={styles.bottomNav}>
//         <View style={styles.navItems}>
//           <TouchableOpacity style={styles.navItem}>
//             <Text style={styles.navIcon}>📞</Text>
//             <Text style={styles.navLabel}>Dashboard</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
//             <Text style={styles.navIcon}>📋</Text>
//             <Text style={[styles.navLabel, styles.navLabelActive]}>History</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.navItem}>
//             <Text style={styles.navIcon}>👤</Text>
//             <Text style={styles.navLabel}>Profile</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.navItem}>
//             <Text style={styles.navIcon}>⚙️</Text>
//             <Text style={styles.navLabel}>Settings</Text>
//           </TouchableOpacity>
//         </View>
//       </BlurView> */}
//     </ThemedView>
//   );
// };

// export default  CallHistory;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//   },
//   logo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   logoIcon: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#4ade80',
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoIconText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   logoText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   userName: {
//     color: 'rgba(255, 255, 255, 0.9)',
//     fontSize: 14,
//   },
//   userAvatar: {
//     width: 36,
//     height: 36,
//     backgroundColor: '#4ade80',
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   userInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   mainContent: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 8,
//   },
//   pageSubtitle: {
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 30,
//   },
//   searchContainer: {
//     position: 'relative',
//     marginBottom: 20,
//   },
//   searchIcon: {
//     position: 'absolute',
//     left: 12,
//     top: 12,
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.5)',
//     zIndex: 1,
//   },
//   searchInput: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     color: 'white',
//     fontSize: 14,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   filterTabs: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 4,
//     marginBottom: 30,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   filterTab: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   filterTabActive: {
//     backgroundColor: '#4ade80',
//   },
//   filterTabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   filterTabTextActive: {
//     color: 'white',
//   },
//   statsGrid: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 16,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#4ade80',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 11,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   historyItem: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   historyHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 15,
//     marginBottom: 12,
//   },
//   callerAvatar: {
//     width: 45,
//     height: 45,
//     backgroundColor: '#4ade80',
//     borderRadius: 22.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callerInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   callerInfo: {
//     flex: 1,
//   },
//   callerName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: 2,
//   },
//   callerPhone: {
//     fontSize: 13,
//     color: '#6b7280',
//   },
//   callStatus: {
//     alignItems: 'flex-end',
//     gap: 4,
//   },
//   statusBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   statusText: {
//     fontSize: 11,
//     fontWeight: '600',
//   },
//   callTime: {
//     fontSize: 12,
//     color: '#9ca3af',
//   },
//   callDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 12,
//     paddingTop: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#f3f4f6',
//     marginBottom: 12,
//   },
//   callTypeContainer: {
//     backgroundColor: '#dbeafe',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   callType: {
//     fontSize: 11,
//     fontWeight: '500',
//     color: '#1e40af',
//   },
//   callDuration: {
//     fontSize: 12,
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   callActions: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   actionBtn: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 8,
//     flex: 1,
//     alignItems: 'center',
//   },
//   btnCallback: {
//     backgroundColor: '#4ade80',
//   },
//   btnCallbackText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   btnDetails: {
//     backgroundColor: '#f3f4f6',
//   },
//   btnDetailsText: {
//     color: '#6b7280',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   emptyState: {
//     alignItems: 'center',
//     padding: 40,
//   },
//   emptyIcon: {
//     fontSize: 48,
//     marginBottom: 16,
//     opacity: 0.5,
//   },
//   emptyTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   emptySubtitle: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.6)',
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   bottomNav: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   navItems: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   navItem: {
//     alignItems: 'center',
//     padding: 8,
//     borderRadius: 12,
//     minWidth: 60,
//   },
//   navItemActive: {
//     backgroundColor: 'rgba(74, 222, 128, 0.2)',
//   },
//   navIcon: {
//     fontSize: 20,
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.6)',
//   },
//   navLabelActive: {
//     color: '#4ade80',
//   },
// });

//****LAST VERSION */

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Alert,
//   Linking,
// } from 'react-native';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import Header from '@/components/header';

// import {Ionicons} from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// interface CallHistoryItem {
//   id: string;
//   name: string;
//   phone: string;
//   initials: string;
//   status: 'accepted' | 'rejected' | 'missed';
//   time: string;
//   type: string;
//   duration: string;
// }

// const CallHistory: React.FC = () => {
//   const [callHistory, setCallHistory] = useState<CallHistoryItem[]>([
//     {
//       id: '1',
//       name: 'Alice Miller',
//       phone: '+1 (555) 123-4567',
//       initials: 'AM',
//       status: 'accepted',
//       time: 'Today, 2:30 PM',
//       type: 'Sales Inquiry',
//       duration: '15 min',
//     },
//     {
//       id: '2',
//       name: 'Robert Johnson',
//       phone: '+1 (555) 987-6543',
//       initials: 'RJ',
//       status: 'rejected',
//       time: 'Today, 1:45 PM',
//       type: 'Support',
//       duration: '-',
//     },
//     {
//       id: '3',
//       name: 'Sarah Davis',
//       phone: '+1 (555) 456-7890',
//       initials: 'SD',
//       status: 'accepted',
//       time: 'Today, 11:20 AM',
//       type: 'Follow-up',
//       duration: '8 min',
//     },
//     {
//       id: '4',
//       name: 'Michael Brown',
//       phone: '+1 (555) 111-2222',
//       initials: 'MB',
//       status: 'missed',
//       time: 'Yesterday, 4:15 PM',
//       type: 'Consultation',
//       duration: '-',
//     },
//     {
//       id: '5',
//       name: 'Emma Wilson',
//       phone: '+1 (555) 333-4444',
//       initials: 'EW',
//       status: 'accepted',
//       time: 'Yesterday, 2:00 PM',
//       type: 'Sales Inquiry',
//       duration: '22 min',
//     },
//     {
//       id: '6',
//       name: 'David Lee',
//       phone: '+1 (555) 555-6666',
//       initials: 'DL',
//       status: 'rejected',
//       time: 'Yesterday, 10:30 AM',
//       type: 'Support',
//       duration: '-',
//     },
//   ]);

//   const [filteredHistory, setFilteredHistory] = useState<CallHistoryItem[]>(callHistory);
//   const [activeFilter, setActiveFilter] = useState<'all' | 'accepted' | 'rejected' | 'missed'>('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [stats, setStats] = useState({
//     total: 24,
//     accepted: 18,
//     avgDuration: '12m',
//   });

//   useEffect(() => {
//     filterCalls();
//   }, [activeFilter, searchQuery, callHistory]);

//   const filterCalls = () => {
//     let filtered = callHistory;

//     // Apply status filter
//     if (activeFilter !== 'all') {
//       filtered = filtered.filter(call => call.status === activeFilter);
//     }

//     // Apply search filter
//     if (searchQuery) {
//       filtered = filtered.filter(call =>
//         call.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         call.phone.includes(searchQuery)
//       );
//     }

//     setFilteredHistory(filtered);
//   };

//   // Function to handle phone dialing
//   const handlePhoneCall = async (phoneNumber: string) => {
//     try {
//       // Clean the phone number (remove spaces, parentheses, and dashes)
//       const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, '');
//       const phoneUrl = `tel:${cleanPhoneNumber}`;

//       // Check if the device can handle the tel: URL
//       const supported = await Linking.canOpenURL(phoneUrl);

//       if (supported) {
//         await Linking.openURL(phoneUrl);
//       } else {
//         Alert.alert(
//           'Phone Not Available',
//           'Phone dialing is not available on this device',
//           [{ text: 'OK' }]
//         );
//       }
//     } catch (error) {
//       console.error('Error opening phone dialer:', error);
//       Alert.alert(
//         'Error',
//         'Failed to open phone dialer. Please try again.',
//         [{ text: 'OK' }]
//       );
//     }
//   };

//   const handleCallBack = async (phoneNumber: string) => {
//     Alert.alert(
//       'Call Back',
//       `Would you like to call ${phoneNumber}?`,
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Call',
//           onPress: () => handlePhoneCall(phoneNumber)
//         },
//       ]
//     );
//   };

//   const handleShowDetails = (callerName: string) => {
//     Alert.alert(
//       'Call Details',
//       `Details for ${callerName}\n\n• Call notes and recordings\n• Previous interactions\n• Contact information\n• Follow-up actions`,
//       [{ text: 'OK' }]
//     );
//   };

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'accepted':
//         return { backgroundColor: '#dcfce7', color: '#166534' };
//       case 'rejected':
//         return { backgroundColor: '#fee2e2', color: '#991b1b' };
//       case 'missed':
//         return { backgroundColor: '#fef3c7', color: '#92400e' };
//       default:
//         return { backgroundColor: '#f3f4f6', color: '#6b7280' };
//     }
//   };

//   const FilterTab: React.FC<{
//     title: string;
//     filter: 'all' | 'accepted' | 'rejected' | 'missed';
//     isActive: boolean;
//     onPress: () => void;
//   }> = ({ title, filter, isActive, onPress }) => (
//     <TouchableOpacity
//       style={[styles.filterTab, isActive && styles.filterTabActive]}
//       onPress={onPress}
//     >
//       <Text style={[styles.filterTabText, isActive && styles.filterTabTextActive]}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );

//   const CallHistoryCard: React.FC<{ item: CallHistoryItem; index: number }> = ({ item, index }) => {
//     const slideAnim = new Animated.Value(0);

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     }, []);

//     const statusStyle = getStatusStyle(item.status);

//     return (
//       <Animated.View
//         style={[
//           styles.historyItem,
//           {
//             opacity: slideAnim,
//             transform: [
//               {
//                 translateY: slideAnim.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [20, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <View style={styles.historyHeader}>
//           <View style={styles.callerAvatar}>
//             <Text style={styles.callerInitials}>{item.initials}</Text>
//           </View>

//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{item.name}</Text>
//             <Text style={styles.callerPhone}>{item.phone}</Text>
//           </View>

//           <View style={styles.callStatus}>
//             <View style={[styles.statusBadge, statusStyle]}>
//               <Text style={[styles.statusText, { color: statusStyle.color }]}>
//                 {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//               </Text>
//             </View>
//             <Text style={styles.callTime}>{item.time}</Text>
//           </View>
//         </View>

//         <View style={styles.callDetails}>
//           <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{item.type}</Text>
//           </View>
//           <Text style={styles.callDuration}>{item.duration}</Text>
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnCallback]}
//             // onPress={() => handleCallBack(item.phone)}
//             onPress={ () => handlePhoneCall(item.phone)}
//           >
//             <Text style={styles.btnCallbackText}>📞 Call Back</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnDetails]}
//             onPress={() => handleShowDetails(item.name)}
//           >
//             <Text style={styles.btnDetailsText}>📋 Details</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
//       <Text style={styles.emptyIcon}>📞</Text>
//       <Text style={styles.emptyTitle}>
//         No {activeFilter === 'all' ? '' : activeFilter} calls found
//       </Text>
//       <Text style={styles.emptySubtitle}>
//         Your call history will appear here once you start receiving calls.
//       </Text>
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//      <Header/>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <View style={styles.mainContent}>
//           <Text style={styles.pageTitle}>Call History</Text>
//           <Text style={styles.pageSubtitle}>Review your call activity</Text>

//           {/* Search */}
//           <View style={styles.searchContainer}>
//             <Text style={styles.searchIcon}>
//             <Ionicons name="search" color={"rgba(255, 255, 255, 0.5)"} size={20}/></Text>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search calls..."
//               placeholderTextColor="rgba(255, 255, 255, 0.5)"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>

//           {/* Filter Tabs */}
//           <View  style={styles.filterTabs}>
//             <FilterTab
//               title="All"
//               filter="all"
//               isActive={activeFilter === 'all'}
//               onPress={() => setActiveFilter('all')}
//             />
//             <FilterTab
//               title="Accepted"
//               filter="accepted"
//               isActive={activeFilter === 'accepted'}
//               onPress={() => setActiveFilter('accepted')}
//             />
//             <FilterTab
//               title="Rejected"
//               filter="rejected"
//               isActive={activeFilter === 'rejected'}
//               onPress={() => setActiveFilter('rejected')}
//             />
//             <FilterTab
//               title="Missed"
//               filter="missed"
//               isActive={activeFilter === 'missed'}
//               onPress={() => setActiveFilter('missed')}
//             />
//           </View>

//           {/* Stats Summary */}
//           <View style={styles.statsGrid}>
//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.total}</Text>
//               <Text style={styles.statLabel}>Total Calls</Text>
//             </View>

//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.accepted}</Text>
//               <Text style={styles.statLabel}>Accepted</Text>
//             </View>

//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{stats.avgDuration}</Text>
//               <Text style={styles.statLabel}>Avg Duration</Text>
//             </View>
//           </View>

//           {/* Call History */}
//           {filteredHistory.length === 0 ? (
//             <EmptyState />
//           ) : (
//             filteredHistory.map((item, index) => (
//               <CallHistoryCard key={item.id} item={item} index={index} />
//             ))
//           )}
//         </View>
//       </ScrollView>

//     </ThemedView>
//   );
// };

// export default  CallHistory;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//   },
//   logo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   logoIcon: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#4ade80',
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoIconText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   logoText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   userName: {
//     color: 'rgba(255, 255, 255, 0.9)',
//     fontSize: 14,
//   },
//   userAvatar: {
//     width: 36,
//     height: 36,
//     backgroundColor: '#4ade80',
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   userInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   mainContent: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 8,
//   },
//   pageSubtitle: {
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 30,
//   },
//   searchContainer: {
//     position: 'relative',
//     marginBottom: 20,
//   },
//   searchIcon: {
//     position: 'absolute',
//     left: 12,
//     top: 12,
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.5)',
//     zIndex: 1,
//   },
//   searchInput: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     color: 'white',
//     fontSize: 14,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   filterTabs: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 4,
//     marginBottom: 30,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   filterTab: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   filterTabActive: {
//     backgroundColor: '#4ade80',
//   },
//   filterTabText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   filterTabTextActive: {
//     color: 'white',
//   },
//   statsGrid: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 16,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#4ade80',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 11,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   historyItem: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   historyHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 15,
//     marginBottom: 12,
//   },
//   callerAvatar: {
//     width: 45,
//     height: 45,
//     backgroundColor: '#4ade80',
//     borderRadius: 22.5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callerInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   callerInfo: {
//     flex: 1,
//   },
//   callerName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: 2,
//   },
//   callerPhone: {
//     fontSize: 13,
//     color: '#6b7280',
//   },
//   callStatus: {
//     alignItems: 'flex-end',
//     gap: 4,
//   },
//   statusBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   statusText: {
//     fontSize: 11,
//     fontWeight: '600',
//   },
//   callTime: {
//     fontSize: 12,
//     color: '#9ca3af',
//   },
//   callDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 12,
//     paddingTop: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#f3f4f6',
//     marginBottom: 12,
//   },
//   callTypeContainer: {
//     backgroundColor: '#dbeafe',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   callType: {
//     fontSize: 11,
//     fontWeight: '500',
//     color: '#1e40af',
//   },
//   callDuration: {
//     fontSize: 12,
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   callActions: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   actionBtn: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 8,
//     flex: 1,
//     alignItems: 'center',
//   },
//   btnCallback: {
//     backgroundColor: '#4ade80',
//   },
//   btnCallbackText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   btnDetails: {
//     backgroundColor: '#f3f4f6',
//   },
//   btnDetailsText: {
//     color: '#6b7280',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   emptyState: {
//     alignItems: 'center',
//     padding: 40,
//   },
//   emptyIcon: {
//     fontSize: 48,
//     marginBottom: 16,
//     opacity: 0.5,
//   },
//   emptyTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   emptySubtitle: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.6)',
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   bottomNav: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   navItems: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   navItem: {
//     alignItems: 'center',
//     padding: 8,
//     borderRadius: 12,
//     minWidth: 60,
//   },
//   navItemActive: {
//     backgroundColor: 'rgba(74, 222, 128, 0.2)',
//   },
//   navIcon: {
//     fontSize: 20,
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.6)',
//   },
//   navLabelActive: {
//     color: '#4ade80',
//   },
// });
















// ** LAST VERSION

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Alert,
//   Linking,
//   FlatList,
//   RefreshControl,
// } from "react-native";
// import { BlurView } from "expo-blur";
// import { ThemedView } from "@/components/ThemedView";
// import Header from "@/components/header";
// import { useGet } from "@/hooks/useApi";

// import { FontAwesome6, FontAwesome5, Ionicons } from "@expo/vector-icons";
// import {
//   CallHistoryItem,
//   CallHistoryApiResponse,
//   transformCallHistoryData,
// } from "@/components/callHistoryTypes";

// const { width } = Dimensions.get("window");

// // interface CallHistoryItem {
// //   id: string;
// //   name: string;
// //   phone: string;
// //   initials: string;
// //   status: 'accepted' | 'rejected' | 'missed';
// //   time: string;
// //   type: string;
// //   duration: string;
// // }

// const CallHistory: React.FC = () => {
//   // API hook for fetching call history
//   const {
//     data: apiData,
//     loading,
//     error,
//     get: fetchCallHistory,
//   } = useGet("/call-history");
//   const [callHistory, setCallHistory] = useState<CallHistoryItem[]>([
//     // {
//     //   id: '1',
//     //   name: 'Alice Miller',
//     //   phone: '+1 (555) 123-4567',
//     //   initials: 'AM',
//     //   status: 'accepted',
//     //   time: 'Today, 2:30 PM',
//     //   type: 'Sales Inquiry',
//     //   duration: '15 min',
//     // },
//     // {
//     //   id: '2',
//     //   name: 'Robert Johnson',
//     //   phone: '+1 (555) 987-6543',
//     //   initials: 'RJ',
//     //   status: 'rejected',
//     //   time: 'Today, 1:45 PM',
//     //   type: 'Support',
//     //   duration: '-',
//     // },
//     // {
//     //   id: '3',
//     //   name: 'Sarah Davis',
//     //   phone: '+1 (555) 456-7890',
//     //   initials: 'SD',
//     //   status: 'accepted',
//     //   time: 'Today, 11:20 AM',
//     //   type: 'Follow-up',
//     //   duration: '8 min',
//     // },
//     // {
//     //   id: '4',
//     //   name: 'Michael Brown',
//     //   phone: '+1 (555) 111-2222',
//     //   initials: 'MB',
//     //   status: 'missed',
//     //   time: 'Yesterday, 4:15 PM',
//     //   type: 'Consultation',
//     //   duration: '-',
//     // },
//     // {
//     //   id: '5',
//     //   name: 'Emma Wilson',
//     //   phone: '+1 (555) 333-4444',
//     //   initials: 'EW',
//     //   status: 'accepted',
//     //   time: 'Yesterday, 2:00 PM',
//     //   type: 'Sales Inquiry',
//     //   duration: '22 min',
//     // },
//     // {
//     //   id: '6',
//     //   name: 'David Lee',
//     //   phone: '+1 (555) 555-6666',
//     //   initials: 'DL',
//     //   status: 'rejected',
//     //   time: 'Yesterday, 10:30 AM',
//     //   type: 'Support',
//     //   duration: '-',
//     // },
//   ]);

//   const [filteredHistory, setFilteredHistory] =
//     useState<CallHistoryItem[]>(callHistory);
//   const [activeFilter, setActiveFilter] = useState<
//     "all" | "accepted" | "rejected" | "missed"
//   >("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [refreshing, setRefreshing] = useState(false);
//   const [stats, setStats] = useState({
//     total: 24,
//     accepted: 18,
//     avgDuration: "12m",
//   });

//   const updateStats = (calls: CallHistoryItem[]) => {
//     const total = calls.length;
//     const accepted = calls.filter((call) => call.status === "accepted").length;

//     // Calculate average duration (only for accepted calls with valid duration)
//     const acceptedCallsWithDuration = calls.filter(
//       (call) => call.status === "accepted" && call.duration !== "-"
//     );

//     let avgDuration = "0m";
//     if (acceptedCallsWithDuration.length > 0) {
//       const totalMinutes = acceptedCallsWithDuration.reduce((sum, call) => {
//         const duration = call.duration.replace(/[^\d]/g, "");
//         return sum + (parseInt(duration) || 0);
//       }, 0);
//       avgDuration = `${Math.round(
//         totalMinutes / acceptedCallsWithDuration.length
//       )}m`;
//     }

//     setStats({ total, accepted, avgDuration });
//   };

//   const loadCallHistory = useCallback(async () => {
//     try {
//       await fetchCallHistory();
//     } catch (error) {
//       console.error("Failed to load call history:", error);
//       Alert.alert(
//         "Error",
//         "Failed to load call history. Please check your connection and try again.",
//         [{ text: "OK" }]
//       );
//     }
//   }, [fetchCallHistory]);

//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await loadCallHistory();
//     setRefreshing(false);
//   }, [loadCallHistory]);

//   //  Load call history on component mount
//   useEffect(() => {
//     loadCallHistory();
//     // console.log('API Data:+++>', apiData);
//   }, []);

//   // Transform API data when received
//   useEffect(() => {
//     if (apiData?.calls) {
//       const transformedData = transformCallHistoryData(apiData.calls);
//       console.log("API Data:+++>", transformedData);
//       setCallHistory(transformedData);
//       updateStats(transformedData);
//     }
//   }, [apiData]);

//   // Filter calls when filters change

//   useEffect(() => {
//     filterCalls();
//   }, [activeFilter, searchQuery, callHistory]);

//   const filterCalls = () => {
//     let filtered = callHistory;

//     // Apply status filter
//     if (activeFilter !== "all") {
//       filtered = filtered?.filter((call) => call.status === activeFilter);
//     }

//     // Apply search filter
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (call) =>
//           call?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
//           call.phone?.includes(searchQuery)
//       );
//     }

//     setFilteredHistory(filtered);
//   };

//   // Function to handle phone dialing
//   const handlePhoneCall = async (phoneNumber: string) => {
//     try {
//       // Clean the phone number (remove spaces, parentheses, and dashes)
//       const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, "");
//       const phoneUrl = `tel:${cleanPhoneNumber}`;

//       // Check if the device can handle the tel: URL
//       const supported = await Linking.canOpenURL(phoneUrl);

//       if (supported) {
//         await Linking.openURL(phoneUrl);
//       } else {
//         Alert.alert(
//           "Phone Not Available",
//           "Phone dialing is not available on this device",
//           [{ text: "OK" }]
//         );
//       }
//     } catch (error) {
//       console.error("Error opening phone dialer:", error);
//       Alert.alert("Error", "Failed to open phone dialer. Please try again.", [
//         { text: "OK" },
//       ]);
//     }
//   };

//   const handleCallBack = async (phoneNumber: string) => {
//     Alert.alert("Call Back", `Would you like to call ${phoneNumber}?`, [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "Call",
//         onPress: () => handlePhoneCall(phoneNumber),
//       },
//     ]);
//   };

//   const handleShowDetails = (call: CallHistoryItem) => {
//     Alert.alert(
//       "Call Details",
//       `Details for ${call.name}\n\n• Lead ID: ${call.leadId}\n• Agent: ${call.agentName}\n• Status: ${call.status}\n• Call Type: ${call.type}\n• Duration: ${call.duration}\n• Phone: ${call.phone}`,
//       [{ text: "OK" }]
//     );
//   };

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case "accepted":
//         return { backgroundColor: "#dcfce7", color: "#166534" };
//       case "rejected":
//         return { backgroundColor: "#fee2e2", color: "#991b1b" };
//       case "missed":
//         return { backgroundColor: "#fef3c7", color: "#92400e" };
//       default:
//         return { backgroundColor: "#f3f4f6", color: "#6b7280" };
//     }
//   };

//   const FilterTab: React.FC<{
//     title: string;
//     filter: "all" | "accepted" | "rejected" | "missed";
//     isActive: boolean;
//     onPress: () => void;
//   }> = ({ title, filter, isActive, onPress }) => (
//     <TouchableOpacity
//       style={[styles.filterTab, isActive && styles.filterTabActive]}
//       onPress={onPress}
//     >
//       <Text
//         style={[styles.filterTabText, isActive && styles.filterTabTextActive]}
//       >
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );

//   const CallHistoryCard: React.FC<{ item: CallHistoryItem; index: number }> = ({
//     item,
//     index,
//   }) => {
//     const slideAnim = new Animated.Value(0);

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }).start();
//     }, []);

//     const statusStyle = getStatusStyle(item.status);

//     return (
//       <Animated.View
//         style={[
//           styles.historyItem,
//           {
//             opacity: slideAnim,
//             transform: [
//               {
//                 translateY: slideAnim.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [20, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       >
//         <View style={styles.historyHeader}>
//           <View style={styles.callerAvatar}>
//             <Text style={styles.callerInitials}>{item.initials}</Text>
//           </View>

//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{item.name}</Text>
//             <Text style={styles.callerPhone}>{item.phone}</Text>
//           </View>

//           <View style={styles.callStatus}>
//             <View style={[styles.statusBadge, statusStyle]}>
//               <Text style={[styles.statusText, { color: statusStyle.color }]}>
//                 {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
//               </Text>
//             </View>
//             <Text style={styles.callTime}>{item.time}</Text>
//           </View>
//         </View>

//         <View style={styles.callDetails}>
//           <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{item.type}</Text>
//           </View>
//           <Text style={styles.callDuration}>{item.duration}</Text>
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnCallback]}
//             onPress={() => handlePhoneCall(item.phone)}
//           >
//             <FontAwesome5 name="phone-alt" size={14} color="#fff" />
//             <Text style={styles.btnCallbackText}> Call Back</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.actionBtn, styles.btnDetails]}
//             onPress={() => handleShowDetails(item)}
//           >
//             <FontAwesome5 name="list" size={14} color="#6b7280" />
//             <Text style={styles.btnDetailsText}>Details</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const LoadingState: React.FC = () => (
//     <View style={styles.loadingState}>
//       <Text style={styles.loadingText}>Loading calls...</Text>
//     </View>
//   );

//   const EmptyState = () => {
//     if (loading) {
//       return <LoadingState />;
//     }

//     return (
//       <View style={styles.emptyState}>
//         <FontAwesome5 name="phone-alt" size={28} color="white" />
//         <Text style={styles.emptyTitle}>
//           No {activeFilter === "all" ? "" : activeFilter} calls found
//         </Text>
//         <Text style={styles.emptySubtitle}>
//           Your call history will appear here once you start receiving calls.
//         </Text>
//       </View>
//     );
//   };

//   const renderCallHistoryItem = ({
//     item,
//     index,
//   }: {
//     item: CallHistoryItem;
//     index: number;
//   }) => <CallHistoryCard item={item} index={index} />;

//   const renderListHeader = () => (
//     <View style={styles.listHeader}>
//       <Text style={styles.pageTitle}>Call History</Text>
//       <Text style={styles.pageSubtitle}>Review your call activity</Text>

//       {/* Search */}
//       <View style={styles.searchContainer}>
//         <Text style={styles.searchIcon}>
//           <Ionicons
//             name="search"
//             color={"rgba(255, 255, 255, 0.5)"}
//             size={20}
//           />
//         </Text>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search calls..."
//           placeholderTextColor="rgba(255, 255, 255, 0.5)"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Filter Tabs */}
//       <View style={styles.filterTabs}>
//         <FilterTab
//           title="All"
//           filter="all"
//           isActive={activeFilter === "all"}
//           onPress={() => setActiveFilter("all")}
//         />
//         <FilterTab
//           title="Accepted"
//           filter="accepted"
//           isActive={activeFilter === "accepted"}
//           onPress={() => setActiveFilter("accepted")}
//         />
//         <FilterTab
//           title="Rejected"
//           filter="rejected"
//           isActive={activeFilter === "rejected"}
//           onPress={() => setActiveFilter("rejected")}
//         />
//         <FilterTab
//           title="Missed"
//           filter="missed"
//           isActive={activeFilter === "missed"}
//           onPress={() => setActiveFilter("missed")}
//         />
//       </View>

//       {/* Stats Summary */}
//       <View style={styles.statsGrid}>
//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{stats.total}</Text>
//           <Text style={styles.statLabel}>Total Calls</Text>
//         </View>

//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{stats.accepted}</Text>
//           <Text style={styles.statLabel}>Accepted</Text>
//         </View>

//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{stats.avgDuration}</Text>
//           <Text style={styles.statLabel}>Avg Duration</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//       <Header />

//       <FlatList
//         data={filteredHistory}
//         renderItem={renderCallHistoryItem}
//         keyExtractor={(item) => item.id}
//         ListHeaderComponent={renderListHeader}
//         ListEmptyComponent={EmptyState}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor="rgba(255, 255, 255, 0.8)"
//             titleColor="rgba(255, 255, 255, 0.8)"
//           />
//         }
//         contentContainerStyle={[
//           styles.flatListContainer,
//           filteredHistory.length === 0 && styles.flatListEmptyContainer,
//         ]}
//         showsVerticalScrollIndicator={false}
//         initialNumToRender={15} // Increased from 10
//         maxToRenderPerBatch={15} // Increased from 10
//         windowSize={21} // Increased from 10
//         scrollEventThrottle={16} // Added for smooth scroll
//         maintainVisibleContentPosition={{
//           // Prevents jumping
//           minIndexForVisible: 0,
//         }}
//         removeClippedSubviews={false}
//         getItemLayout={(data, index) => ({
//           length: 200, // Approximate height of each item
//           offset: 200 * index,
//           index,
//         })}
//       />
//     </ThemedView>
//   );
// };

// export default CallHistory;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   flatListContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   flatListEmptyContainer: {
//     flexGrow: 1,
//     // justifyContent: 'center',
//   },
//   listHeader: {
//     marginBottom: 20,
//   },
//   pageTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: "white",
//     marginBottom: 8,
//   },
//   pageSubtitle: {
//     fontSize: 16,
//     color: "rgba(255, 255, 255, 0.7)",
//     marginBottom: 30,
//   },
//   searchContainer: {
//     position: "relative",
//     marginBottom: 20,
//   },
//   searchIcon: {
//     position: "absolute",
//     left: 12,
//     top: 12,
//     fontSize: 16,
//     color: "rgba(255, 255, 255, 0.5)",
//     zIndex: 1,
//   },
//   searchInput: {
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderRadius: 12,
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     color: "white",
//     fontSize: 14,
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.1)",
//   },
//   filterTabs: {
//     flexDirection: "row",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderRadius: 12,
//     padding: 4,
//     marginBottom: 30,
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.1)",
//   },
//   filterTab: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   filterTabActive: {
//     backgroundColor: "#4ade80",
//   },
//   filterTabText: {
//     fontSize: 14,
//     fontWeight: "500",
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   filterTabTextActive: {
//     color: "white",
//   },
//   statsGrid: {
//     flexDirection: "row",
//     gap: 12,
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderRadius: 12,
//     padding: 16,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "rgba(255, 255, 255, 0.1)",
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#4ade80",
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 11,
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   historyItem: {
//     backgroundColor: "white",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   historyHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 15,
//     marginBottom: 12,
//   },
//   callerAvatar: {
//     width: 45,
//     height: 45,
//     backgroundColor: "#4ade80",
//     borderRadius: 22.5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   callerInitials: {
//     color: "white",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   callerInfo: {
//     flex: 1,
//   },
//   callerName: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#1f2937",
//     marginBottom: 2,
//   },
//   callerPhone: {
//     fontSize: 13,
//     color: "#6b7280",
//     marginBottom: 2,
//   },
//   agentName: {
//     fontSize: 12,
//     color: "#9ca3af",
//     fontStyle: "italic",
//   },
//   callStatus: {
//     alignItems: "flex-end",
//     gap: 4,
//   },
//   statusBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   statusText: {
//     fontSize: 11,
//     fontWeight: "600",
//   },
//   callTime: {
//     fontSize: 12,
//     color: "#9ca3af",
//   },
//   callDetails: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 12,
//     paddingTop: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#f3f4f6",
//     marginBottom: 12,
//   },
//   callTypeContainer: {
//     backgroundColor: "#dbeafe",
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   callType: {
//     fontSize: 11,
//     fontWeight: "500",
//     color: "#1e40af",
//   },
//   callDuration: {
//     fontSize: 12,
//     color: "#6b7280",
//     fontWeight: "500",
//   },
//   callActions: {
//     flexDirection: "row",
//     gap: 8,
//   },
//   actionBtn: {
//     paddingHorizontal: 12,
//     paddingVertical: 12,
//     borderRadius: 12,
//     flex: 1,
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "center",
//   },

//   btnCallback: {
//     backgroundColor: "#4ade80",
//   },
//   btnCallbackText: {
//     color: "white",
//     fontSize: 12,
//     fontWeight: "500",
//     marginLeft: 8,
//   },
//   btnDetails: {
//     backgroundColor: "#f3f4f6",
//   },
//   btnDetailsText: {
//     color: "#6b7280",
//     fontSize: 12,
//     fontWeight: "500",
//     marginLeft: 8,
//   },
//   emptyState: {
//     alignItems: "center",
//     padding: 40,
//   },
//   emptyIcon: {
//     fontSize: 48,
//     marginBottom: 16,
//     opacity: 0.5,
//   },
//   emptyTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 8,
//     color: "rgba(255, 255, 255, 0.8)",
//     marginTop: 10,
//   },
//   emptySubtitle: {
//     fontSize: 14,
//     color: "rgba(255, 255, 255, 0.6)",
//     textAlign: "center",
//     lineHeight: 20,
//   },
//   bottomNav: {
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     borderTopWidth: 1,
//     borderTopColor: "rgba(255, 255, 255, 0.1)",
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   navItems: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   navItem: {
//     alignItems: "center",
//     padding: 8,
//     borderRadius: 12,
//     minWidth: 60,
//   },
//   navItemActive: {
//     backgroundColor: "rgba(74, 222, 128, 0.2)",
//   },
//   navIcon: {
//     fontSize: 20,
//     marginBottom: 4,
//   },
//   navLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "rgba(255, 255, 255, 0.6)",
//   },
//   navLabelActive: {
//     color: "#4ade80",
//   },
//   retryButton: {
//     backgroundColor: "#4ade80",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginTop: 10,
//   },
//   retryButtonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   loadingState: {
//     alignItems: "center",
//     padding: 40,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: "rgba(255, 255, 255, 0.8)",
//   },
// });






























import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  StatusBar,
  Alert,
  Linking,
  FlatList,
  RefreshControl,
} from "react-native";
import { BlurView } from "expo-blur";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/header";
import { useGet } from "@/hooks/useApi";

import { FontAwesome6, FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  CallHistoryItem,
  CallHistoryApiResponse,
  transformCallHistoryData,
} from "@/components/callHistoryTypes";

const { width } = Dimensions.get("window");

const CallHistory: React.FC = () => {
  // API hook for fetching call history
  const {
    data: apiData,
    loading,
    error,
    get: fetchCallHistory,
  } = useGet("/call-history");
  
  const [callHistory, setCallHistory] = useState<CallHistoryItem[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<CallHistoryItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "accepted" | "rejected" | "missed"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    accepted: 0,
    avgDuration: "0m",
  });

  const updateStats = (calls: CallHistoryItem[]) => {
    const total = calls.length;
    const accepted = calls.filter((call) => call.status === "accepted").length;

    // Calculate average duration (only for accepted calls with valid duration)
    const acceptedCallsWithDuration = calls.filter(
      (call) => call.status === "accepted" && call.duration !== "-"
    );

    let avgDuration = "0m";
    if (acceptedCallsWithDuration.length > 0) {
      const totalMinutes = acceptedCallsWithDuration.reduce((sum, call) => {
        const duration = call.duration.replace(/[^\d]/g, "");
        return sum + (parseInt(duration) || 0);
      }, 0);
      avgDuration = `${Math.round(
        totalMinutes / acceptedCallsWithDuration.length
      )}m`;
    }

    setStats({ total, accepted, avgDuration });
  };

  const loadCallHistory = useCallback(async () => {
    try {
      await fetchCallHistory();
    } catch (error) {
      console.error("Failed to load call history:", error);
      Alert.alert(
        "Error",
        "Failed to load call history. Please check your connection and try again.",
        [{ text: "OK" }]
      );
    }
  }, [fetchCallHistory]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadCallHistory();
    setRefreshing(false);
  }, [loadCallHistory]);

  // Load call history on component mount
  useEffect(() => {
    loadCallHistory();
  }, []);

  // Transform API data when received
  useEffect(() => {
    if (apiData?.calls) {
      const transformedData = transformCallHistoryData(apiData.calls);
      console.log("API Data:+++>", transformedData);
      setCallHistory(transformedData);
      updateStats(transformedData);
    }
  }, [apiData]);

  // Filter calls when filters change - using useMemo for better performance
  const memoizedFilteredHistory = useMemo(() => {
    let filtered = callHistory;

    // Apply status filter
    if (activeFilter !== "all") {
      filtered = filtered.filter((call) => call.status === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (call) =>
          call?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          call.phone?.includes(searchQuery)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery, callHistory]);

  useEffect(() => {
    setFilteredHistory(memoizedFilteredHistory);
  }, [memoizedFilteredHistory]);

  // Function to handle phone dialing
  const handlePhoneCall = async (phoneNumber: string) => {
    try {
      const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, "");
      const phoneUrl = `tel:${cleanPhoneNumber}`;
      const supported = await Linking.canOpenURL(phoneUrl);

      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert(
          "Phone Not Available",
          "Phone dialing is not available on this device",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      console.error("Error opening phone dialer:", error);
      Alert.alert("Error", "Failed to open phone dialer. Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  const handleCallBack = async (phoneNumber: string) => {
    Alert.alert("Call Back", `Would you like to call ${phoneNumber}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Call",
        onPress: () => handlePhoneCall(phoneNumber),
      },
    ]);
  };

  const handleShowDetails = (call: CallHistoryItem) => {
    Alert.alert(
      "Call Details",
      `Details for ${call.name}\n\n• Lead ID: ${call.leadId}\n• Agent: ${call.agentName}\n• Status: ${call.status}\n• Call Type: ${call.type}\n• Duration: ${call.duration}\n• Phone: ${call.phone}`,
      [{ text: "OK" }]
    );
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "accepted":
        return { backgroundColor: "#dcfce7", color: "#166534" };
      case "rejected":
        return { backgroundColor: "#fee2e2", color: "#991b1b" };
      case "missed":
        return { backgroundColor: "#fef3c7", color: "#92400e" };
      default:
        return { backgroundColor: "#f3f4f6", color: "#6b7280" };
    }
  };

  const FilterTab: React.FC<{
    title: string;
    filter: "all" | "accepted" | "rejected" | "missed";
    isActive: boolean;
    onPress: () => void;
  }> = React.memo(({ title, filter, isActive, onPress }) => (
    <TouchableOpacity
      style={[styles.filterTab, isActive && styles.filterTabActive]}
      onPress={onPress}
    >
      <Text
        style={[styles.filterTabText, isActive && styles.filterTabTextActive]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ));

  // Create a simple card without animations to avoid issues
  const CallHistoryCard: React.FC<{ item: CallHistoryItem }> = React.memo(({ item }) => {
    const statusStyle = getStatusStyle(item.status);

    return (
      <View style={styles.historyItem}>
        <View style={styles.historyHeader}>
          <View style={styles.callerAvatar}>
            <Text style={styles.callerInitials}>{item.initials}</Text>
          </View>

          <View style={styles.callerInfo}>
            <Text style={styles.callerName}>{item.name}</Text>
            <Text style={styles.callerPhone}>{item.phone}</Text>
          </View>

          <View style={styles.callStatus}>
            <View style={[styles.statusBadge, statusStyle]}>
              <Text style={[styles.statusText, { color: statusStyle.color }]}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </Text>
            </View>
            <Text style={styles.callTime}>{item.time}</Text>
          </View>
        </View>

        <View style={styles.callDetails}>
          <View style={styles.callTypeContainer}>
            <Text style={styles.callType}>{item.type}</Text>
          </View>
          <Text style={styles.callDuration}>{item.duration}</Text>
        </View>

        <View style={styles.callActions}>
          <TouchableOpacity
            style={[styles.actionBtn, styles.btnCallback]}
            onPress={() => handlePhoneCall(item.phone)}
          >
            <FontAwesome5 name="phone-alt" size={14} color="#fff" />
            <Text style={styles.btnCallbackText}> Call Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionBtn, styles.btnDetails]}
            onPress={() => handleShowDetails(item)}
          >
            <FontAwesome5 name="list" size={14} color="#6b7280" />
            <Text style={styles.btnDetailsText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  const LoadingState: React.FC = () => (
    <View style={styles.loadingState}>
      <Text style={styles.loadingText}>Loading calls...</Text>
    </View>
  );

  const EmptyState = () => {
    if (loading) {
      return <LoadingState />;
    }

    return (
      <View style={styles.emptyState}>
        <FontAwesome5 name="phone-alt" size={28} color="white" />
        <Text style={styles.emptyTitle}>
          No {activeFilter === "all" ? "" : activeFilter} calls found
        </Text>
        <Text style={styles.emptySubtitle}>
          Your call history will appear here once you start receiving calls.
        </Text>
      </View>
    );
  };

  const renderCallHistoryItem = ({ item }: { item: CallHistoryItem }) => (
    <CallHistoryCard item={item} />
  );

  const renderListHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.pageTitle}>Call History</Text>
      <Text style={styles.pageSubtitle}>Review your call activity</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>
          <Ionicons
            name="search"
            color={"rgba(255, 255, 255, 0.5)"}
            size={20}
          />
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search calls..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <FilterTab
          title="All"
          filter="all"
          isActive={activeFilter === "all"}
          onPress={() => setActiveFilter("all")}
        />
        <FilterTab
          title="Accepted"
          filter="accepted"
          isActive={activeFilter === "accepted"}
          onPress={() => setActiveFilter("accepted")}
        />
        <FilterTab
          title="Rejected"
          filter="rejected"
          isActive={activeFilter === "rejected"}
          onPress={() => setActiveFilter("rejected")}
        />
        <FilterTab
          title="Missed"
          filter="missed"
          isActive={activeFilter === "missed"}
          onPress={() => setActiveFilter("missed")}
        />
      </View>

      {/* Stats Summary */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.total}</Text>
          <Text style={styles.statLabel}>Total Calls</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.accepted}</Text>
          <Text style={styles.statLabel}>Accepted</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{stats.avgDuration}</Text>
          <Text style={styles.statLabel}>Avg Duration</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <Header />

      <FlatList
        data={filteredHistory}
        renderItem={renderCallHistoryItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={EmptyState}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="rgba(255, 255, 255, 0.8)"
            titleColor="rgba(255, 255, 255, 0.8)"
          />
        }
        contentContainerStyle={[
          styles.flatListContainer,
          filteredHistory.length === 0 && styles.flatListEmptyContainer,
        ]}
        showsVerticalScrollIndicator={false}
        // Removed problematic performance optimizations
        removeClippedSubviews={true}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={10}
        updateCellsBatchingPeriod={50}
        // Removed getItemLayout since item heights vary
        // getItemLayout is only recommended when you have fixed height items
      />
    </ThemedView>
  );
};

export default CallHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  flatListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  flatListEmptyContainer: {
    flexGrow: 1,
  },
  listHeader: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 30,
  },
  searchContainer: {
    position: "relative",
    marginBottom: 20,
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: 12,
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    paddingHorizontal: 40,
    paddingVertical: 12,
    color: "white",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  filterTabs: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 4,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  filterTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  filterTabActive: {
    backgroundColor: "#4ade80",
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
  },
  filterTabTextActive: {
    color: "white",
  },
  statsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4ade80",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.7)",
  },
  historyItem: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  historyHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 12,
  },
  callerAvatar: {
    width: 45,
    height: 45,
    backgroundColor: "#4ade80",
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  callerInitials: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  callerInfo: {
    flex: 1,
  },
  callerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 2,
  },
  callerPhone: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 2,
  },
  agentName: {
    fontSize: 12,
    color: "#9ca3af",
    fontStyle: "italic",
  },
  callStatus: {
    alignItems: "flex-end",
    gap: 4,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
  },
  callTime: {
    fontSize: 12,
    color: "#9ca3af",
  },
  callDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    marginBottom: 12,
  },
  callTypeContainer: {
    backgroundColor: "#dbeafe",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  callType: {
    fontSize: 11,
    fontWeight: "500",
    color: "#1e40af",
  },
  callDuration: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "500",
  },
  callActions: {
    flexDirection: "row",
    gap: 8,
  },
  actionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnCallback: {
    backgroundColor: "#4ade80",
  },
  btnCallbackText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 8,
  },
  btnDetails: {
    backgroundColor: "#f3f4f6",
  },
  btnDetailsText: {
    color: "#6b7280",
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 8,
  },
  emptyState: {
    alignItems: "center",
    padding: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 10,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "center",
    lineHeight: 20,
  },
  bottomNav: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  navItems: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
    minWidth: 60,
  },
  navItemActive: {
    backgroundColor: "rgba(74, 222, 128, 0.2)",
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.6)",
  },
  navLabelActive: {
    color: "#4ade80",
  },
  retryButton: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  retryButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  loadingState: {
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
});