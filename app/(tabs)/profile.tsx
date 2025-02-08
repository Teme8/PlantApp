import { Button, Image, Text, View } from "react-native";

export default function Profile() {

    // Mock user data (replace with API or Redux state)
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        bio: "Nature lover, plant enthusiast 🌿",
        avatar: "https://via.placeholder.com/150",
      };
    
      return (
        <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
          {/* Profile Picture */}
          <Image
            source={{ uri: user.avatar }}
            style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 10 }}
          />
    
          {/* User Info */}
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{user.name}</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>{user.email}</Text>
          <Text style={{ textAlign: "center", marginVertical: 10 }}>{user.bio}</Text>
    
          {/* Edit Profile Button */}
          <Button title="Edit Profile" />
        </View>
      );
    };