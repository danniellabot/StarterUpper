// react functional component with two buttons and print console log of the button clicked

import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase/app";
import "firebase/storage";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import { submitToMicrosoft2 } from "../config/analyseReceipt";

const postImageToFirebase = async (uri, uid) => {
  console.log("postImageToFirebase", uri);
  const blobResponse = await fetch(uri);
  const blob = await blobResponse.blob();
  const metadata = {
    contentType: "image/jpeg",
  };
  // get the last part of the uri

  // const imageRef = firebase.storage().ref().child(`${uid}/${fileName}.jpg`);
  const imageRef = firebase.storage().ref().child(`${uid}/receipt1.jpg`);
  await imageRef.put(blob, metadata);
  const url = await imageRef.getDownloadURL();
  console.log("url 1111", url);
  return url;
};

const CreateScreen = () => {
  const [image, setImage] = React.useState(null);
  const { user } = useContext(AuthenticatedUserContext);

  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      const getUrl = await postImageToFirebase(result.uri, user.uid);
      console.log("getUrl", getUrl);
      const getResult = await submitToMicrosoft2(getUrl);
      console.log("getResult", getResult);
    }
  };

  const RenderImage = () => {
    return (
      <>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Button
          title="Choose a different image"
          onPress={() => handleChooseImage()}
        />
        <Button title="Next" onPress={() => console.log("next")} />
      </>
    );
  };

  const HandleChoosePhoto = () => {
    // playAnimation = () => {
    //   this.animation.play();
    // };
    return (
      <>
        <LottieView
          // ref={(animation) => {
          //   this.animation = animation;
          // }}
          source={require("../../assets/create_light_mode.json")}
          autoPlay
          loop
          speed={2}
          style={{
            width: 400,
            height: 400,
            backgroundColor: "transparent",
          }}
        />
        <Button
          title="Upload from Image Library"
          onPress={() => handleChooseImage()}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <Button
          title="Take Photo from Camera"
          onPress={() => console.log("Create")}
          buttonStyle={[
            styles.button,
            {
              backgroundColor: "#B35CFF",
            },
          ]}
          titleStyle={styles.buttonTitle}
        />
      </>
    );
  };

  return (
    // button should be below the animation
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Create a Receipt Item</Text>
      {image !== null ? <RenderImage /> : <HandleChoosePhoto />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#02D4B3",
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius: 10,
    // width is 70% of the screen width,
    width: 300,
    height: 50,
    marginTop: 20,
  },
  buttonTitle: {
    color: "white",
    // make it bold
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 16,
  },
});

export default CreateScreen;
