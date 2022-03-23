import {SafeAreaView} from 'react-native-';
import HeaderImage from '../../../assets/image/header1.png';

export const CreateUsername = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Image src={HeaderImage} style={{width: '100%'}} />
      <View>
        <Text
          style={{
            fontFamily: 'Helvetica Neue',
            fontWeight: '700',
            fontSize: 24,
          }}></Text>
        <Text
          style={{
            fontFamily: 'Helvetica Neue',
            fontWeight: '700',
            fontSize: 13,
            color: '#4F5C6C',
            marginTop: 10,
          }}>
          This is how other Wallet users can find you and send you payments.
        </Text>
      </View>
    </SafeAreaView>
  );
};
