import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Laptopslist} from "../laptops/screens/laptoplist"

export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen name="LaptopsListNav"
        component={Laptopslist}
        />
      </StackContacts.Navigator>
    </NavigationContainer>
   )
}
