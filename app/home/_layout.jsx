import { Tabs } from "expo-router"
import { FontAwesome } from "@expo/vector-icons"


//index 0 is always the home page
const tabs = [
  { 
    page: "index",
    tabTitle: "Main Page",
    icon: "home"
  },
  {
    page: "contact",
    tabTitle: "Contact Us Page",
    icon: "edit"
  },
  {
    page: "setting",
    tabTitle: "Settings",
    icon: "gear"
  }
]

// this is the App.js of React Native
// if we create another _layout.tsx/.jsx the newly created _layout file is not the new App.js
export default function TabLayout() {
  
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: '#09f'}}>
      {/* loop all the tabs */}
      {
        tabs.map((item, index)=>(
            <Tabs.Screen
              key={item.page+index}
              name={item.page}
              options={{
                title: `${item.tabTitle}`,
                headerTitleAlign: 'center',
                tabBarIcon: ({color}) =><FontAwesome size={28} name={item.icon} color={color} />,
                tabBarShowLabel: tabs.length > 5 ? false : true,
                headerShown: false
              }}
            />
        ))
      }
    </Tabs>
  )
}
