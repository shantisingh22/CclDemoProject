import React from 'react';
import { View, Text, Image } from 'react-native';
import UniqueCodeScreenStyles from '../styles/UniqueCodeScreen';
import { CustomStyle } from '../styles/CustomStyle';

const UniqueCodeScreenScreen = () => (
  <View style={UniqueCodeScreenStyles.wrapper}>
    <View style={UniqueCodeScreenStyles.header}>
      <View style={UniqueCodeScreenStyles.headerRow}>
        <Image
          source={require('../assets/images/logo.png')}
          style={UniqueCodeScreenStyles.logo}
        />
        <View style={{ marginLeft: CustomStyle.padding }}>
          <Text style={UniqueCodeScreenStyles.headerTitle}>Curiosity Program</Text>
          <Text style={UniqueCodeScreenStyles.headerSub}>The Center for Creative Learning</Text>
          <Text style={UniqueCodeScreenStyles.headerSub}>IIT Gandhinagar</Text>
        </View>
      </View>
    </View>

    <View style={UniqueCodeScreenStyles.sheet}>
      <Text style={UniqueCodeScreenStyles.back}>‹</Text>
      <Text style={UniqueCodeScreenStyles.pageTitle}>Unique Code</Text>

      <View style={UniqueCodeScreenStyles.banner}>
        <View style={UniqueCodeScreenStyles.bannerIcon}>
          <Text style={{ color: CustomStyle.primary }}>ℹ︎</Text>
        </View>
        <Text style={UniqueCodeScreenStyles.bannerText}>Don’t have Unique Code</Text>
        <Text style={UniqueCodeScreenStyles.bannerArrow}>→</Text>
      </View>
      <Text style={UniqueCodeScreenStyles.fieldLabel}>Enter Unique Code</Text>
      <View style={UniqueCodeScreenStyles.otpRow}>
        {Array.from({ length: 6 }).map((_, i) => (
          <View key={i} style={UniqueCodeScreenStyles.otpBox} />
        ))}
      </View>
      <View style={{ height: 48 }} />
      <View style={UniqueCodeScreenStyles.primaryBtn}>
        <Text style={UniqueCodeScreenStyles.primaryBtnText}>Next →</Text>
      </View>
    </View>
  </View>
);
export default UniqueCodeScreenScreen;
