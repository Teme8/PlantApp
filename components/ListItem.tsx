import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, Image, View } from 'react-native';

export function ListItem({ id, imageSource, plantName, plantDate, plantNotes, onPress }: PropsWithChildren & {id: Number, imageSource: String, plantName: String, plantDate: String, plantNotes: String, onPress: (event: GestureResponderEvent) => void}) {
    return (
         <View id={id.toString()} style={{ flexDirection: "column", display: "flex", justifyContent: "center", marginTop: 20}}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: "column", display: "flex", alignItems: "center"}}>
            <Image source={imageSource ? {uri: imageSource} : {uri: require("../assets/images/image.png")}} style={{ width: 150, aspectRatio: 1 }}></Image>
            </View>
            <View style={{ flexDirection: "column", display: "flex"}}>
            <Text style={styles.text}>{plantName}</Text>
            <Text style={styles.text}>{plantDate}</Text>
            </View>
            <View style={{ flexDirection: "column", display: "flex"}}>
            <Text style={styles.text}>{plantNotes}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        borderWidth: 2,
        padding: 4,
        borderRadius: 10
      },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});