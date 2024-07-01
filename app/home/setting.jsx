import { Text, View,Pressable } from "react-native"
import {useSelector,useDispatch} from "react-redux"
import {logout} from "@/redux/authSlice"
import {revokeToken} from "@/api/auth"
import { router } from "expo-router"


export default function Setting() {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.user)

    const onHandlePress = () => {
        revokeToken(user.token)
        .then(res=>{
            if(res.ok){
                dispatch(logout(user))
                router.replace('/')
            }
        })
    }

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Settings Page</Text>
        <Pressable
        style={({pressed})=>[
          {
            backgroundColor: pressed ? "#ddd" : '#09f',
            padding: 5,
            borderRadius: 20,
            width: '50%',
            alignItems: 'center',
            marginBottom: 16
          }
        ]}
        android_ripple={{color: '#ddd'}}
        onPress={onHandlePress}
      >
        <Text style={{color: '#fff', fontSize:20}}>Logout Now!!</Text>
      </Pressable>
        </View>
    )
}
