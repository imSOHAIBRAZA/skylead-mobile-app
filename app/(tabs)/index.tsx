// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });























// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
//   StatusBar,
// } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import  Header  from '@/components/header';

// const { width } = Dimensions.get('window');

// interface CallRequest {
//   id: string;
//   name: string;
//   phone: string;
//   initials: string;
//   type: string;
//   purpose: string;
//   timeAgo: string;
//   isProcessing?: boolean;
//   processType?: 'accept' | 'reject';
// }

// const CallDashboard: React.FC = () => {
//   const [callRequests, setCallRequests] = useState<CallRequest[]>([
//     {
//       id: '1',
//       name: 'Alice Miller',
//       phone: '+1 (555) 123-4567',
//       initials: 'AM',
//       type: 'Sales Inquiry',
//       purpose: 'Interested in premium package consultation and pricing details',
//       timeAgo: '2 min ago',
//     },
//     {
//       id: '2',
//       name: 'Robert Johnson',
//       phone: '+1 (555) 987-6543',
//       initials: 'RJ',
//       type: 'Support',
//       purpose: 'Technical support needed for account setup and configuration',
//       timeAgo: '5 min ago',
//     },
//     {
//       id: '3',
//       name: 'Sarah Davis',
//       phone: '+1 (555) 456-7890',
//       initials: 'SD',
//       type: 'Follow-up',
//       purpose: 'Follow-up call regarding previous meeting and next steps',
//       timeAgo: '8 min ago',
//     },
//   ]);

//   const [todayCalls] = useState(12);
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const handleCallAction = (id: string, action: 'accept' | 'reject') => {
//     setCallRequests(prev =>
//       prev.map(call =>
//         call.id === id
//           ? { ...call, isProcessing: true, processType: action }
//           : call
//       )
//     );

//     // Simulate processing delay
//     setTimeout(() => {
//       setCallRequests(prev => prev.filter(call => call.id !== id));
//     }, 2000);
//   };

//   const addNewCallRequest = () => {
//     const names = ['Michael Brown', 'Emma Wilson', 'David Lee', 'Lisa Garcia'];
//     const phones = ['+1 (555) 111-2222', '+1 (555) 333-4444', '+1 (555) 555-6666', '+1 (555) 777-8888'];
//     const types = ['Sales Inquiry', 'Support', 'Follow-up', 'Consultation'];
//     const purposes = [
//       'Interested in enterprise solutions',
//       'Need help with account issues',
//       'Discussing project requirements',
//       'Requesting product demonstration'
//     ];
    
//     const randomIndex = Math.floor(Math.random() * names.length);
//     const name = names[randomIndex];
//     const initials = name.split(' ').map(n => n[0]).join('');
    
//     const newRequest: CallRequest = {
//       id: Date.now().toString(),
//       name,
//       phone: phones[randomIndex],
//       initials,
//       type: types[randomIndex],
//       purpose: purposes[randomIndex],
//       timeAgo: 'Just now',
//     };
    
//     setCallRequests(prev => [newRequest, ...prev]);
//   };

//   useEffect(() => {
//     const interval = setInterval(addNewCallRequest, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const CallRequestCard: React.FC<{ request: CallRequest }> = ({ request }) => {
//     const slideAnim = new Animated.Value(0);

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }, []);

//     if (request.isProcessing) {
//       return (
//         <View style={styles.callRequest}>
//           <View style={styles.processingContainer}>
//             <Text style={styles.processingIcon}>
//               {request.processType === 'accept' ? '✅' : '❌'}
//             </Text>
//             <Text style={styles.processingTitle}>
//               {request.processType === 'accept' ? 'Call Accepted' : 'Call Declined'}
//             </Text>
//             <Text style={styles.processingSubtitle}>
//               {request.processType === 'accept' 
//                 ? `Connecting to ${request.name}...` 
//                 : `${request.name} has been notified`}
//             </Text>
//           </View>
//         </View>
//       );
//     }

//     return (
//       <Animated.View
//         style={[
//           styles.callRequest,
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
//         <View style={styles.callHeader}>
//           {/* <LinearGradient
//             colors={['#4ade80', '#22c55e']}
//             style={styles.callerAvatar}
//           > */}
//             {/* <Text style={styles.callerInitials}>{request.initials}</Text> */}
//           {/* </LinearGradient> */}
          
//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{request.name}</Text>
//             <Text style={styles.callerDetails}>{request.phone}</Text>
//           </View>
          
//           <View style={styles.callTimeContainer}>
//             <Text style={styles.callTime}>{request.timeAgo}</Text>
//           </View>
//         </View>

//         <View style={styles.callInfo}>
//           <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{request.type}</Text>
//           </View>
//           <Text style={styles.callPurpose}>{request.purpose}</Text>
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.btn, styles.btnAccept]}
//             onPress={() => handleCallAction(request.id, 'accept')}
//           >
//             <Text style={styles.btnAcceptText}>📞 Accept</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.btn, styles.btnReject]}
//             onPress={() => handleCallAction(request.id, 'reject')}
//           >
//             <Text style={styles.btnRejectText}>❌ Decline</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
//       <Text style={styles.emptyIcon}>📞</Text>
//       <Text style={styles.emptyTitle}>No Pending Calls</Text>
//       <Text style={styles.emptySubtitle}>All caught up! New call requests will appear here.</Text>
//     </View>
//   );

//   return (
//     // <LinearGradient
//     //   colors={['#2c5f5f', '#1a4a4a', '#0d3333']}
//     //   style={styles.container}
//     // >
//     // <View style={styles.container}>
//        <ThemedView style={styles.container}>
//       {/* <StatusBar barStyle="light-content" /> */}
      
//       {/* Header */}
//       {/* <View style={styles.header}>
//         <View style={styles.logo}>
//           <View style={styles.logoIcon}>
//             <Text style={styles.logoIconText}>S</Text>
//           </View>
//           <Text style={styles.logoText}>Skylead</Text>
//         </View>
        
//         <View style={styles.userInfo}>
//           <Text style={styles.userName}>John Doe</Text>
//           <View style={styles.userAvatar}>
//             <Text style={styles.userInitials}>JD</Text>
//           </View>
//         </View>
//       </View> */}

//       <Header/>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Main Content */}
//         <View style={styles.mainContent}>
//           <Text style={styles.pageTitle}>Call Dashboard</Text>
//           <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

//           {/* Stats */}
//           <View style={styles.statsGrid}>
//             <View style={styles.statCard}>
//               <Text style={styles.statNumber}>{callRequests.length}</Text>
//               <Text style={styles.statLabel}>Pending Calls</Text>
//             </View>
            
//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{todayCalls}</Text>
//               <Text style={styles.statLabel}>Today's Calls</Text>
//             </View>
//           </View>

//           {/* Call Requests */}
//           <Text style={styles.sectionTitle}>Incoming Requests</Text>
          
//           {callRequests.length === 0 ? (
//             <EmptyState />
//           ) : (
//             callRequests.map((request) => (
//               <CallRequestCard key={request.id} request={request} />
//             ))
//           )}
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       {/* <BlurView intensity={20} style={styles.bottomNav}>
//         <View style={styles.navItems}>
//           <TouchableOpacity
//             style={[styles.navItem, activeTab === 'dashboard' && styles.navItemActive]}
//             onPress={() => setActiveTab('dashboard')}
//           >
//             <Text style={styles.navIcon}>📞</Text>
//             <Text style={[styles.navLabel, activeTab === 'dashboard' && styles.navLabelActive]}>
//               Dashboard
//             </Text>
//             {callRequests.length > 0 && (
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>{callRequests.length}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.navItem, activeTab === 'history' && styles.navItemActive]}
//             onPress={() => setActiveTab('history')}
//           >
//             <Text style={styles.navIcon}>📋</Text>
//             <Text style={[styles.navLabel, activeTab === 'history' && styles.navLabelActive]}>
//               History
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.navItem, activeTab === 'profile' && styles.navItemActive]}
//             onPress={() => setActiveTab('profile')}
//           >
//             <Text style={styles.navIcon}>👤</Text>
//             <Text style={[styles.navLabel, activeTab === 'profile' && styles.navLabelActive]}>
//               Profile
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.navItem, activeTab === 'settings' && styles.navItemActive]}
//             onPress={() => setActiveTab('settings')}
//           >
//             <Text style={styles.navIcon}>⚙️</Text>
//             <Text style={[styles.navLabel, activeTab === 'settings' && styles.navLabelActive]}>
//               Settings
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </BlurView> */}
//       </ThemedView>
//   );
// };

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
//   statsGrid: {
//     flexDirection: 'row',
//     gap: 15,
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#4ade80',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 20,
//   },
//   callRequest: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   callHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 15,
//     marginBottom: 15,
//   },
//   callerAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callerInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 18,
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
//   callerDetails: {
//     fontSize: 14,
//     color: '#6b7280',
//   },
//   callTimeContainer: {
//     backgroundColor: '#f3f4f6',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   callTime: {
//     fontSize: 12,
//     color: '#9ca3af',
//   },
//   callInfo: {
//     marginBottom: 20,
//   },
//   callTypeContainer: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#dbeafe',
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 20,
//     marginBottom: 8,
//   },
//   callType: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#1e40af',
//   },
//   callPurpose: {
//     fontSize: 14,
//     color: '#4b5563',
//     lineHeight: 20,
//   },
//   callActions: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   btn: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   btnAccept: {
//     backgroundColor: '#4ade80',
//   },
//   btnAcceptText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   btnReject: {
//     backgroundColor: '#f3f4f6',
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
//   btnRejectText: {
//     color: '#6b7280',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   processingContainer: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   processingIcon: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   processingTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//     color: '#1f2937',
//   },
//   processingSubtitle: {
//     fontSize: 14,
//     color: '#6b7280',
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
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
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
//     position: 'relative',
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
//   notificationBadge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#ef4444',
//     borderRadius: 9,
//     width: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: '600',
//   },
// });

// export default CallDashboard;

















//****** */ LAST VERSION

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Linking,
//   Alert,
// } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import  Header  from '@/components/header';

// const { width } = Dimensions.get('window');

// interface CallRequest {
//   id: string;
//   name: string;
//   phone: string;
//   initials: string;
//   type: string;
//   purpose: string;
//   timeAgo: string;
//   isProcessing?: boolean;
//   processType?: 'accept' | 'reject';
// }

// const CallDashboard: React.FC = () => {
//   const [callRequests, setCallRequests] = useState<CallRequest[]>([
//     {
//       id: '1',
//       name: 'Alice Miller',
//       phone: '+1 (555) 123-4567',
//       initials: 'AM',
//       type: 'Sales Inquiry',
//       purpose: 'Interested in premium package consultation and pricing details',
//       timeAgo: '2 min ago',
//     },
//     {
//       id: '2',
//       name: 'Robert Johnson',
//       phone: '+1 (555) 987-6543',
//       initials: 'RJ',
//       type: 'Support',
//       purpose: 'Technical support needed for account setup and configuration',
//       timeAgo: '5 min ago',
//     },
//     {
//       id: '3',
//       name: 'Sarah Davis',
//       phone: '+1 (555) 456-7890',
//       initials: 'SD',
//       type: 'Follow-up',
//       purpose: 'Follow-up call regarding previous meeting and next steps',
//       timeAgo: '8 min ago',
//     },
//   ]);

//   const [todayCalls] = useState(12);
//   const [activeTab, setActiveTab] = useState('dashboard');

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

//   const handleCallAction = async (id: string, action: 'accept' | 'reject') => {
//     if (action === 'accept') {
//       // Find the call request to get the phone number
//       const callRequest = callRequests.find(call => call.id === id);
      
//       if (callRequest) {
//         // Open phone dialer
//         await handlePhoneCall(callRequest.phone);
//       }
//     }

//     // Update the UI to show processing state
//     setCallRequests(prev =>
//       prev.map(call =>
//         call.id === id
//           ? { ...call, isProcessing: true, processType: action }
//           : call
//       )
//     );

//     // Simulate processing delay and remove from list
//     setTimeout(() => {
//       setCallRequests(prev => prev.filter(call => call.id !== id));
//     }, 2000);
//   };

//   const addNewCallRequest = () => {
//     const names = ['Michael Brown', 'Emma Wilson', 'David Lee', 'Lisa Garcia'];
//     const phones = ['+1 (555) 111-2222', '+1 (555) 333-4444', '+1 (555) 555-6666', '+1 (555) 777-8888'];
//     const types = ['Sales Inquiry', 'Support', 'Follow-up', 'Consultation'];
//     const purposes = [
//       'Interested in enterprise solutions',
//       'Need help with account issues',
//       'Discussing project requirements',
//       'Requesting product demonstration'
//     ];
    
//     const randomIndex = Math.floor(Math.random() * names.length);
//     const name = names[randomIndex];
//     const initials = name.split(' ').map(n => n[0]).join('');
    
//     const newRequest: CallRequest = {
//       id: Date.now().toString(),
//       name,
//       phone: phones[randomIndex],
//       initials,
//       type: types[randomIndex],
//       purpose: purposes[randomIndex],
//       timeAgo: 'Just now',
//     };
    
//     setCallRequests(prev => [newRequest, ...prev]);
//   };

//   useEffect(() => {
//     const interval = setInterval(addNewCallRequest, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const CallRequestCard: React.FC<{ request: CallRequest }> = ({ request }) => {
//     const slideAnim = new Animated.Value(0);

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }, []);

//     if (request.isProcessing) {
//       return (
//         <View style={styles.callRequest}>
//           <View style={styles.processingContainer}>
//             <Text style={styles.processingIcon}>
//               {request.processType === 'accept' ? '✅' : '❌'}
//             </Text>
//             <Text style={styles.processingTitle}>
//               {request.processType === 'accept' ? 'Call Accepted' : 'Call Declined'}
//             </Text>
//             <Text style={styles.processingSubtitle}>
//               {request.processType === 'accept' 
//                 ? `Opening dialer for ${request.name}...` 
//                 : `${request.name} has been notified`}
//             </Text>
//           </View>
//         </View>
//       );
//     }

//     return (
//       <Animated.View
//         style={[
//           styles.callRequest,
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
//         <View style={styles.callHeader}>
//           {/* <LinearGradient
//             colors={['#4ade80', '#22c55e']}
//             style={styles.callerAvatar}
//           > */}
//             {/* <Text style={styles.callerInitials}>{request.initials}</Text> */}
//           {/* </LinearGradient> */}
          
//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{request.name}</Text>
//             {/* <TouchableOpacity 
//               onPress={() => handlePhoneCall(request.phone)}
//               style={styles.phoneNumberContainer}
//             > */}
//               <Text style={styles.callerDetails}>{request.phone}</Text>
//             {/* </TouchableOpacity> */}
//           </View>
          
//           <View style={styles.callTimeContainer}>
//             <Text style={styles.callTime}>{request.timeAgo}</Text>
//           </View>
//         </View>

//         <View style={styles.callInfo}>
//           <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{request.type}</Text>
//           </View>
//           <Text style={styles.callPurpose}>{request.purpose}</Text>
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.btn, styles.btnAccept]}
//             onPress={() => handleCallAction(request.id, 'accept')}
//           >
//             <Text style={styles.btnAcceptText}>📞 Accept & Call</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.btn, styles.btnReject]}
//             onPress={() => handleCallAction(request.id, 'reject')}
//           >
//             <Text style={styles.btnRejectText}>❌ Decline</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
//       <Text style={styles.emptyIcon}>📞</Text>
//       <Text style={styles.emptyTitle}>No Pending Calls</Text>
//       <Text style={styles.emptySubtitle}>All caught up! New call requests will appear here.</Text>
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//       <Header/>

//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         {/* Main Content */}
//         <View style={styles.mainContent}>
//           <Text style={styles.pageTitle}>Call Dashboard</Text>
//           <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

//           {/* Stats */}
//           <View style={styles.statsGrid}>
//             <View style={styles.statCard}>
//               <Text style={styles.statNumber}>{callRequests.length}</Text>
//               <Text style={styles.statLabel}>Pending Calls</Text>
//             </View>
            
//             <View  style={styles.statCard}>
//               <Text style={styles.statNumber}>{todayCalls}</Text>
//               <Text style={styles.statLabel}>Today's Calls</Text>
//             </View>
//           </View>

//           {/* Call Requests */}
//           <Text style={styles.sectionTitle}>Incoming Requests</Text>
          
//           {callRequests.length === 0 ? (
//             <EmptyState />
//           ) : (
//             callRequests?.map((request) => (
//               <CallRequestCard key={request.id} request={request} />
//             ))
//           )}
//         </View>
//       </ScrollView>
//     </ThemedView>
//   );
// };

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
//   statsGrid: {
//     flexDirection: 'row',
//     gap: 15,
//     marginBottom: 30,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#4ade80',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 20,
//   },
//   callRequest: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   callHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 15,
//     marginBottom: 15,
//   },
//   callerAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   callerInitials: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 18,
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
//   phoneNumberContainer: {
//     alignSelf: 'flex-start',
//   },
//   callerDetails: {
//     fontSize: 14,
//     color: '#6b7280',
//     // textDecorationLine: 'underline',
//   },
//   callTimeContainer: {
//     backgroundColor: '#f3f4f6',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   callTime: {
//     fontSize: 12,
//     color: '#9ca3af',
//   },
//   callInfo: {
//     marginBottom: 20,
//   },
//   callTypeContainer: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#dbeafe',
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 20,
//     marginBottom: 8,
//   },
//   callType: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#1e40af',
//   },
//   callPurpose: {
//     fontSize: 14,
//     color: '#4b5563',
//     lineHeight: 20,
//   },
//   callActions: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   btn: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   btnAccept: {
//     backgroundColor: '#4ade80',
//   },
//   btnAcceptText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   btnReject: {
//     backgroundColor: '#f3f4f6',
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
//   btnRejectText: {
//     color: '#6b7280',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   processingContainer: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   processingIcon: {
//     fontSize: 24,
//     marginBottom: 8,
//   },
//   processingTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//     color: '#1f2937',
//   },
//   processingSubtitle: {
//     fontSize: 14,
//     color: '#6b7280',
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
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
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
//     position: 'relative',
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
//   notificationBadge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#ef4444',
//     borderRadius: 9,
//     width: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 10,
//     fontWeight: '600',
//   },
// });

// export default CallDashboard;









import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
  Linking,
  Alert,
  FlatList,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header';
import { FontAwesome6,FontAwesome5,Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface CallRequest {
  id: string;
  name: string;
  phone: string;
  initials: string;
  type: string;
  purpose: string;
  timeAgo: string;
  isProcessing?: boolean;
  processType?: 'accept' | 'reject';
}

const CallDashboard: React.FC = () => {
  const [callRequests, setCallRequests] = useState<CallRequest[]>([
    {
      id: '1',
      name: 'Alice Miller',
      phone: '+1 (555) 123-4567',
      initials: 'AM',
      type: 'Sales Inquiry',
      purpose: 'Interested in premium package consultation and pricing details',
      timeAgo: '2 min ago',
    },
    {
      id: '2',
      name: 'Robert Johnson',
      phone: '+1 (555) 987-6543',
      initials: 'RJ',
      type: 'Support',
      purpose: 'Technical support needed for account setup and configuration',
      timeAgo: '5 min ago',
    },
    {
      id: '3',
      name: 'Sarah Davis',
      phone: '+1 (555) 456-7890',
      initials: 'SD',
      type: 'Follow-up',
      purpose: 'Follow-up call regarding previous meeting and next steps',
      timeAgo: '8 min ago',
    },
  ]);

  const [todayCalls] = useState(12);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Function to handle phone dialing
  const handlePhoneCall = async (phoneNumber: string) => {
    try {
      // Clean the phone number (remove spaces, parentheses, and dashes)
      const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, '');
      const phoneUrl = `tel:${cleanPhoneNumber}`;
      
      // Check if the device can handle the tel: URL
      const supported = await Linking.canOpenURL(phoneUrl);
      
      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert(
          'Phone Not Available',
          'Phone dialing is not available on this device',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error opening phone dialer:', error);
      Alert.alert(
        'Error',
        'Failed to open phone dialer. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleCallAction = async (id: string, action: 'accept' | 'reject') => {
    if (action === 'accept') {
      // Find the call request to get the phone number
      const callRequest = callRequests.find(call => call.id === id);
      
      if (callRequest) {
        // Open phone dialer
        await handlePhoneCall(callRequest.phone);
      }
    }

    // Update the UI to show processing state
    setCallRequests(prev =>
      prev.map(call =>
        call.id === id
          ? { ...call, isProcessing: true, processType: action }
          : call
      )
    );

    // Simulate processing delay and remove from list
    setTimeout(() => {
      setCallRequests(prev => prev.filter(call => call.id !== id));
    }, 2000);
  };

  const addNewCallRequest = () => {
    const names = ['Michael Brown', 'Emma Wilson', 'David Lee', 'Lisa Garcia'];
    const phones = ['+1 (555) 111-2222', '+1 (555) 333-4444', '+1 (555) 555-6666', '+1 (555) 777-8888'];
    const types = ['Sales Inquiry', 'Support', 'Follow-up', 'Consultation'];
    const purposes = [
      'Interested in enterprise solutions',
      'Need help with account issues',
      'Discussing project requirements',
      'Requesting product demonstration'
    ];
    
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    const initials = name.split(' ').map(n => n[0]).join('');
    
    const newRequest: CallRequest = {
      id: Date.now().toString(),
      name,
      phone: phones[randomIndex],
      initials,
      type: types[randomIndex],
      purpose: purposes[randomIndex],
      timeAgo: 'Just now',
    };
    
    setCallRequests(prev => [newRequest, ...prev]);
  };

  useEffect(() => {
    const interval = setInterval(addNewCallRequest, 30000);
    return () => clearInterval(interval);
  }, []);

  const CallRequestCard: React.FC<{ request: CallRequest }> = ({ request }) => {
    const slideAnim = new Animated.Value(0);

    useEffect(() => {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, []);

    if (request.isProcessing) {
      return (
        <View style={styles.callRequest}>
          <View style={styles.processingContainer}>
            <Text style={styles.processingIcon}>
              {request.processType === 'accept' ? '✅' : '❌'}
            </Text>
            <Text style={styles.processingTitle}>
              {request.processType === 'accept' ? 'Call Accepted' : 'Call Declined'}
            </Text>
            <Text style={styles.processingSubtitle}>
              {request.processType === 'accept' 
                ? `Opening dialer for ${request.name}...` 
                : `${request.name} has been notified`}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <Animated.View
        style={[
          styles.callRequest,
          {
            opacity: slideAnim,
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.callHeader}>
          {/* <LinearGradient
            colors={['#4ade80', '#22c55e']}
            style={styles.callerAvatar}
          > */}
            {/* <Text style={styles.callerInitials}>{request.initials}</Text> */}
          {/* </LinearGradient> */}
          
          <View style={styles.callerInfo}>
            <Text style={styles.callerName}>{request.name}</Text>
            {/* <TouchableOpacity 
              onPress={() => handlePhoneCall(request.phone)}
              style={styles.phoneNumberContainer}
            > */}
              <Text style={styles.callerDetails}>{request.phone}</Text>
            {/* </TouchableOpacity> */}
          </View>
          
          <View style={styles.callTimeContainer}>
            <Text style={styles.callTime}>{request.timeAgo}</Text>
          </View>
        </View>

        <View style={styles.callInfo}>
          <View style={styles.callTypeContainer}>
            <Text style={styles.callType}>{request.type}</Text>
          </View>
          <Text style={styles.callPurpose}>{request.purpose}</Text>
        </View>

        <View style={styles.callActions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnAccept]}
            onPress={() => handleCallAction(request.id, 'accept')}
          >
            <FontAwesome5 name="phone-alt" size={14} color="#fff" /> 
            <Text style={styles.btnAcceptText}>
              
              Accept & Call
              </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.btn, styles.btnReject]}
            onPress={() => handleCallAction(request.id, 'reject')}
          >
            <FontAwesome5 name="phone-slash" size={14} color="#6b7280" /> 
            <Text style={styles.btnRejectText}>
               Decline
              </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  const EmptyState: React.FC = () => (
    <View style={styles.emptyState}>
     
        <FontAwesome5 name="phone-alt" size={28} color="white" /> 
      <Text style={styles.emptyTitle}>No Pending Calls</Text>
      <Text style={styles.emptySubtitle}>All caught up! New call requests will appear here.</Text>
    </View>
  );

  const renderCallRequest = ({ item }: { item: CallRequest }) => (
    <CallRequestCard request={item} />
  );

  const renderListHeader = () => (
    <View>
      <Text style={styles.pageTitle}>Call Dashboard</Text>
      <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

      {/* Stats */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{callRequests.length}</Text>
          <Text style={styles.statLabel}>Pending Calls</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{todayCalls}</Text>
          <Text style={styles.statLabel}>Today's Calls</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Incoming Requests</Text>
    </View>
  );

  const renderListEmpty = () => <EmptyState />;

  return (
    <ThemedView style={styles.container}>
      <Header />

      <FlatList
        data={callRequests}
        renderItem={renderCallRequest}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderListEmpty}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        // Optional: Add performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        getItemLayout={(data, index) => (
          {length: 200, offset: 200 * index, index} // Approximate item height
        )}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  flatListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  itemSeparator: {
    height: 0, // No separator needed as cards have their own margin
  },
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
  scrollView: {
    flex: 1,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 30,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4ade80',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  callRequest: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  callHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  callerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callerInitials: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  callerInfo: {
    flex: 1,
  },
  callerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  phoneNumberContainer: {
    alignSelf: 'flex-start',
  },
  callerDetails: {
    fontSize: 14,
    color: '#6b7280',
    // textDecorationLine: 'underline',
  },
  callTimeContainer: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  callTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  callInfo: {
    marginBottom: 20,
  },
  callTypeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  callType: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1e40af',
  },
  callPurpose: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  callActions: {
    flexDirection: 'row',
    gap: 12,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  btnAccept: {
    backgroundColor: '#4ade80',

  },
  btnAcceptText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  btnReject: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  btnRejectText: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  processingContainer: {
    alignItems: 'center',
    padding: 20,
  },
  processingIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  processingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1f2937',
  },
  processingSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  emptySubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  navItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    minWidth: 60,
    position: 'relative',
  },
  navItemActive: {
    backgroundColor: 'rgba(74, 222, 128, 0.2)',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.6)',
  },
  navLabelActive: {
    color: '#4ade80',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
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

export default CallDashboard;


