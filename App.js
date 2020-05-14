import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { loadAsync } from "expo-font";
import React from "react";
import { Text, View } from "react-native";
import { setCustomText, setCustomTextInput } from "react-native-global-props";
import Home from "./screen/Home";
import NotebookEditor from "./screen/NotebookEditor";

const Stack = createStackNavigator();

if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;

export default function App() {
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		async function loadFont() {
			await loadAsync({
				opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
				"opensans-light": require("./assets/fonts/OpenSans-Light.ttf"),
				"opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
				"opensans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
			});

			setCustomTextInput({
				style: {
					fontFamily: "opensans",
				},
			});

			setCustomText({
				style: {
					fontFamily: "opensans-semibold",
				},
			});

			setLoaded(true);
		}

		loadFont();
	}, []);

	if (!loaded)
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" headerMode="none" options={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="NotebookEditor" component={NotebookEditor} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
