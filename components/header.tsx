{
  /* <View style={styles.header}>
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
</View> */
}

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import TextAvatar from "react-native-text-avatar";

export default function Header() {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: logout, style: "destructive" },
    ]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={require("@/assets/images/justlogo.png")}
            style={styles.reactLogo}
          />

          <Text style={styles.logoText}>Skylead</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user?.name || "User Name"}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <TextAvatar
              backgroundColor={"#4ade80"} // optional
              textColor={"#fff"}
              size={36}
              type={"circle"} // optional
            >
              {user?.name || "User Name"}
            </TextAvatar>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#4ade80",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  logoIconText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  logoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
  },
  userAvatar: {
    width: 36,
    height: 36,
    backgroundColor: "#4ade80",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  userInitials: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },

  reactLogo: {
    height: 30,
    width: 30,
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
  },
});
