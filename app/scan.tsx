import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useDispatch } from "react-redux";
import { addPlant } from "@/store/plantSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Scan() {
  const [plantName, setPlantName] = useState("");
  const [plantNotes, setPlantNotes] = useState("");
  const [useCamera, setUseCamera] = useState(false);
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plant.value);
  
  const handleSubmit = () => {
    const date = new Date();
    dispatch(addPlant({id: plants.length, plantName: plantName, plantNotes: plantNotes, image: uri != null ? uri : 'https://legacy.reactjs.org/logo-og.png', date: date.toDateString()}));
    router.push("/");
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo != undefined) {
      setUri(photo?.uri);
      setUseCamera(false);
    }
  };


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const renderPicture = () => {
    return (
      <View>
        <Image
          source={uri != undefined ? { uri: uri } : {uri: require("../assets/images/image.png")}}
          style={{ width: 200, aspectRatio: 1 }}
        />
        <Button onPress={() => setUri(null)} title="Take another picture" />
      </View>
    );
  };

  {if (useCamera == false) {
  return (
    <View style={{ flexDirection: "column", display: "flex", justifyContent: "center"}}>
      <View style={{ flexDirection: "column", display: "flex", alignItems: "center"}}>
        {uri ? renderPicture() : ""}
        {useCamera == false && uri == null ? 
        <TouchableOpacity onPress={() => setUseCamera(true)}>
        <ImageBackground style={styles.pictureButtonContainer} source={require('../assets/images/image.png')} resizeMode="cover">
          <Text style={styles.titleText}>Take a picture:</Text>
        </ImageBackground>
        </TouchableOpacity> : ""}
      </View>
      <View style={{ flexDirection: "column", display: "flex", alignItems: "center"}}>
        <Text style={styles.titleText}>Enter plant name:</Text>
        <TextInput style={styles.input} onChangeText={setPlantName} value={plantName}></TextInput>
        <Text style={styles.titleText}>Enter notes:</Text>
        <TextInput style={styles.input} onChangeText={setPlantNotes} value={plantNotes}></TextInput>
      </View>
      <View style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly", marginTop: 20}}>
      <Button title="Cancel" onPress={() => router.back()}/>
      <Button title="Submit" onPress={() => handleSubmit()}/>
      </View>
    </View>
  )}else if(uri == null){
    return(
      <View style={styles.container}>
      <CameraView style={styles.camera} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePicture} style={styles.button}>
            <Text style={styles.text}></Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
    )
    };
  } 
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pictureButtonContainer: {
    display: "flex",
    alignItems: "center",
    width: 200,
    height: 200
  },
  container: {
    display: "flex",
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    display: "flex",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    backgroundColor: 'transparent',
    width: "100%",
    height: "100%"
  },
  button: {
    display: "flex",
    position: "absolute",
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 16,
    bottom: 5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});