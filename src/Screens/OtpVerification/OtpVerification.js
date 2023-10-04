import {useEffect, useRef, useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import SubmitButton from '../../Common/SubmitButton';
import {useDispatch, useSelector} from 'react-redux';
import {registerApi, registerResData} from '../../ApiConfig/UserActions';
import Utils from '../../Utils/Utils';

export default function OtpVerification(props) {
  const {navigation} = props;
  const body = props?.route?.params?.body;
  console.log('body for register from params ', body);
  let otpInput = useRef(null);
  const [otpValue, setOtpValue] = useState('');
  const registerRes = useSelector(registerResData);
  console.log("register response ",registerRes);
  const dispatch = useDispatch();

  const clickVerifyOtp = () => {
    if (otpValue?.trim()?.length != 6) {
      Utils.SnackError('Invalid OTP');

      return;
    }

    body.otp = otpValue;

    Keyboard.dismiss()
    dispatch(registerApi(body));
  };

  useEffect(() => {
    if (Object.keys(registerRes)?.length > 0) {
      if (registerRes?.data?.status) {
        Utils.SnackSuccess(registerRes?.data?.message);
      } else {
        setTimeout(() => {
          Utils.SnackError(registerRes?.data?.message);
        }, 100);
      }
    }
  }, [registerRes]);

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 16}}>
        <OTPTextView
          inputCount={6}
          tintColor={'lightblue'}
          textInputStyle={{fontSize: 15}}
          containerStyle={{width: 30}}
          handleTextChange={txt => {
            console.log('otp ', txt);
            setOtpValue(txt);
          }}
          ref={e => (otpInput = e)}
        />
        <SubmitButton
          lbl={'Verify'}
          onPress={() => {
            clickVerifyOtp();
          }}
        />
      </View>
    </View>
  );
}
