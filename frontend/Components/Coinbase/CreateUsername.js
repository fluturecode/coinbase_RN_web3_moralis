import {SafeAreaView} from 'react-native-';
import HeaderImage from '../../../assets/image/header1.png';

export const CreateUsername = ({navigation}) => {
  return (
    <SafeAreaView>
      <Image src={HeaderImage} style={{width: '100%'}} />
      <View>
        <Text
          style={{
            fontFamily: 'Helvetica Neue',
            fontWeight: '700',
            fontSize: 24,
          }}>
          Pick your username
        </Text>
      </View>
    </SafeAreaView>
  );
};
