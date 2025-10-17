import { CustomStyle } from "../styles/CustomStyle";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: CustomStyle.primary,
  },
  center: {
    flex: 1,
    marginTop: 270,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 40,
  },

  brandTop: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
  },
  
  brandBottom: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "300",
    marginTop: 2,
  },
});

export default styles;