

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
  Dimensions,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";
import TextAvatar from "react-native-text-avatar";
import { 
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign
} from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/header';

const { width } = Dimensions.get('window');

export default function UserProfileScreen() {
  const { logout, user } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: logout, style: "destructive" },
    ]);
  };

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "This feature will be available soon!");
  };

  const handleChangePassword = () => {
    Alert.alert("Change Password", "This feature will be available soon!");
  };

  const handleSupport = () => {
    Alert.alert("Support", "Contact support at support@skylead.com");
  };

  const getUserRoleColor = (role) => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return '#ef4444';
      case 'manager':
        return '#f59e0b';
      case 'supervisor':
        return '#8b5cf6';
      default:
        return '#4ade80';
    }
  };

  const getUserRoleIcon = (role) => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return 'shield-checkmark';
      case 'manager':
        return 'people';
      case 'supervisor':
        return 'eye';
      default:
        return 'person';
    }
  };

  const ProfileCard = ({ title, children }) => (
    <View style={styles.profileCard}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );

  const ProfileItem = ({ icon, title, value, onPress, showArrow = true }) => (
    // <TouchableOpacity style={styles.profileItem} onPress={onPress}>
    <View style={styles.profileItem}>
      <View style={styles.itemLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View style={styles.itemRight}>
        {value && <Text style={styles.itemValue}>{value}</Text>}
        {/* {showArrow && <Ionicons name="chevron-forward" size={16} color="#9ca3af" />} */}
      </View>
      </View>
    //  </TouchableOpacity> 
  );

  const SettingsItem = ({ icon, title, value, onToggle, showSwitch = false }) => (
    <View style={styles.profileItem}>
      <View style={styles.itemLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View style={styles.itemRight}>
        {showSwitch ? (
          <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: '#f3f4f6', true: '#4ade80' }}
            thumbColor={value ? '#fff' : '#f4f3f4'}
          />
        ) : (
          <Ionicons name="chevron-forward" size={16} color="#9ca3af" />
        )}
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <TextAvatar
                backgroundColor={getUserRoleColor(user?.role)}
                textColor={"#fff"}
                size={80}
                type={"circle"}
              >
                {user?.name || "User Name"}
              </TextAvatar>
              
              {user?.is_superadmin === 1 && (
                <View style={styles.superAdminBadge}>
                  <MaterialIcons name="verified" size={20} color="#fbbf24" />
                </View>
              )}
            </View>

            <Text style={styles.profileName}>{user?.name || "User Name"}</Text>
            <Text style={styles.profileEmail}>{user?.email || "user@example.com"}</Text>
            
            <View style={styles.roleContainer}>
              <View style={[styles.roleBadge, { backgroundColor: getUserRoleColor(user?.role) }]}>
                <Ionicons 
                  name={getUserRoleIcon(user?.role)} 
                  size={14} 
                  color="white" 
                />
                <Text style={styles.roleText}>
                  {user?.role || "Employee"} {user?.position && `• ${user.position}`}
                </Text>
              </View>
            </View>

            {/* <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
              <Feather name="edit-3" size={16} color="#4ade80" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity> */}
          </View>

          {/* Account Information */}
          <ProfileCard title="Account Information">
            <ProfileItem
              icon={<MaterialIcons name="person" size={20} color="#6b7280" />}
              title="Full Name"
              value={user?.name || "Not set"}
              onPress={handleEditProfile}
            />
            <ProfileItem
              icon={<MaterialIcons name="email" size={20} color="#6b7280" />}
              title="Email"
              value={user?.email || "Not set"}
              onPress={handleEditProfile}
            />
            <ProfileItem
              icon={<MaterialIcons name="business" size={20} color="#6b7280" />}
              title="Company ID"
              value={user?.company_id ? `#${user.company_id}` : "Not assigned"}
              onPress={() => {}}
              showArrow={false}
            />
            <ProfileItem
              icon={<MaterialIcons name="badge" size={20} color="#6b7280" />}
              title="Position"
              value={user?.position || "Not set"}
              onPress={handleEditProfile}
            />
            <ProfileItem
              icon={<MaterialIcons name="admin-panel-settings" size={20} color="#6b7280" />}
              title="Role"
              value={user?.role || "Employee"}
              onPress={() => {}}
              showArrow={false}
            />
            {user?.is_superadmin === 1 && (
              <ProfileItem
                icon={<MaterialIcons name="security" size={20} color="#fbbf24" />}
                title="Super Admin"
                value="Active"
                onPress={() => {}}
                showArrow={false}
              />
            )}
          </ProfileCard>

          {/* Security */}
          {/* <ProfileCard title="Security">
            <ProfileItem
              icon={<MaterialIcons name="lock" size={20} color="#6b7280" />}
              title="Change Password"
              onPress={handleChangePassword}
            />
            <ProfileItem
              icon={<MaterialIcons name="fingerprint" size={20} color="#6b7280" />}
              title="Two-Factor Authentication"
              value="Disabled"
              onPress={() => Alert.alert("2FA", "This feature will be available soon!")}
            />
            <ProfileItem
              icon={<MaterialIcons name="devices" size={20} color="#6b7280" />}
              title="Active Sessions"
              value="3 devices"
              onPress={() => Alert.alert("Sessions", "This feature will be available soon!")}
            />
          </ProfileCard> */}

          {/* Settings */}
          {/* <ProfileCard title="Settings">
            <SettingsItem
              icon={<Ionicons name="notifications" size={20} color="#6b7280" />}
              title="Push Notifications"
              value={notificationsEnabled}
              onToggle={setNotificationsEnabled}
              showSwitch={true}
            />
            <SettingsItem
              icon={<Ionicons name="moon" size={20} color="#6b7280" />}
              title="Dark Mode"
              value={darkModeEnabled}
              onToggle={setDarkModeEnabled}
              showSwitch={true}
            />
            <ProfileItem
              icon={<Ionicons name="language" size={20} color="#6b7280" />}
              title="Language"
              value="English"
              onPress={() => Alert.alert("Language", "This feature will be available soon!")}
            />
            <ProfileItem
              icon={<Ionicons name="time" size={20} color="#6b7280" />}
              title="Timezone"
              value="UTC+5"
              onPress={() => Alert.alert("Timezone", "This feature will be available soon!")}
            />
          </ProfileCard> */}

          {/* Support */}
          {/* <ProfileCard title="Support">
            <ProfileItem
              icon={<Ionicons name="help-circle" size={20} color="#6b7280" />}
              title="Help Center"
              onPress={handleSupport}
            />
            <ProfileItem
              icon={<Ionicons name="chatbubble" size={20} color="#6b7280" />}
              title="Contact Support"
              onPress={handleSupport}
            />
            <ProfileItem
              icon={<Ionicons name="star" size={20} color="#6b7280" />}
              title="Rate App"
              onPress={() => Alert.alert("Rate App", "Thank you for your feedback!")}
            />
            <ProfileItem
              icon={<Ionicons name="document-text" size={20} color="#6b7280" />}
              title="Privacy Policy"
              onPress={() => Alert.alert("Privacy Policy", "This will open privacy policy")}
            />
          </ProfileCard> */}

          {/* Logout */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={20} color="#ef4444" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

          {/* Version */}
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>Skylead v1.0.0</Text>
            <Text style={styles.versionSubtext}>User ID: {user?.id || "N/A"}</Text>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scrollView: {
    flex: 1,
  },
  mainContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  superAdminBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 15,
  },
  roleContainer: {
    marginBottom: 20,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  roleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.3)',
    gap: 8,
  },
  editProfileText: {
    color: '#4ade80',
    fontSize: 14,
    fontWeight: '600',
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 15,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f9fafb',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemValue: {
    fontSize: 14,
    color: '#6b7280',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingVertical: 15,
    borderRadius: 12,
    gap: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  logoutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
  },
  versionText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 5,
  },
  versionSubtext: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.3)',
  },
});
