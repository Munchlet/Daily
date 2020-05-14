import React from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginHorizontal: 20,
		backgroundColor: "#f7f7f7cc",
		borderRadius: 30,
		padding: 4,
	},
	title: {
		fontSize: 50 / PixelRatio.get(),
		color: "#b1b1b1",
	},
	selected: {
		fontSize: 50 / PixelRatio.get(),
	},
	emojiView: {
		width: 40,
		height: 40,
		borderRadius: 50,
		borderWidth: 2,
		backgroundColor: "#e1e2fa",
		padding: 5,
		borderColor: "#4247ff",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function EmojiBoard() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mood</Text>
			<View style={styles.emojiView}>
				<Text style={styles.selected}>😀</Text>
			</View>
			<Text style={styles.selected}>😊</Text>
			<Text style={styles.selected}>😔</Text>
			<Text style={styles.selected}>😴</Text>
			<Text style={styles.selected}>😡</Text>
		</View>
	);
}
