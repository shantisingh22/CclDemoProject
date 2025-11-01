import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from './globalStyles';

import SessionHeader from './SessionDetail/SessionHeader'; 
import SessionDetailCard from './SessionDetail/SessionDetailCard';
import JoinSessionDesktop from './SessionDetail/JoinSessionDesktop';
import JoinSessionMobile from './SessionDetail/JoinSessionMobile';
import TaskListCard from './SessionDetail/TaskListCard';
import SessionFooter from './SessionDetail/SessionFooter';

const SessionDetailScreen: React.FC = () => {
  return (
    <ScrollView>
      <SafeAreaView style={globalStyles.safe}>
        <SessionHeader />

        <View style={globalStyles.bodyContainer}>
          <SessionDetailCard />
          <View style={globalStyles.joinSessionDevices}>
            <JoinSessionDesktop />
            <JoinSessionMobile />
          </View>
          <TaskListCard />
        </View>
        <SessionFooter />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SessionDetailScreen;
