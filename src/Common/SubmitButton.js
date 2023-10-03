import { Pressable, StyleSheet, Text, View } from "react-native"

export default SubmitButton = (props) => {

    return <Pressable
        onPress={props?.onPress}
    ><Text style={[style.buttonStyle]}>{props?.lbl}</Text></Pressable>
}

const style = StyleSheet.create({
    inputStyle: { fontSize: 15, color: 'black', borderBottomWidth: 1, borderColor: 'black' },
    buttonStyle: { backgroundColor: 'lightblue', color: 'white', textAlign: 'center', fontWeight: 'bold', paddingVertical: 10, borderRadius: 10, marginTop: 30 }

})