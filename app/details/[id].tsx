import { editPlant } from '@/store/plantSlice';
import { RootState } from '@/store/store';
import { CameraView } from 'expo-camera';
import { router, useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Details() {
  const plants = useSelector((state: RootState) => state.plant.value);
  const dispatch = useDispatch();
  const { id } = useLocalSearchParams();

  const plant = plants.filter(function(results) {
      if (results.id.toString() == id.toString()) {
        return results;
      };
  });
  const [plantName, setPlantName] = useState(plant[0].plantName);
  const [plantNotes, setPlantNotes] = useState(plant[0].plantNotes);
  const [editable, setEditable] = useState(false);
  const [submitable, setSubmitable] = useState(true);
  const [useCamera, setUseCamera] = useState(false);
  const [uri, setUri] = useState<string | null>(null);
   const ref = useRef<CameraView>(null);
  
  const handleEdit = () => {
    setEditable(true);
    setSubmitable(false);
  }

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    if (photo != undefined) {
      setUri(photo?.uri);
      setUseCamera(false);
    }
  };

  const handleSubmit = () => {
    dispatch(editPlant({id: plant[0].id, plantName: plantName, plantNotes: plantNotes, image: uri != null ? uri : plant[0].image}));
    router.push("/");
  }

  const renderPicture = () => {
    const handleButtonPress = () => {
      setUri(null);
      setUseCamera(true);
    }
      return (
        <View>
          <Image
            source={uri != undefined ? { uri: uri } : {uri: require("../../assets/images/favicon.png")}}
            style={{ width: 200, aspectRatio: 1 }}
          />
          <Button onPress={() => handleButtonPress()} title="Take another picture" />
        </View>
      );
    };
  
  {if (useCamera == false) {
  return (
    <View style={{ display: "flex", flexDirection: "column", marginTop: 150 }}>
    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {useCamera == false && uri == null ? 
      <TouchableOpacity disabled={submitable} onPress={() => setUseCamera(true)}>
      <Image source={{ uri: plant[0].image }} style={{ width: 200, height: 200, aspectRatio: 1 }} />
      </TouchableOpacity> :  renderPicture()}
      <TextInput editable={editable} style={styles.input} value={plantName} onChangeText={setPlantName} defaultValue={plant[0].plantName} placeholder={plant[0].plantName}></TextInput>
      <TextInput editable={editable} style={styles.input} value={plantNotes} onChangeText={setPlantNotes} defaultValue={plant[0].plantNotes} placeholder={plant[0].plantNotes}></TextInput>
    </View>
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
      <Button title="Edit" disabled={editable} onPress={() => handleEdit()}/>
      <Button title="Submit" disabled={submitable} onPress={() => handleSubmit()}/>
    </View>
    </View>
  )}else if (useCamera == true) {
    return (
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
  }};
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
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