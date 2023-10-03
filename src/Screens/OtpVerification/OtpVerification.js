import {Text, View} from 'react-native';

export default function OtpVerification(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1, paddingHorizontal:16}}>
      <SubmitButton
          lbl={'Verify'}
          onPress={() => {
           // clickRegister();
          }}
        />
    </View>
  );
}
