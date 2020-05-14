import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {},
	dot: {
		height: 16,
		width: 16,
		backgroundColor: "#534d6b",
		borderRadius: 20,
	},
	col: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	selected: {
		borderWidth: 2,
		borderColor: "black",
		borderRadius: 200,
		height: 30,
		width: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	invisible: {
		borderWidth: 2,
		borderColor: "transparent",
		borderRadius: 200,
		height: 30,
		width: 30,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default function EditorPalette() {
	return (
		<View style={styles.container}>
			<View style={styles.col}>
				<View style={styles.selected}>
					<View style={[styles.dot, { backgroundColor: "#534d6b" }]} />
				</View>

				<View style={[styles.dot, { backgroundColor: "#ff76bd" }]} />
				<View style={[styles.dot, { backgroundColor: "#4449e1" }]} />
			</View>
			<View style={styles.col}>
				<View style={styles.invisible}>
					<View style={[styles.dot, { backgroundColor: "#7378ff" }]} />
				</View>
				<View style={[styles.dot, { backgroundColor: "#73b9ff" }]} />
				<View style={[styles.dot, { backgroundColor: "#6ee144" }]} />
			</View>
			<View style={styles.col}>
				<View style={styles.invisible}>
					<View style={[styles.dot, { backgroundColor: "#f6e73a" }]} />
				</View>
				<View style={[styles.dot, { backgroundColor: "#ff7070" }]} />
				<View style={[styles.dot, { backgroundColor: "#e14444" }]} />
			</View>
		</View>
	);
}
