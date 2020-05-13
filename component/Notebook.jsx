import Color from "color";
import React from "react";
import { Dimensions, ImageBackground, PixelRatio, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width / 3 - 30,
		height: 200,
		borderTopRightRadius: 20,
		marginLeft: 20,
	},
	img: {
		position: "relative",
		overflow: "hidden",
		height: "80%",
		width: "100%",
		borderTopRightRadius: 14,
		borderBottomRightRadius: 14,
	},
	title: {
		marginTop: 12,
		fontSize: 42 / PixelRatio.get(),
		fontFamily: "opensans-semibold",
		color: "#cacbdf",
	},
	bookSpine: {
		backgroundColor: "black",
		height: "100%",
		width: 20,
	},
});

export default function Notebook({ title, color }) {
	return (
		<View style={styles.container}>
			<ImageBackground style={[styles.img, { backgroundColor: Color(color).lighten(0.1).hex() }]} source={require("../assets/pattern/1.png")}>
				<View style={[styles.bookSpine, { backgroundColor: color }]}></View>
			</ImageBackground>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}
