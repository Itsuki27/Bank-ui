import { Text, View, Pressable } from "react-native"
import { router } from "expo-router"

export default function Another() {
    const onHandlePress = () =>{
        
     
        router.back()
      }

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text>Another Page</Text>
        <Pressable
            style={({pressed})=>[
            {
                backgroundColor: pressed ? "#ddd" : '#09f',
                padding: 5,
                borderRadius: 20,
                width: '50%',
                alignItems: 'center'
            }
            ]}
            android_ripple={{color: '#ddd'}}
            onPress={onHandlePress}
        >
            <Text style={{color: '#fff', fontSize:20}}>Go back</Text>
        </Pressable>
        </View>
    )
}
