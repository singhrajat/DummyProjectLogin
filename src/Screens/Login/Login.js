import {useEffect, useState} from 'react';
import {
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  login,
  loginApi,
  loginResData,
  resetLogin,
} from '../../ApiConfig/UserActions';
import EndUrls from '../../ApiConfig/EndUrls';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Utils from '../../Utils/Utils';

export default function Login(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginRes = useSelector(loginResData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(loginRes)?.length > 0) {
      if (loginRes?.data?.status) {
        setTimeout(() => {
          Utils.SnackSuccess(loginRes?.data?.message);
        }, 100);
      } else {
        setTimeout(() => {
          Utils.SnackError(loginRes?.data?.message);
        }, 100);
        dispatch(resetLogin());
      }
    }
  }, [loginRes]);

  const isValidate = () => {
    if (email?.trim()?.length < 1) {
      Utils.SnackError('Please enter email')
    
      return false;
    } else if (!Utils.isEmailValid(email.trim())) {
      Utils.SnackError('Invalid Email')
   
      return false;
    } else if (password?.trim()?.length < 1) {
      Utils.SnackError('Please enter password')
      return false;
    }

    return true;
  };
  const clickLogin = () => {
    Keyboard.dismiss();
    if (isValidate()) {
      const body = {
        email: email,
        password: password,
        device_type: Platform.OS,
        device_token: 'adbj',
        device_unique_id: '1',
      };

      dispatch(loginApi(body));
    }
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View>
        <Text style={[style.textStyle]}>Email</Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={txt => {
            setEmail(txt);
          }}
          style={[style.inputStyle]}
        />
        <Text style={[style.textStyle]}>Password</Text>
        <TextInput
          onChangeText={txt => {
            setPassword(txt);
          }}
          style={[style.inputStyle]}
        />

        <SubmitButton
          lbl={'Login'}
          onPress={() => {
            clickLogin();
          }}
        />
        <Pressable
          onPress={() => {
            navigation.replace('Register');
          }}>
          <Text style={[style.textStyle, {fontSize: 10, textAlign: 'center'}]}>
            Register?
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: 20,
  },
  inputStyle: {
    fontSize: 15,
    color: 'black',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  buttonStyle: {
    backgroundColor: 'lightblue',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});
