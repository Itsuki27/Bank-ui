import { Text, View } from "react-native"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { router } from "expo-router"

export default function Index() {
 
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Main Page</Text>
        </View>
    )
}
