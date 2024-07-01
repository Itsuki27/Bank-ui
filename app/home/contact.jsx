import { Text, View } from "react-native"
import {useSelector} from "react-redux"

export default function Contact() {
    const user = useSelector(state=>state.auth.user)
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Contact Us Page</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{user?.email}</Text>
        </View>
    )
}
