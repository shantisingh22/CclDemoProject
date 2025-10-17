import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  ScrollView,
  Image,
  TextInput, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, COLORS } from './sessionDetail.styles';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

const SessionDetailScreen: React.FC = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safe}>
        <View style={styles.headerContaner}>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgSoft} />
          <Pressable hitSlop={12} onPress={() => {}}>
            <Text style={styles.backArrow}>{'<'}</Text>
          </Pressable>
          <Text style={styles.title}>Diwali Themed</Text>

          <View style={styles.tabsRow}>
            <Text style={styles.tab}>MATERIAL</Text>
            <Text style={styles.tabDivider}>|</Text>
            <Text style={styles.tab}>RECORDING</Text>
            <Text style={styles.tabDivider}>|</Text>
            <Text style={styles.tab}>TASK</Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.sectionTitle}>About The Session</Text>
          <Card>
            <Text style={styles.hindiQuestion}>
              क्या आपने सोचा है कि एक परखनली या टेस्ट ट्यूब में इन्द्रधनुष कैसे
              बन सकता है?
            </Text>
            <Text style={styles.hindiAns}>
              अम्ल और क्षार का इस्तेमाल करके हम अलग-अलग pH के बैंड बनाएँगे और
              बुलबुले बनते हुए देखेंगे—जिसे हम कहते हैं ‘रसायन फिज़’.
            </Text>
          </Card>

          <Text style={styles.sectionTitle}>Material Required</Text>
          <Card>
            <Text style={styles.hindiQuestion}>
              क्या आपने सोचा है कि एक परखनली या टेस्ट ट्यूब में इन्द्रधनुष कैसे
              बन सकता है?
            </Text>
            <Text style={styles.hindiAns}>
              अम्ल और क्षार का इस्तेमाल करके हम अलग-अलग pH के बैंड बनाएँगे और
              बुलबुले बनते हुए देखेंगे—जिसे हम कहते हैं ‘रसायन फिज़’.
            </Text>

            <Text style={styles.heading}>
              6 बच्चों के प्रत्येक समूह के लिए:
            </Text>

            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>15 gm सोडियम कार्बोनेट</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>
                75 मि.ली. 0.1 M एसीटिक एसिड या 75 मि.ली. सिरका
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>30 मि.ली. सबाबहार का रस</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>100 मि.ली. DI पानी</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>15 प्लास्टिक ड्रॉपर</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>30 मि.ली. यूनिवर्सल इंडिकेटर</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>
                2 काँच की परखनलियाँ (टेस्ट ट्यूब्स)
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>1 परखनली (टेस्ट ट्यूब) स्टैंड</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>1 स्पैचुला या चम्मच</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text style={styles.item}>1 रंगीन प्रिंट – संकेतक pH चार्ट</Text>
            </View>
          </Card>

          <Text style={styles.sectionTitle}>Join Session</Text>

          <View style={styles.card}>
            <Text style={styles.deviceCard}>TV/ Laptop</Text>
            <Text style={styles.deviceCardmuted}>
              अपने Browser में लिंक लिखें-
            </Text>

            <View style={styles.deviceLink}>
              <Text style={styles.label}>लिंक COPY</Text>
              <Pressable style={styles.linkRow} onPress={() => {}}>
                <Text style={styles.BtnText}>CCL.com/Join</Text>
                <Text style={styles.copyIcon}>📋</Text>
              </Pressable>
            </View>

            <View style={styles.deviceLink}>
              <Text style={[styles.label, { marginTop: 14 }]}>पिन COPY</Text>
              <View style={styles.pinRow}>
                <TextInput style={styles.pinBox} defaultValue="7" />
                <TextInput style={styles.pinBox} defaultValue="7" />
                <TextInput style={styles.pinBox} defaultValue="7" />
                <TextInput style={styles.pinBox} defaultValue="7" />
                <TextInput style={styles.pinBox} defaultValue="7" />
                <TextInput style={styles.pinBox} defaultValue="7" />
              </View>
            </View>
          </View>

          {/* Mobile Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Mobile{' '}
              <Text style={styles.muted}>|  Mobile से जुड़ने के लिए: -</Text>
            </Text>

            {<Pressable style={styles.actionRow}>
              <View style={[styles.iconCircle, { backgroundColor: '#2D8CFF20' }]}>
                <Text style={{ fontSize: 18 }}>🎦</Text>
              </View>
              <Text style={styles.actionText}>JOIN ZOOM</Text>
              <View style={styles.spacer} />
              <Text style={styles.arrow}>→</Text>
            </Pressable> }

            <Pressable style={[styles.actionRow, { marginTop: 12 }]}>
              <View style={[styles.iconCircle, { backgroundColor: '#FF3B3020' }]}>
                <Text style={{ fontSize: 18 }}>▶️</Text>
              </View>
              <Text style={styles.actionText}>JOIN YOUTUBE</Text>
              <View style={styles.spacer} />
              <Text style={styles.arrow}>→</Text>
            </Pressable>
          </View> 

          <Text style={styles.sectionTitle}>Tasks</Text>
          <View style={styles.card}>
            <Text style={styles.taskText}>
              If you have not attended the session kindly see the recorded
              version.
            </Text>


            <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>Attendance Form</Text>
              <Pressable style={styles.ctaCircle}>
                <Text style={styles.ctaArrow}>→</Text>
              </Pressable>
            </View>

            <View style={styles.divider} />

      
            <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>Upload Photos & Videos</Text>
              <Pressable style={styles.ctaCircle}>
                <Text style={styles.ctaArrow}>→</Text>
              </Pressable>
            </View>
            <View style={styles.divider} />
                <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>WorkSheet</Text>
              <Pressable style={styles.ctaCircle}>
                <Text style={styles.ctaArrow}>→</Text>
              </Pressable>
            </View>
            <View style={styles.divider} />
              <View style={styles.taskRow}>
              <Text style={styles.taskLabel}>Challenge Question</Text>
              <Pressable style={styles.ctaCircle}>
                <Text style={styles.ctaArrow}>→</Text>
              </Pressable>
            </View>
          </View>
         
          </View>
       
        

          <View style={{ height: 96 }} />
          <View style={{ height: 24 }} />
          <Text style={styles.sectionTitle}>Thumbnail</Text>
      

        <View style={styles.bottomBarWrapper}>
          <View style={styles.bottomBar}>
            <View style={styles.datePill}>
              <Text style={styles.dateBig}>29</Text>
              <Text style={styles.dateSmall}>Sept</Text>
            </View>
    
            <View style={styles.sessionInfo}>
              <Text style={styles.sessionLabel}>Session starts at</Text>
              <Text style={styles.sessionWhen}>Friday | 5 pm</Text>
            </View>

            <Pressable style={styles.joinBtn} onPress={() => {}}>
              <Text style={styles.joinText}>JOIN</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};


export default SessionDetailScreen;