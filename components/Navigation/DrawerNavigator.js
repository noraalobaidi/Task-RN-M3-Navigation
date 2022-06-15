import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "../Cart";
import ProductsList from "../ProductsList";
import RootNavigator from "./RootNavigator";

const { Navigator, Screen } = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={RootNavigator} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
