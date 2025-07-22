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









// import React, { useState, useEffect,useRef } from 'react';
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
//   FlatList,
// } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import Header from '@/components/header';
// import { FontAwesome6,FontAwesome5,Ionicons } from '@expo/vector-icons';
// import Pusher from 'pusher-js/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useAuth } from "@/context/AuthContext";
// import TextAvatar from "react-native-text-avatar";


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

//   const { user } = useAuth();
//   const [connectionStatus, setConnectionStatus] = useState('disconnected');
//   const [subscriptionStatus, setSubscriptionStatus] = useState('not_subscribed');
//   const [lastMessage, setLastMessage] = useState(null);
//   const [debugLogs, setDebugLogs] = useState([]);
//   const pusherRef = useRef(null);

//   const [callRequests, setCallRequests] = useState<CallRequest[]>([
//     // {
//     //   id: '1',
//     //   name: 'Alice Miller',
//     //   phone: '+1 (555) 123-4567',
//     //   initials: 'AM',
//     //   type: 'Sales Inquiry',
//     //   purpose: 'Interested in premium package consultation and pricing details',
//     //   timeAgo: '2 min ago',
//     // },
//     // {
//     //   id: '2',
//     //   name: 'Robert Johnson',
//     //   phone: '+1 (555) 987-6543',
//     //   initials: 'RJ',
//     //   type: 'Support',
//     //   purpose: 'Technical support needed for account setup and configuration',
//     //   timeAgo: '5 min ago',
//     // },
//     // {
//     //   id: '3',
//     //   name: 'Sarah Davis',
//     //   phone: '+1 (555) 456-7890',
//     //   initials: 'SD',
//     //   type: 'Follow-up',
//     //   purpose: 'Follow-up call regarding previous meeting and next steps',
//     //   timeAgo: '8 min ago',
//     // },
//   ]);

//   const [todayCalls] = useState(12);
//   const [activeTab, setActiveTab] = useState('dashboard');

//   // Debug logging function
//   const addDebugLog = (message, type = 'info') => {
//     const timestamp = new Date().toLocaleTimeString();
//     const logEntry = { timestamp, message, type };
//     // setDebugLogs(prev => [...prev.slice(-9), logEntry]); // Keep last 10 logs
//     console.log(`[${timestamp}] ${message}`);
//   };

//   const connectToPusher = async () => {
//     try {
//       addDebugLog('🔄 Starting Pusher connection...', 'info');
      
//       const token = await AsyncStorage.getItem('userToken');
//       const userId = user?.id;

//       if (!token || !userId) {
//         addDebugLog('❌ Missing token or user ID', 'error');
//         setConnectionStatus('error');
//         return;
//       }

//       addDebugLog(`👤 User ID: ${userId}`, 'info');

//       // Disconnect existing connection if any
//       if (pusherRef.current) {
//         pusherRef.current.disconnect();
//       }

//       const pusher = new Pusher('b71a5e925d7e4b40fad3', {
//         cluster: 'ap2',
//         // Authentication is REQUIRED for private channels
//         authEndpoint: 'https://backend.skyleadcrm.io/broadcasting/auth',
//         auth: {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         },
//         enabledTransports: ['ws', 'wss'],
//         disabledTransports: ['xhr_polling', 'xhr_streaming'],
//       });

//       pusherRef.current = pusher;

//       // Connection event handlers
//       pusher.connection.bind('connected', () => {
//         addDebugLog('✅ Pusher connected successfully', 'success');
//         setConnectionStatus('connected');
//       });

//       pusher.connection.bind('connecting', () => {
//         addDebugLog('🔄 Pusher connecting...', 'info');
//         setConnectionStatus('connecting');
//       });

//       pusher.connection.bind('disconnected', () => {
//         addDebugLog('🔌 Pusher disconnected', 'warning');
//         setConnectionStatus('disconnected');
//       });

//       pusher.connection.bind('error', (err) => {
//         addDebugLog(`❌ Pusher connection error: ${JSON.stringify(err)}`, 'error');
//         setConnectionStatus('error');
//       });

//       pusher.connection.bind('state_change', (states) => {
//         addDebugLog(`🔄 State change: ${states.previous} → ${states.current}`, 'info');
//       });

//       // Subscribe to PRIVATE channel (auth required) - ADD 'private-' prefix
//       const channelName = `private-trigercall.${userId}`;
//       addDebugLog(`📡 Subscribing to PRIVATE channel: ${channelName}`, 'info');
      
//       const channel = pusher.subscribe(channelName);

//       channel.bind('pusher:subscription_succeeded', () => {
//         addDebugLog(`✅ Successfully subscribed to PRIVATE channel: ${channelName}`, 'success');
//         setSubscriptionStatus('subscribed');
//       });

//       // Handle subscription errors for private channels
//       channel.bind('pusher:subscription_error', (error) => {
//         addDebugLog(`❌ Subscription error: ${JSON.stringify(error)}`, 'error');
//         setSubscriptionStatus('error');
//       });

//       // Bind to your custom event - use the FULL class name as shown in backend
//       channel.bind('App\\Events\\CallNotification', (data) => {
//         addDebugLog(`📞 Received call notification: ${JSON.stringify(data)}`, 'success');
//         // const transformedData = transformCallHistoryData(data?.data);
//         setCallRequests(prev => [
//           {
//             id: data.data.lead_id,
//             name: data.data.lead.client_name || data.data.lead.lead_name || "-",
//             phone: data.data.phone,
//             initials: data.data.initials || data?.data?.name?.split(' ')?.map(n => n[0]).join(''),
//             type: data.data.type || 'Unknown',
//             purpose: data.data.purpose || 'No purpose provided',
//             timeAgo: data.data.lead.last_assign_date || 'Just now',
//           },
//           ...prev
//         ]);
//         setLastMessage(data);

//         // Access the data property which contains your actual message
//         const messageText = data?.data?.message || data?.message || 'You have a new call';

//         // Show alert popup
//         // Alert.alert(
//         //   '📞 Incoming Call', 
//         //   messageText,
//         //   [
//         //     {
//         //       text: 'OK',
//         //       onPress: () => addDebugLog('✅ User acknowledged call notification', 'info')
//         //     }
//         //   ]
//         // );
//       });

     
//       return pusher;
//     } catch (error) {
//       addDebugLog(`💥 Error in connectToPusher: ${error.message}`, 'error');
//       setConnectionStatus('error');
//     }
//   };

//   useEffect(() => {
//     connectToPusher();

//     // Cleanup on unmount
//     return () => {
//       if (pusherRef.current) {
//         addDebugLog('🧹 Cleaning up Pusher connection...', 'info');
//         pusherRef.current.disconnect();
//       }
//     };
//   }, [user?.id]); // Reconnect if user ID changes

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
//     const initials = name?.split(' ')?.map(n => n[0]).join('');
    
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

//   // useEffect(() => {
//   //   const interval = setInterval(addNewCallRequest, 30000);
//   //   return () => clearInterval(interval);
//   // }, []);

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
//           > 
//             <Text style={styles.callerInitials}>{request.initials}</Text>
//           </LinearGradient> */}
//            <TextAvatar
//               backgroundColor={"#4ade80"} // optional
//               textColor={"#fff"}
//               size={36}
//               type={"circle"} // optional
//             >
//               {request?.name|| "User Name"}
//             </TextAvatar>

            
          
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
//           {/* <View style={styles.callTypeContainer}>
//             <Text style={styles.callType}>{request.type}</Text>
//           </View> */}
//           {/* <Text style={styles.callPurpose}>{request.purpose}</Text> */}
//         </View>

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.btn, styles.btnAccept]}
//             onPress={() => handleCallAction(request.id, 'accept')}
//           >
//             <FontAwesome5 name="phone-alt" size={14} color="#fff" /> 
//             <Text style={styles.btnAcceptText}>
              
//               Accept & Call
//               </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.btn, styles.btnReject]}
//             onPress={() => handleCallAction(request.id, 'reject')}
//           >
//             <FontAwesome5 name="phone-slash" size={14} color="white" /> 
//             <Text style={styles.btnRejectText}>
//                Decline
//               </Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
     
//         <FontAwesome5 name="phone-alt" size={28} color="white" /> 
//       <Text style={styles.emptyTitle}>No Pending Calls</Text>
//       <Text style={styles.emptySubtitle}>All caught up! New call requests will appear here.</Text>
//     </View>
//   );

//   const renderCallRequest = ({ item }: { item: CallRequest }) => (
//     <CallRequestCard request={item} />
//   );

//   const renderListHeader = () => (
//     <View>
//       <Text style={styles.pageTitle}>Call Dashboard</Text>
//       <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

//       {/* Stats */}
//       <View style={styles.statsGrid}>
//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{callRequests.length}</Text>
//           <Text style={styles.statLabel}>Pending Calls</Text>
//         </View>
        
//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{todayCalls}</Text>
//           <Text style={styles.statLabel}>Today's Calls</Text>
//         </View>
//       </View>

//       <Text style={styles.sectionTitle}>Incoming Requests</Text>
//     </View>
//   );

//   const renderListEmpty = () => <EmptyState />;

//   return (
//     <ThemedView style={styles.container}>
//       <Header />

//       <FlatList
//         data={callRequests}
//         renderItem={renderCallRequest}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContainer}
//         ListHeaderComponent={renderListHeader}
//         ListEmptyComponent={renderListEmpty}
//         ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
//         // Optional: Add performance optimizations
//         removeClippedSubviews={true}
//         maxToRenderPerBatch={10}
//         windowSize={10}
//         initialNumToRender={10}
//         getItemLayout={(data, index) => (
//           {length: 200, offset: 200 * index, index} // Approximate item height
//         )}
//       />
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   flatListContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   itemSeparator: {
//     height: 0, // No separator needed as cards have their own margin
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
//     flexDirection:'row',
//     justifyContent:'center'
//   },
//   btnAccept: {
//     backgroundColor: '#4ade80',

//   },
//   btnAcceptText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   btnReject: {
//     backgroundColor: 'red',
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//   btnRejectText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//     marginLeft: 8,
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
//     marginTop: 10,
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






















// *** WITHOUT /accept-call-notification api

// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
//   Linking,
//   Alert,
//   FlatList,
// } from 'react-native';
// import { BlurView } from 'expo-blur';
// import { ThemedView } from '@/components/ThemedView';
// import Header from '@/components/header';
// import { FontAwesome5 } from '@expo/vector-icons';
// import Pusher from 'pusher-js/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useAuth } from "@/context/AuthContext";
// import TextAvatar from "react-native-text-avatar";
// import { usePost } from "@/hooks/useApi";

// const { width } = Dimensions.get('window');

// interface CallRequest {
//   id: string;
//   name: string;
//   phone: string;
//   initials: string;
//   type: string;
//   purpose: string;
//   timeAgo: string;
//   status: 'pending' | 'accepted' | 'rejected';
//   timestamp: number;
// }

// interface CallStats {
//   pendingCalls: number;
//   totalCalls: number;
//   acceptedCalls: number;
//   rejectedCalls: number;
// }

// const CallDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const [connectionStatus, setConnectionStatus] = useState('disconnected');
//   const [subscriptionStatus, setSubscriptionStatus] = useState('not_subscribed');
//   const pusherRef = useRef<any>(null);
  
//   // Main state for all call requests
//   const [allCallRequests, setAllCallRequests] = useState<CallRequest[]>([]);
  
//   // Computed stats from the main state
//   const callStats: CallStats = React.useMemo(() => {
//     const pending = allCallRequests.filter(call => call.status === 'pending').length;
//     const accepted = allCallRequests.filter(call => call.status === 'accepted').length;
//     const rejected = allCallRequests.filter(call => call.status === 'rejected').length;
//     const total = accepted + rejected;
    
//     return {
//       pendingCalls: pending,
//       totalCalls: total,
//       acceptedCalls: accepted,
//       rejectedCalls: rejected,
//     };
//   }, [allCallRequests]);

//   // Only show pending calls in the list
//   const pendingCalls = allCallRequests.filter(call => call.status === 'pending');

//   // Load persisted data on component mount
//   useEffect(() => {
//     loadPersistedData();
//   }, []);

//   // Save data whenever it changes
//   useEffect(() => {
//     saveDataToPersistence();
//   }, [allCallRequests]);

//   const loadPersistedData = async () => {
//     try {
//       const storedCalls = await AsyncStorage.getItem(`callRequests_${user?.id}`);
//       if (storedCalls) {
//         const parsedCalls = JSON.parse(storedCalls);
//         setAllCallRequests(parsedCalls);
//         addDebugLog(`📱 Loaded ${parsedCalls.length} persisted calls`, 'info');
//       }
//     } catch (error) {
//       addDebugLog(`❌ Error loading persisted data: ${error.message}`, 'error');
//     }
//   };

//   const saveDataToPersistence = async () => {
//     try {
//       if (user?.id && allCallRequests.length >= 0) {
//         await AsyncStorage.setItem(
//           `callRequests_${user.id}`, 
//           JSON.stringify(allCallRequests)
//         );
//       }
//     } catch (error) {
//       addDebugLog(`❌ Error saving data: ${error.message}`, 'error');
//     }
//   };

//   // Debug logging function
//   const addDebugLog = (message: string, type = 'info') => {
//     const timestamp = new Date().toLocaleTimeString();
//     console.log(`[${timestamp}] ${message}`);
//   };

//   const connectToPusher = async () => {
//     try {
//       addDebugLog('🔄 Starting Pusher connection...', 'info');
      
//       const token = await AsyncStorage.getItem('userToken');
//       const userId = user?.id;

//       if (!token || !userId) {
//         addDebugLog('❌ Missing token or user ID', 'error');
//         setConnectionStatus('error');
//         return;
//       }

//       addDebugLog(`👤 User ID: ${userId}`, 'info');

//       // Disconnect existing connection if any
//       if (pusherRef.current) {
//         pusherRef.current.disconnect();
//       }

//       const pusher = new Pusher('b71a5e925d7e4b40fad3', {
//         cluster: 'ap2',
//         authEndpoint: 'https://backend.skyleadcrm.io/broadcasting/auth',
//         auth: {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         },
//         enabledTransports: ['ws', 'wss'],
//         disabledTransports: ['xhr_polling', 'xhr_streaming'],
//       });

//       pusherRef.current = pusher;

//       // Connection event handlers
//       pusher.connection.bind('connected', () => {
//         addDebugLog('✅ Pusher connected successfully', 'success');
//         setConnectionStatus('connected');
//       });

//       pusher.connection.bind('connecting', () => {
//         addDebugLog('🔄 Pusher connecting...', 'info');
//         setConnectionStatus('connecting');
//       });

//       pusher.connection.bind('disconnected', () => {
//         addDebugLog('🔌 Pusher disconnected', 'warning');
//         setConnectionStatus('disconnected');
//       });

//       pusher.connection.bind('error', (err: any) => {
//         addDebugLog(`❌ Pusher connection error: ${JSON.stringify(err)}`, 'error');
//         setConnectionStatus('error');
//       });

//       pusher.connection.bind('state_change', (states: any) => {
//         addDebugLog(`🔄 State change: ${states.previous} → ${states.current}`, 'info');
//       });

//       // Subscribe to PRIVATE channel
//       const channelName = `private-trigercall.${userId}`;
//       addDebugLog(`📡 Subscribing to PRIVATE channel: ${channelName}`, 'info');
      
//       const channel = pusher.subscribe(channelName);

//       channel.bind('pusher:subscription_succeeded', () => {
//         addDebugLog(`✅ Successfully subscribed to PRIVATE channel: ${channelName}`, 'success');
//         setSubscriptionStatus('subscribed');
//       });

//       channel.bind('pusher:subscription_error', (error: any) => {
//         addDebugLog(`❌ Subscription error: ${JSON.stringify(error)}`, 'error');
//         setSubscriptionStatus('error');
//       });

//       // Bind to custom event
//       channel.bind('App\\Events\\CallNotification', (data: any) => {
//         addDebugLog(`📞 Received call notification: ${JSON.stringify(data)}`, 'success');
        
//         const newCallRequest: CallRequest = {
//           id: data.data.lead_id || Date.now().toString(),
//           name: data.data.lead?.client_name || data.data.lead?.lead_name || data.data.name || "Unknown Caller",
//           phone: data.data.phone || "No phone number",
//           initials: data.data.initials || data.data.name?.split(' ')?.map((n: string) => n[0]).join('') || "??",
//           type: data.data.type || 'Unknown',
//           purpose: data.data.purpose || 'No purpose provided',
//           timeAgo: data.data.lead?.last_assign_date || 'Just now',
//           status: 'pending',
//           timestamp: Date.now(),
//         };

//         setAllCallRequests(prev => {
//           // Check if call already exists to avoid duplicates
//           // const exists = prev.some(call => call.id === newCallRequest.id);
//           // if (exists) {
//           //   addDebugLog(`⚠️ Call ${newCallRequest.id} already exists, skipping`, 'warning');
//           //   return prev;
//           // }
//           return [newCallRequest, ...prev];
//         });
//       });

//       return pusher;
//     } catch (error: any) {
//       addDebugLog(`💥 Error in connectToPusher: ${error.message}`, 'error');
//       setConnectionStatus('error');
//     }
//   };

//   useEffect(() => {
//     connectToPusher();

//     // Cleanup on unmount
//     return () => {
//       if (pusherRef.current) {
//         addDebugLog('🧹 Cleaning up Pusher connection...', 'info');
//         pusherRef.current.disconnect();
//       }
//     };
//   }, [user?.id]);

//   // Function to handle phone dialing
//   const handlePhoneCall = async (phoneNumber: string) => {
//     try {
//       const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, '');
//       const phoneUrl = `tel:${cleanPhoneNumber}`;
      
//       const supported = await Linking.canOpenURL(phoneUrl);
      
//       if (supported) {
//         await Linking.openURL(phoneUrl);
//         return true;
//       } else {
//         Alert.alert(
//           'Phone Not Available',
//           'Phone dialing is not available on this device',
//           [{ text: 'OK' }]
//         );
//         return false;
//       }
//     } catch (error) {
//       console.error('Error opening phone dialer:', error);
//       Alert.alert(
//         'Error',
//         'Failed to open phone dialer. Please try again.',
//         [{ text: 'OK' }]
//       );
//       return false;
//     }
//   };

//   const handleCallAction = async (id: string, action: 'accepted' | 'rejected') => {
//     addDebugLog(`🎬 Handling call action: ${action} for call ${id}`, 'info');
    
//     if (action === 'accepted') {
//       const callRequest = allCallRequests.find(call => call.id === id);
      
//       if (callRequest) {
//         const dialSuccess = await handlePhoneCall(callRequest.phone);
//         if (!dialSuccess) {
//           // If dialing failed, don't mark as accepted
//           return;
//         }
//       }
//     }

//     // Update the call status instead of removing it
//     setAllCallRequests(prev =>
//       prev.map(call =>
//         call.id === id
//           ? { ...call, status: action, timeAgo: 'Just now' }
//           : call
//       )
//     );

//     addDebugLog(`✅ Call ${id} marked as ${action}`, 'success');
//   };

//   // Function to clear old processed calls (optional utility)
//   const clearProcessedCalls = () => {
//     Alert.alert(
//       'Clear History',
//       'Are you sure you want to clear all accepted and rejected calls?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Clear',
//           style: 'destructive',
//           onPress: () => {
//             setAllCallRequests(prev => prev.filter(call => call.status === 'pending'));
//             addDebugLog('🧹 Cleared processed calls', 'info');
//           }
//         }
//       ]
//     );
//   };

//   const CallRequestCard: React.FC<{ request: CallRequest }> = ({ request }) => {
//     const slideAnim = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//       Animated.timing(slideAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }, []);

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
//           <TextAvatar
//             backgroundColor="#4ade80"
//             textColor="#fff"
//             size={50}
//             type="circle"
//           >
//             {request.name || "User Name"}
//           </TextAvatar>
          
//           <View style={styles.callerInfo}>
//             <Text style={styles.callerName}>{request.name}</Text>
//             <Text style={styles.callerDetails}>{request.phone}</Text>
//           </View>
          
//           <View style={styles.callTimeContainer}>
//             <Text style={styles.callTime}>{request.timeAgo}</Text>
//           </View>
//         </View>

//         {request.purpose && request.purpose !== 'No purpose provided' && (
//           <View style={styles.callInfo}>
//             <Text style={styles.callPurpose}>{request.purpose}</Text>
//           </View>
//         )}

//         <View style={styles.callActions}>
//           <TouchableOpacity
//             style={[styles.btn, styles.btnAccept]}
//             onPress={() => handleCallAction(request.id, 'accepted')}
//           >
//             <FontAwesome5 name="phone-alt" size={14} color="#fff" />
//             <Text style={styles.btnAcceptText}>Accept & Call</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.btn, styles.btnReject]}
//             onPress={() => handleCallAction(request.id, 'rejected')}
//           >
//             <FontAwesome5 name="phone-slash" size={14} color="white" />
//             <Text style={styles.btnRejectText}>Decline</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     );
//   };

//   const EmptyState: React.FC = () => (
//     <View style={styles.emptyState}>
//       <FontAwesome5 name="phone-alt" size={28} color="white" />
//       <Text style={styles.emptyTitle}>No Pending Calls</Text>
//       <Text style={styles.emptySubtitle}>All caught up! New call requests will appear here.</Text>
//     </View>
//   );

//   const renderCallRequest = ({ item }: { item: CallRequest }) => (
//     <CallRequestCard request={item} />
//   );

//   const renderListHeader = () => (
//     <View>
//       <Text style={styles.pageTitle}>Call Dashboard</Text>
//       <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

//       {/* Stats - Keep original design */}
//       <View style={styles.statsGrid}>
//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{callStats.pendingCalls}</Text>
//           <Text style={styles.statLabel}>Pending Calls</Text>
//         </View>
        
//         <View style={styles.statCard}>
//           <Text style={styles.statNumber}>{callStats.totalCalls}</Text>
//           <Text style={styles.statLabel}>Today's Calls</Text>
//         </View>
//       </View>

//       {/* Connection Status Indicator */}

//       <View style={styles.statusContainer}>
//         <View style={[
//           styles.statusIndicator, 
          
//           { backgroundColor: connectionStatus === 'connected' ? '#4ade80' : '#ef4444' }
//         ]} />
//         <Text style={styles.statusText}>
//           {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
//         </Text>
        
//         {/* {callStats.totalCalls > 0 && (
//           <TouchableOpacity onPress={clearProcessedCalls} style={styles.clearButton}>
//             <Text style={styles.clearButtonText}>Clear History</Text>
//           </TouchableOpacity>
//         )} */}
//       </View>

//       <Text style={styles.sectionTitle}>Incoming Requests</Text>
//     </View>
//   );

//   return (
//     <ThemedView style={styles.container}>
//       <Header />

//       <FlatList
//         data={pendingCalls}
//         renderItem={renderCallRequest}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.flatListContainer}
//         ListHeaderComponent={renderListHeader}
//         ListEmptyComponent={<EmptyState />}
//         ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
//         removeClippedSubviews={true}
//         maxToRenderPerBatch={10}
//         windowSize={10}
//         initialNumToRender={10}
//       />
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   flatListContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   itemSeparator: {
//     height: 0,
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
//     marginBottom: 20,
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
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     gap: 8,
//   },
//   statusIndicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },
//   statusText: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//     flex: 1,
//   },
//   clearButton: {
//     backgroundColor: 'rgba(239, 68, 68, 0.2)',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: 'rgba(239, 68, 68, 0.3)',
//   },
//   clearButtonText: {
//     color: '#ef4444',
//     fontSize: 12,
//     fontWeight: '500',
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
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   btnAccept: {
//     backgroundColor: '#4ade80',
//   },
//   btnAcceptText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   btnReject: {
//     backgroundColor: '#ef4444',
//     borderWidth: 1,
//     borderColor: '#ef4444',
//   },
//   btnRejectText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   emptyState: {
//     alignItems: 'center',
//     padding: 40,
//   },
//   emptyTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     marginTop: 10,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   emptySubtitle: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.6)',
//     textAlign: 'center',
//     lineHeight: 20,
//   },
// });

// export default CallDashboard;





import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Linking,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header';
import { FontAwesome5 } from '@expo/vector-icons';
import Pusher from 'pusher-js/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "@/context/AuthContext";
import TextAvatar from "react-native-text-avatar";
import { usePost } from "@/hooks/useApi";
import SuccessModal from '@/components/ui/SuccessModal';

const { width } = Dimensions.get('window');

interface CallRequest {
  id: string;
  name: string;
  phone: string;
  initials: string;
  type: string;
  purpose: string;
  timeAgo: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: number;
  leadId?: string; // Store original lead_id for API calls
}

interface CallStats {
  pendingCalls: number;
  totalCalls: number;
  acceptedCalls: number;
  rejectedCalls: number;
}

const CallDashboard: React.FC = () => {
  const { user } = useAuth();
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [subscriptionStatus, setSubscriptionStatus] = useState('not_subscribed');
  const pusherRef = useRef<any>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
const [successModalData, setSuccessModalData] = useState<{
  type: 'accepted' | 'declined';
  callerName: string;
  message?: string;
}>({
  type: 'accepted',
  callerName: '',
});
  
  // API hook for call notifications
  const { post, loading: apiLoading, error: apiError } = usePost();
  
  // Track which call is being processed
  const [processingCallId, setProcessingCallId] = useState<string | null>(null);
  
  // Main state for all call requests
  const [allCallRequests, setAllCallRequests] = useState<CallRequest[]>([]);
  
  // Computed stats from the main state
  const callStats: CallStats = React.useMemo(() => {
    const pending = allCallRequests.filter(call => call.status === 'pending').length;
    const accepted = allCallRequests.filter(call => call.status === 'accepted').length;
    const rejected = allCallRequests.filter(call => call.status === 'rejected').length;
    const total = accepted + rejected;
    
    return {
      pendingCalls: pending,
      totalCalls: total,
      acceptedCalls: accepted,
      rejectedCalls: rejected,
    };
  }, [allCallRequests]);

  // Only show pending calls in the list
  const pendingCalls = allCallRequests.filter(call => call.status === 'pending');
  console.log('Pending Calls:', pendingCalls);

  // Load persisted data on component mount
  useEffect(() => {
    loadPersistedData();
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    saveDataToPersistence();
  }, [allCallRequests]);

  const loadPersistedData = async () => {
    try {
      const storedCalls = await AsyncStorage.getItem(`callRequests_${user?.id}`);
      if (storedCalls) {
        const parsedCalls = JSON.parse(storedCalls);
        setAllCallRequests(parsedCalls);
        addDebugLog(`📱 Loaded ${parsedCalls.length} persisted calls`, 'info');
      }
    } catch (error) {
      addDebugLog(`❌ Error loading persisted data: ${error.message}`, 'error');
    }
  };

  const saveDataToPersistence = async () => {
    try {
      if (user?.id && allCallRequests.length >= 0) {
        await AsyncStorage.setItem(
          `callRequests_${user.id}`, 
          JSON.stringify(allCallRequests)
        );
      }
    } catch (error) {
      addDebugLog(`❌ Error saving data: ${error.message}`, 'error');
    }
  };

  // Debug logging function
  const addDebugLog = (message: string, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
  };

  // API call function for accepting/declining calls
  const sendCallNotificationStatus = async (leadId: string, status: number) => {
    try {
      const payload = {
        lead_id: parseInt(leadId), // Ensure it's a number
        status: status // 1 for accept, 0 for decline
      };
      
      addDebugLog(`🚀 Sending API call: ${JSON.stringify(payload)}`, 'info');
      
      const response = await post('/accept-call-notification', payload);
      
      addDebugLog(`✅ API response: ${JSON.stringify(response)}`, 'success');
      return response;
      
    } catch (error) {
      addDebugLog(`❌ API error: ${error.message}`, 'error');
      throw error;
    }
  };

  const connectToPusher = async () => {
    try {
      addDebugLog('🔄 Starting Pusher connection...', 'info');
      
      const token = await AsyncStorage.getItem('userToken');
      const userId = user?.id;

      if (!token || !userId) {
        addDebugLog('❌ Missing token or user ID', 'error');
        setConnectionStatus('error');
        return;
      }

      addDebugLog(`👤 User ID: ${userId}`, 'info');

      // Disconnect existing connection if any
      if (pusherRef.current) {
        pusherRef.current.disconnect();
      }

      const pusher = new Pusher('b71a5e925d7e4b40fad3', {
        cluster: 'ap2',
        authEndpoint: 'https://backend.skyleadcrm.io/broadcasting/auth',
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
        enabledTransports: ['ws', 'wss'],
        disabledTransports: ['xhr_polling', 'xhr_streaming'],
      });

      pusherRef.current = pusher;

      // Connection event handlers
      pusher.connection.bind('connected', () => {
        addDebugLog('✅ Pusher connected successfully', 'success');
        setConnectionStatus('connected');
      });

      pusher.connection.bind('connecting', () => {
        addDebugLog('🔄 Pusher connecting...', 'info');
        setConnectionStatus('connecting');
      });

      pusher.connection.bind('disconnected', () => {
        addDebugLog('🔌 Pusher disconnected', 'warning');
        setConnectionStatus('disconnected');
      });

      pusher.connection.bind('error', (err: any) => {
        addDebugLog(`❌ Pusher connection error: ${JSON.stringify(err)}`, 'error');
        setConnectionStatus('error');
      });

      pusher.connection.bind('state_change', (states: any) => {
        addDebugLog(`🔄 State change: ${states.previous} → ${states.current}`, 'info');
      });

      // Subscribe to PRIVATE channel
      const channelName = `private-trigercall.${userId}`;
      addDebugLog(`📡 Subscribing to PRIVATE channel: ${channelName}`, 'info');
      
      const channel = pusher.subscribe(channelName);

      channel.bind('pusher:subscription_succeeded', () => {
        addDebugLog(`✅ Successfully subscribed to PRIVATE channel: ${channelName}`, 'success');
        setSubscriptionStatus('subscribed');
      });

      channel.bind('pusher:subscription_error', (error: any) => {
        addDebugLog(`❌ Subscription error: ${JSON.stringify(error)}`, 'error');
        setSubscriptionStatus('error');
      });

      // Bind to custom event with duplicate prevention
      channel.bind('App\\Events\\CallNotification', (data: any) => {
        addDebugLog(`📞 Received call notification: ${JSON.stringify(data)}`, 'success');
        
        // Validate required data before creating call request
        const leadData = data.data;
        const leadId = leadData.lead_id;
        const name = leadData.lead?.client_name || leadData.lead?.lead_name || leadData.name;
        const phone = leadData.phone;

        // Skip if essential data is missing
        if (!leadId || !name || !phone) {
          addDebugLog(`❌ Skipping call notification due to missing essential data:
            leadId: ${leadId}
            name: ${name}
            phone: ${phone}`, 'error');
          return;
        }

        // Additional validation - skip if values are placeholder/default values
        if (name === 'Unknown Caller' || phone === 'No phone number' || 
            name.trim() === '' || phone.trim() === '') {
          addDebugLog(`❌ Skipping call notification due to invalid data values:
            name: "${name}"
            phone: "${phone}"`, 'error');
          return;
        }
        
        const uniqueId = `${leadId}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        
        const newCallRequest: CallRequest = {
          id: uniqueId,
          name: name,
          phone: phone,
          initials: leadData.initials || name.split(' ').map((n: string) => n[0]).join('').substring(0, 2),
          type: leadData.type || 'Call',
          purpose: leadData.purpose || 'No purpose provided',
          timeAgo: leadData.lead?.last_assign_date || 'Just now',
          status: 'pending',
          timestamp: Date.now(),
          leadId: leadId.toString(), // Store original lead_id
        };

        setAllCallRequests(prev => {
          // Check if this lead_id already exists as pending
          const existingCallIndex = prev.findIndex(
            call => call.leadId === leadId.toString() && call.status === 'pending'
          );
          
          if (existingCallIndex !== -1) {
            // Update existing call instead of creating duplicate
            const updatedCalls = [...prev];
            updatedCalls[existingCallIndex] = {
              ...updatedCalls[existingCallIndex],
              ...newCallRequest,
              id: updatedCalls[existingCallIndex].id, // Keep original unique ID
              timestamp: Date.now(), // Update timestamp
            };
            addDebugLog(`♻️ Updated existing pending call for lead ${leadId}`, 'info');
            return updatedCalls;
          } else {
            // Add new call
            addDebugLog(`➕ Added new call request with ID ${uniqueId} for ${name} (${phone})`, 'info');
            return [newCallRequest, ...prev];
          }
        });
      });

      return pusher;
    } catch (error: any) {
      addDebugLog(`💥 Error in connectToPusher: ${error.message}`, 'error');
      setConnectionStatus('error');
    }
  };

  useEffect(() => {
    connectToPusher();

    // Cleanup on unmount
    return () => {
      if (pusherRef.current) {
        addDebugLog('🧹 Cleaning up Pusher connection...', 'info');
        pusherRef.current.disconnect();
      }
    };
  }, [user?.id]);

  // Function to handle phone dialing
  const handlePhoneCall = async (phoneNumber: string) => {
    try {
      const cleanPhoneNumber = phoneNumber.replace(/[\s\(\)\-]/g, '');
      const phoneUrl = `tel:${cleanPhoneNumber}`;
      
      const supported = await Linking.canOpenURL(phoneUrl);
      
      if (supported) {
        await Linking.openURL(phoneUrl);
        return true;
      } else {
        Alert.alert(
          'Phone Not Available',
          'Phone dialing is not available on this device',
          [{ text: 'OK' }]
        );
        return false;
      }
    } catch (error) {
      console.error('Error opening phone dialer:', error);
      Alert.alert(
        'Error',
        'Failed to open phone dialer. Please try again.',
        [{ text: 'OK' }]
      );
      return false;
    }
  };

  const handleCallAction = async (id: string, action: 'accepted' | 'rejected') => {
    addDebugLog(`🎬 Handling call action: ${action} for call ${id}`, 'info');
    
    // Set processing state
    setProcessingCallId(id);
    
    try {
      // Find the call request to get the original lead_id
      const callRequest = allCallRequests.find(call => call.id === id);
      
      if (!callRequest) {
        addDebugLog(`❌ Call request with ID ${id} not found`, 'error');
        Alert.alert('Error', 'Call request not found. Please try again.');
        return;
      }
      
      const leadId = callRequest.leadId || id.split('_')[0];
      
      // Prepare API status: 1 for accept, 0 for decline
      const apiStatus = action === 'accepted' ? 1 : 0;
      
      // Call the API with the original lead_id
      await sendCallNotificationStatus(leadId, apiStatus);
      
      // Show success modal instead of Alert
      setSuccessModalData({
        type: action === 'accepted' ? 'accepted' : 'declined',
        callerName: callRequest.name,
        message: action === 'accepted'
          ? 'Call has been connected successfully!'
          : 'Call has been declined and removed from queue.',
      });
      setShowSuccessModal(true);
      
      // If action is accept, handle phone call with delay
      if (action === 'accepted') {
        addDebugLog(`⏳ Adding 2 second delay before opening phone call...`, 'info');
        
        // Add delay before opening phone call (2000ms = 2 seconds)
        setTimeout(async () => {
          const dialSuccess = await handlePhoneCall(callRequest.phone);
          if (!dialSuccess) {
            addDebugLog(`⚠️ Phone dialing failed for ${id}, but API call succeeded`, 'warning');
          }
        }, 2000); // 2 second delay - adjust this value as needed
      }
      
      // Update the call status and remove it from the list
      setAllCallRequests(prev => {
        const updatedCalls = prev.map(call => {
          if (call.id === id) {
            return { ...call, status: action, timeAgo: 'Just now' };
          }
          return call;
        });
        
        // Filter out the processed call completely
        return updatedCalls.filter(call => call.id !== id);
      });
      
      addDebugLog(`✅ Call ${id} processed as ${action} and removed from list`, 'success');
      
    } catch (error) {
      addDebugLog(`❌ Failed to process call ${id}: ${error.message}`, 'error');
      
      // Show error alert (keep this as Alert for errors)
      Alert.alert(
        'Error',
        `Failed to ${action === 'accepted' ? 'accept' : 'decline'} the call. Please try again.`,
        [{ text: 'OK' }]
      );
    } finally {
      // Clear processing state
      setProcessingCallId(null);
    }
  };
  
  // Add this function to handle modal close
  const handleModalClose = () => {
    setShowSuccessModal(false);
  };

  // const handleCallAction = async (id: string, action: 'accepted' | 'rejected') => {
  //   addDebugLog(`🎬 Handling call action: ${action} for call ${id}`, 'info');
    
  //   // Set processing state
  //   setProcessingCallId(id);
    
  //   try {
  //     // Find the call request to get the original lead_id
  //     const callRequest = allCallRequests.find(call => call.id === id);
      
  //     if (!callRequest) {
  //       addDebugLog(`❌ Call request with ID ${id} not found`, 'error');
  //       Alert.alert('Error', 'Call request not found. Please try again.');
  //       return;
  //     }

  //     const leadId = callRequest.leadId || id.split('_')[0]; // Fallback to extracting from ID
      
  //     // Prepare API status: 1 for accept, 0 for decline
  //     const apiStatus = action === 'accepted' ? 1 : 0;
      
  //     // Call the API with the original lead_id
  //     await sendCallNotificationStatus(leadId, apiStatus);
      
  //     // If action is accept, handle phone call
  //     if (action === 'accepted') {
  //       const dialSuccess = await handlePhoneCall(callRequest.phone);
  //       if (!dialSuccess) {
  //         // If dialing failed, still mark as accepted since API call succeeded
  //         addDebugLog(`⚠️ Phone dialing failed for ${id}, but API call succeeded`, 'warning');
  //       }
  //     }

  //     // FIXED: Update the call status and immediately remove it from the list
  //     setAllCallRequests(prev => {
  //       const updatedCalls = prev.map(call => {
  //         if (call.id === id) {
  //           return { ...call, status: action, timeAgo: 'Just now' };
  //         }
  //         return call;
  //       });
        
  //       // Filter out the processed call completely
  //       return updatedCalls.filter(call => call.id !== id);
  //     });

  //     addDebugLog(`✅ Call ${id} processed as ${action} and removed from list`, 'success');
      
  //     // Show success message
  //     Alert.alert(
  //       'Success',
  //       `Call ${action === 'accepted' ? 'accepted' : 'declined'} successfully!`,
  //       [{ text: 'OK' }]
  //     );
      
  //   } catch (error) {
  //     addDebugLog(`❌ Failed to process call ${id}: ${error.message}`, 'error');
      
  //     // Show error alert
  //     Alert.alert(
  //       'Error',
  //       `Failed to ${action === 'accepted' ? 'accept' : 'decline'} the call. Please try again.`,
  //       [{ text: 'OK' }]
  //     );
  //   } finally {
  //     // Clear processing state
  //     setProcessingCallId(null);
  //   }
  // };

  // Function to clear old processed calls (optional utility)
  const clearProcessedCalls = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all accepted and rejected calls?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            setAllCallRequests(prev => prev.filter(call => call.status === 'pending'));
            addDebugLog('🧹 Cleared processed calls', 'info');
          }
        }
      ]
    );
  };

  const CallRequestCard: React.FC<{ request: CallRequest }> = ({ request }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const isProcessing = processingCallId === request.id;

    useEffect(() => {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, []);

    // Strict validation to ensure we have valid data - return null for invalid requests
    if (!request || 
        !request.id || 
        !request.name || 
        !request.phone || 
        request.name.trim() === '' || 
        request.phone.trim() === '' ||
        request.name === 'Unknown Caller' ||
        request.phone === 'No phone number') {
      addDebugLog(`⚠️ Skipping render of invalid call request: ${JSON.stringify(request)}`, 'warning');
      return null;
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
          <TextAvatar
            backgroundColor="#4ade80"
            textColor="#fff"
            size={50}
            type="circle"
          >
            {request.name}
          </TextAvatar>
          
          <View style={styles.callerInfo}>
            <Text style={styles.callerName}>{request.name}</Text>
            <Text style={styles.callerDetails}>{request.phone}</Text>
          </View>
          
          <View style={styles.callTimeContainer}>
            <Text style={styles.callTime}>{request.timeAgo}</Text>
          </View>
        </View>

        {request.purpose && request.purpose !== 'No purpose provided' && (
          <View style={styles.callInfo}>
            <Text style={styles.callPurpose}>{request.purpose}</Text>
          </View>
        )}

        <View style={styles.callActions}>
          <TouchableOpacity
            style={[
              styles.btn, 
              styles.btnAccept,
              isProcessing && styles.btnDisabled
            ]}
            onPress={() => handleCallAction(request.id, 'accepted')}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <FontAwesome5 name="phone-alt" size={14} color="#fff" />
            )}
            <Text style={styles.btnAcceptText}>
              {isProcessing ? 'Processing...' : 'Accept & Call'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.btn, 
              styles.btnReject,
              isProcessing && styles.btnDisabled
            ]}
            onPress={() => handleCallAction(request.id, 'rejected')}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <FontAwesome5 name="phone-slash" size={14} color="white" />
            )}
            <Text style={styles.btnRejectText}>
              {isProcessing ? 'Processing...' : 'Decline'}
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

  const renderCallRequest = ({ item }: { item: CallRequest }) => {
    // Add extra validation here too
    if (!item || !item.id || !item.name || !item.phone) {
      addDebugLog(`⚠️ Skipping invalid item in renderCallRequest: ${JSON.stringify(item)}`, 'warning');
      return null;
    }
    return <CallRequestCard request={item} />;
  };

  const renderListHeader = () => (
    <View>
      <Text style={styles.pageTitle}>Call Dashboard</Text>
      <Text style={styles.pageSubtitle}>Manage incoming call requests</Text>

      {/* Stats - Keep original design */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{callStats.pendingCalls}</Text>
          <Text style={styles.statLabel}>Pending Calls</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{callStats.totalCalls}</Text>
          <Text style={styles.statLabel}>Today's Calls</Text>
        </View>
      </View>

       {/* Connection Status Indicator */}
       <View style={styles.statusContainer}>
        <View style={[
          styles.statusIndicator, 
          { backgroundColor: connectionStatus === 'connected' ? '#4ade80' : '#ef4444' }
        ]} />
        <Text style={styles.statusText}>
          {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
        </Text>
        
        {callStats.totalCalls > 0 && (
          <TouchableOpacity onPress={clearProcessedCalls} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Show API error if any */}
      {apiError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>API Error: {apiError.message}</Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Incoming Requests</Text>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <Header />

      <FlatList
        data={pendingCalls}
        renderItem={renderCallRequest}
        keyExtractor={(item, index) => item?.id || `fallback_${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={<EmptyState />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        extraData={allCallRequests} // Force re-render when data changes
      />

 {/* Add the Success Modal here */}
 <SuccessModal
      visible={showSuccessModal}
      onClose={handleModalClose}
      type={successModalData.type}
      callerName={successModalData.callerName}
      message={successModalData.message}
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
    height: 0,
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
    marginBottom: 20,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
  },
  errorContainer: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  clearButtonText: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '500',
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
  callerInfo: {
    flex: 1,
  },
  callerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  callerDetails: {
    fontSize: 14,
    color: '#6b7280',
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
    flexDirection: 'row',
    justifyContent: 'center',
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
    backgroundColor: '#ef4444',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  btnRejectText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  btnDisabled: {
    opacity: 0.7,
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
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
});

export default CallDashboard;