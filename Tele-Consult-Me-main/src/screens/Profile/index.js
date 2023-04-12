import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Header } from "../../compnents";
import theme from "../../../theme";

export default function Profile({ navigation }) {
  const [eyeIcon, setEyeIcon] = useState(true);
  const [checkBox, setCheckBox] = useState(false);
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("simjustin60@gmail.com");
  const [fullName, setFullName] = useState("Justin Sim");
  const [height, setHeight] = useState("1.76 m");
  const [weight, setWeight] = useState("75 kg");
  const [reportId, setReportId] = useState("1266833");
  const [password, setPassword] = useState("abcdef13!");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" backIcon={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.welcomeSec}>
          <TouchableOpacity onPress={() => pickImage()}>
            {image ? (
              <Image source={{ uri: image }} style={styles.userImage} />
            ) : (
              <Image
                source={require("./../../../assets/user.png")}
                style={styles.userImage}
              />
            )}
          </TouchableOpacity>

          <Text style={styles.welcomeTxt}>Admin</Text>
        </View>

        {userType === "admin" ? (
          <>
            <View style={[styles.inputView, { marginTop: 30 }]}>
              <TextInput
                placeholder="Full Name"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={fullName}
                onChangeText={(value) => setFullName(value)}
              />
            </View>
            <View style={[styles.inputView, { marginTop: 30 }]}>
              <TextInput
                placeholder="Rep No./Medical Registration ID"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={reportId}
                onChangeText={(value) => setReportId(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                secureTextEntry={eyeIcon}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Company"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                // value={email}
                // onChangeText={(value) => setEmail(value)}
              />
            </View>
          </>
        ) : (
          <>
            <View style={[styles.inputView, { marginTop: 30 }]}>
              <TextInput
                placeholder="Full Name"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={fullName}
                onChangeText={(value) => setFullName(value)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                placeholder="Email Address"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                secureTextEntry={eyeIcon}
                value={email}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Height"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={height}
                onChangeText={(value) => setHeight(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Weight"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                value={weight}
                onChangeText={(value) => setWeight(value)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Past Medical Condition/Allergies"
                style={styles.textInput}
                placeholderTextColor="#AAB0B7"
                // value={email}
                // onChangeText={(value) => setEmail(value)}
              />
            </View>
          </>
        )}
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.signUpBtnTxt}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    justifyContent: "center",
    // alignItems: "center",
  },
  userImage: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
  },
  welcomeSec: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  welcomeTxt: {
    fontFamily: theme.medium,
    fontSize: 16,
    color: theme.black,
    marginTop: 20,
  },
  signUpBtn: {
    backgroundColor: theme.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    elevation: 2,
    borderRadius: 8,
    width: "85%",
    marginTop: 20,
    alignSelf: "center",
  },
  signUpBtnTxt: {
    textAlign: "center",
    color: theme.white,
    fontFamily: theme.medium,
    fontSize: 14,
  },
  inputView: {
    width: "85%",
    marginTop: 15,
    alignSelf: "center",
  },
  textInput: {
    color: theme.primary,
    fontFamily: theme.medium,
    fontSize: 14,
    height: 50,
    borderWidth: 1,
    borderColor: theme.gray,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 1,
  },
  label: {
    fontFamily: theme.medium,
    color: theme.black,
    fontSize: 14,
  },
  dontHaveTxt: {
    color: "#243443",
    fontFamily: theme.regular,
    fontSize: 14,
  },
  signUpTxt: {
    color: theme.primary,
    fontFamily: theme.medium,
    fontSize: 14,
  },
  chekcBoxsec: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginTop: 10,
    alignSelf: "center",
  },
  checkBox: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.primary,
  },
  checkBoxSelected: {
    backgroundColor: theme.primary,
    width: 13,
    height: 13,
    borderRadius: 4,
  },
  termsTxt: {
    marginLeft: 10,
    alignItems: "center",
    color: theme.black,
    fontFamily: theme.regular,
    fontSize: 12,
  },
  userTypesSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userTypeSec: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  userTxt: {
    fontFamily: theme.semiBold,
    fontSize: 16,
  },
  medicalHistory: {
    fontFamily: theme.semiBold,
    fontSize: 16,
    marginTop: 20,
    width: "85%",
    alignSelf: "center",
  },
});
