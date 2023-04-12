import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "./../../compnents";
import theme from "../../../theme";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" backIcon={false} />
      {/* <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}> */}
      <Text style={styles.heading}>TELE-CONSULT</Text>
      <View style={styles.consultsSec}>
        <TouchableOpacity
          style={styles.consultSec}
          onPress={() => navigation.navigate("TCMRequest")}
        >
          <Image
            source={require("./../../../assets/operator1.png")}
            style={styles.consultImage}
          />
          <Text style={styles.label}>Consult TCM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.consultSec}
          onPress={() => navigation.navigate("FinancialRequest")}
        >
          <Image
            source={require("./../../../assets/operator1.png")}
            style={styles.consultImage}
          />
          <Text style={styles.label}>Consult Financial Advisor</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.consultsSec, { justifyContent: "center" }]}>
        <TouchableOpacity
          style={styles.consultSec}
          onPress={() => navigation.navigate("MyPolicies")}
        >
          <Image
            source={require("./../../../assets/corporate-policy.png")}
            style={styles.consultImage}
          />
          <Text style={styles.label}>View My Policies</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    marginTop: 30,
    fontFamily: theme.semiBold,
    fontSize: 20,
  },
  consultsSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginTop: 30,
    // borderWidth: 1,
  },
  consultSec: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    // borderWidth: 1,
  },
  consultImage: {
    width: 100,
    height: 100,
  },
  label: {
    fontFamily: theme.medium,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
});
