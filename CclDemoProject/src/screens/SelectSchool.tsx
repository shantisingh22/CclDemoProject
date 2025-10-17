import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/SelectSchool";
import { SPACING, COLORS } from "../styles/CustomStyle";
import { useNavigation } from "@react-navigation/native";


type SelectRowProps = { label: string; value: string };

const SelectRow: React.FC<SelectRowProps> = ({ label, value }) => (
  <View style={{ marginTop: SPACING.lg }}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity activeOpacity={0.8} style={styles.selectBox}>
      <Text style={styles.selectValue}>{value}</Text>
      <Text style={styles.caret}>⌄</Text>
    </TouchableOpacity>
  </View>
);

const SelectSchool: React.FC = () => {
const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../assets/images/logo.png")}  
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{ marginLeft: SPACING.md }}>
            <Text style={styles.brandTitle}>Curiosity Program</Text>
            <Text style={styles.brandSub}>
              The Center for Creative Learning{"\n"}IIT Gandhinagar
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.titleRow}>
          <Text style={styles.backChevron}>‹</Text>
          <Text style={styles.screenTitle}>KGBV School</Text>
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.banner}>
          <View style={styles.bannerIcon}>
            <Text style={{ fontSize: 16, color: COLORS.brand }}>☰</Text>
          </View>
          <Text style={styles.bannerText}>
            अगर प्रदेश, जिला या स्कूल का नाम लिस्ट में नहीं है
          </Text>
          <Text style={styles.bannerArrow}>→</Text>
        </TouchableOpacity>

        <SelectRow label="State" value="Punjab" />
        <SelectRow label="District" value="Bathinda" />
        <SelectRow label="School Name" value="Sangat Guda" />

        <TouchableOpacity activeOpacity={0.9} style={styles.nextBtn}
                  onPress={() => navigation.navigate("UniqueCodeScreen")} >

        
          
          <Text style={styles.nextText}>Next  →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};           

export default SelectSchool;