import { useState } from "react";
import { Button, ScrollView, Switch, Text, View } from "react-native";

export default function Settings() {
   // State for toggles
   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
   const [darkMode, setDarkMode] = useState(false);

   return (
    <ScrollView style={{ display: "flex", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Settings</Text>

      {/* Notifications Toggle */}
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{fontSize: 16}}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      </View>

      {/* Dark Mode Toggle */}
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={{fontSize: 16}}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Profile Settings */}
      <Button title="Edit Profile" />

      {/* Privacy Policy */}
      <Button title="Privacy Policy" color="gray" />

      {/* Logout Button */}
      <Button title="Log Out" onPress={() => alert("Logged out")} color="red" />
    </ScrollView>
  );
};