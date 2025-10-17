import React from 'react';
import { View, Text, Image } from 'react-native';
import UniqueCodeScreenStyles from '../styles/UniqueCodeScreen';
import NextButton from './NextButton';

const UniqueCodeScreenScreen = () => (
  <View style={UniqueCodeScreenStyles.wrapper}>
    <View style={UniqueCodeScreenStyles.header}>
      <View style={UniqueCodeScreenStyles.headerRow}>
        <Image
          source={require('../assets/images/logo.png')}
          style={UniqueCodeScreenStyles.logo1}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={UniqueCodeScreenStyles.headerTitle}>Curiosity Program</Text>
          <Text style={UniqueCodeScreenStyles.headerSub}>The Center for Creative Learning</Text>
          <Text style={UniqueCodeScreenStyles.headerSub1}>IIT Gandhinagar</Text>
        </View>
      </View>
    </View>

    <View style={UniqueCodeScreenStyles.sheet}>
      <View style={UniqueCodeScreenStyles.uniquetext}>
        <Image
            source={require('../assets/images/arrow_back.png')}
            style={UniqueCodeScreenStyles.back}
        />
        <Text style={UniqueCodeScreenStyles.pageTitle}>Unique Code</Text>
      </View>
        <View style={UniqueCodeScreenStyles.mainBox}>
            <View style={UniqueCodeScreenStyles.banner}>
                <View style={UniqueCodeScreenStyles.bannerIcon}>
                    <Image
                    source={require('../assets/images/messages.png')}
                    style={UniqueCodeScreenStyles.logoBox}
                    />
                </View>
                <Text style={UniqueCodeScreenStyles.bannerText}>Dont have Unique Code</Text>
                <Image
                    source={require('../assets/images/arrow_right_alt_blue.png')}
                    style={UniqueCodeScreenStyles.bannerArrow}
                />

            </View>
            <Text style={UniqueCodeScreenStyles.fieldLabel}>Enter Unique Code</Text>
            <View style={UniqueCodeScreenStyles.otpRow}>
                {Array.from({ length: 6 }).map((_, i) => (
                <View key={i} style={UniqueCodeScreenStyles.otpBox} />
                ))}
            </View>
            <View style={{ height: 215 }} />
            <View>
                <NextButton />
            </View>
            </View>
        </View>
    </View>
);
export default UniqueCodeScreenScreen;
