import React, { useState } from "react";
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
import { Header2 } from "../../compnents";
import theme from "../../../theme";

export default function UserProfile({ navigation, route }) {
  const [email, setEmail] = useState("simjustin60@gmail.com");
  const [fullName, setFullName] = useState(route.params.name);
  const [height, setHeight] = useState("1.76 m");
  const [weight, setWeight] = useState("75 kg");
  const [image, setImage] = useState(route.params.profile);
  const [pastMedicalRecords, setPastMedicalRecords] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Header2 title="Patient Profile" backIcon={true} menu={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.welcomeSec}>
          <TouchableOpacity>
            {image ? (
              <Image source={{ uri: image }} style={styles.userImage} />
            ) : (
              <Image
                source={require("./../../../assets/user.png")}
                style={styles.userImage}
              />
            )}
          </TouchableOpacity>

          <Text style={styles.welcomeTxt}>User</Text>
        </View>

        <View style={[styles.inputView, { marginTop: 10 }]}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.textInput}>{fullName}</Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.textInput}>{email}</Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.textInput}>{height}</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.textInput}>{weight}</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.label}>Medical Records</Text>
          <Text style={styles.textInput}>{pastMedicalRecords}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    justifyContent: "center",
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
    // marginTop: 15,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.gray,
    paddingVertical: 10,
  },
  textInput: {
    color: theme.primary,
    fontFamily: theme.medium,
    fontSize: 16,
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: theme.gray,
  },
  label: {
    fontFamily: theme.medium,
    color: theme.gray,
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
