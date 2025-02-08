import { FlatList, StyleSheet, View } from "react-native";
import { IconButton } from "../../components/IconButton";
import { useRouter } from "expo-router";
import { ListItem } from "@/components/ListItem";
import { RootState, store } from "@/store/store";
import { useSelector } from "react-redux";

export default function Index() {
  const router = useRouter();

  const plants = useSelector((state: RootState) => state.plant.value);

  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "center"}}>
      <View style={{ flexDirection: "column", alignItems: "center"}}>
        {plants.length > 0 ? <FlatList
        showsVerticalScrollIndicator={false}
            data={plants}
            renderItem={({item}) => <ListItem id={item.id} imageSource={item.image} plantName={item.plantName} plantDate={item.date} plantNotes={item.plantNotes} onPress={() => router.push(`/details/${item.id}`)}/>}
          />: ""}
          </View>
          <View style={styles.floatingButtonContainer}>
          <IconButton title={"+"} onPress={() => router.push("/scan")}></IconButton>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 5,  
    borderRadius: 50, 
    padding: 5, 
  },
});