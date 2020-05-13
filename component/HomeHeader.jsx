import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight + 20,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	header: {
		color: "#c8c9de",
		fontWeight: "700",
	},
});

export default function HomeHeader() {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name="pencil-outline" size={24} color="#c8c9de" />
			<Text style={styles.header}>Journal</Text>
			<MaterialCommunityIcons name="menu" size={24} color="#c8c9de" />
		</View>
	);
}
