import { useEffect, useState } from "react"
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { login, loginApi, loginResData, registerApi, registerResData, resetLogin } from "../../ApiConfig/UserActions"
import EndUrls from "../../ApiConfig/EndUrls"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import Utils from "../../Utils/Utils"

export default function Register(props) {
    const { navigation } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [phone, setPhone] = useState('')
    const registerRes = useSelector(registerResData)

    const dispatch = useDispatch();


    useEffect(() => {

        if (Object.keys(registerRes)?.length > 0) {
            if (registerRes?.data?.status) {
                console.log("get res", registerRes?.data?.message);
            }
            else {
                console.log("get error ", registerRes?.data?.message);
                dispatch(resetLogin())
            };
        }

    }, [registerRes]);

    const isValidate = () => {

        if (email?.trim()?.length < 1) {
            console.log("Please enter email");
            return false
        }
        else if (!Utils.isEmailValid(email.trim())) {
            console.log("invalid Email");
            return false
        }
        else if (countryCode.trim()?.length < 1) {
            console.log("Enter country code");
            return false
        }
        else if (phone.trim()?.length != 10) {
            console.log("Invalid phonenumber");
            return false
        }

        else if (password?.trim()?.length < 1) {
            console.log("Please enter password");
            return false
        }


        return true
    }
    const clickRegister = () => {

        if (isValidate()) {
            const body = {
                email: email,
                password: password,
                country_code: countryCode,
                phone_number: phone,
                device_type: Platform.OS,
                device_token: 'adbj',
                device_unique_id: '1',
                otp:'123456'
            }

            dispatch(registerApi(body))
        }



    }
    return <View style={{ flex: 1, paddingHorizontal: 20 }}>

        <View>

            <Text style={[style.textStyle,]}>Email</Text>
            <TextInput
                onChangeText={txt => {
                    setEmail(txt)
                }}
                style={[style.inputStyle]} />

            <Text style={[style.textStyle,]}>Phone</Text>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <TextInput
                    onChangeText={txt => {
                        setCountryCode(txt)
                    }}
                    keyboardType='number-pad'
                    maxLength={3}
                    placeholder="+91"
                    style={[style.inputStyle, { width: 50, marginRight: 10 }]} />

                <TextInput
                    maxLength={10}
                    keyboardType='number-pad'
                    onChangeText={txt => {
                        setPhone(txt)
                    }}
                    style={[style.inputStyle, { flex: 1 }]} />
            </View>
            <Text style={[style.textStyle]}>Password</Text>
            <TextInput onChangeText={txt => {
                setPassword(txt)
            }} style={[style.inputStyle]} />

            <Pressable
                onPress={() => {
                    clickRegister()
                }}
            ><Text style={[style.buttonStyle]}>Register</Text></Pressable>
            <Pressable
                onPress={() => {
                    navigation.replace('Login')

                }}
            ><Text style={[style.textStyle, { fontSize: 10, textAlign: 'center' }]}>Login?</Text></Pressable>

        </View>
    </View>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 15, color: 'black', marginTop: 20
    },
    inputStyle: { fontSize: 15, color: 'black', borderBottomWidth: 1, borderColor: 'black' },
    buttonStyle: { backgroundColor: 'lightblue', color: 'white', textAlign: 'center', fontWeight: 'bold', paddingVertical: 10, borderRadius: 10, marginTop: 30 }

})