import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Laptopslist} from "../laptops/screens/laptoplist"
import {LaptopsForm} from "./screens/laptopform"

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="LaptopsListNav">
        <StackContacts.Screen name="LaptopsListNav"
        component={Laptopslist}
        />
         <StackContacts.Screen name="LaptopsFormNav"
        component={LaptopsForm}
        />
      </StackContacts.Navigator>
    </NavigationContainer>
   )
}
