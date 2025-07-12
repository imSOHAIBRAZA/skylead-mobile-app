// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'expo-router';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login, isLoading } = useAuth();
//   const router = useRouter();

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     if (!isValidEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return;
//     }

//     try {
//       await login(email, password);
//       // Navigation will be handled by AuthWrapper
//     } catch (error) {
//       Alert.alert('Error', 'Login failed. Please try again.');
//     }
//   };

//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollViewContent}
//           keyboardShouldPersistTaps="handled"
//         >
//           <View style={styles.header}>
//             <Text style={styles.title}>Welcome Back</Text>
//             <Text style={styles.subtitle}>Sign in to your account</Text>
//           </View>

//           <View style={styles.form}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={styles.input}
//                 value={email}
//                 onChangeText={setEmail}
//                 placeholder="Enter your email"
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 editable={!isLoading}
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <TextInput
//                 style={styles.input}
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="Enter your password"
//                 secureTextEntry
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 editable={!isLoading}
//               />
//             </View>

//             <TouchableOpacity
//               style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
//               onPress={handleLogin}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <ActivityIndicator color="#fff" />
//               ) : (
//                 <Text style={styles.loginButtonText}>Sign In</Text>
//               )}
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.forgotPassword}>
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.footer}>
//             <Text style={styles.footerText}>
//               Don't have an account?{' '}
//               <Text style={styles.signUpText}>Sign Up</Text>
//             </Text>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   form: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   loginButton: {
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//     paddingVertical: 16,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonDisabled: {
//     backgroundColor: '#ccc',
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   forgotPassword: {
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   forgotPasswordText: {
//     color: '#007AFF',
//     fontSize: 14,
//   },
//   footer: {
//     alignItems: 'center',
//     marginTop: 32,
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   signUpText: {
//     color: '#007AFF',
//     fontWeight: '600',
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { FontAwesome6,FontAwesome5,Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      await login(email, password);
      // Navigation will be handled by AuthWrapper
    } catch (error) {
      Alert.alert("Error", "Login failed. Please try again.");
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo/Brand */}
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/mainlogo.png")}
              style={styles.reactLogo}
            />
          </View>

          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Welcome</Text>
            <Text style={styles.welcomeSubtitle}>We glad to see you</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="john@gmail.com"
                placeholderTextColor="#6B7280"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#6B7280"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.eyeIcon}>
                    {showPassword ? <FontAwesome6 name="eye-slash" color={"#fff"} size={20} />: <FontAwesome6 name="eye" color={"#fff"} size={20} />}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me */}
            {/* <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity> */}

            {/* Sign In Button */}
            <TouchableOpacity
              style={[
                styles.signInButton,
                isLoading && styles.signInButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.signInButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>

            {/* Forgot Password */}
            {/* <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity> */}
          </View>

          {/* Support */}
          <View style={styles.supportContainer}>
            <Text style={styles.supportText}>
              Do you need help? Contact technical support
            </Text>
            <TouchableOpacity style={styles.supportEmailContainer}>
              <Text style={styles.supportIcon}>📧</Text>
              <Text style={styles.supportEmail}>support@skylead.com</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E5A",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "#2ECC71",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  brandText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  welcomeContainer: {
    marginBottom: 48,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#A0B4B1",
  },
  form: {
    marginBottom: 60,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#A0B4B1",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#fff",
  },
  eyeButton: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  eyeIcon: {
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#A0B4B1",
    borderRadius: 4,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2ECC71",
    borderColor: "#2ECC71",
  },
  checkmark: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  rememberText: {
    fontSize: 14,
    color: "#A0B4B1",
  },
  signInButton: {
    backgroundColor: "#2ECC71",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  signInButtonDisabled: {
    backgroundColor: "#6B7280",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#2ECC71",
    fontSize: 14,
    fontWeight: "500",
  },
  supportContainer: {
    alignItems: "center",
  },
  supportText: {
    fontSize: 14,
    color: "#A0B4B1",
    textAlign: "center",
    marginBottom: 12,
  },
  supportEmailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  supportIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  supportEmail: {
    color: "#2ECC71",
    fontSize: 14,
    fontWeight: "500",
  },
  reactLogo: {
    height: 120,
    width: 150,
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
  },
});
