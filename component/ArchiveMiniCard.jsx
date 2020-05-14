import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { PixelRatio, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
		marginVertical: 8,
	},
	block: {
		height: "80%",
		width: 16,
		borderRadius: 4,
	},
	textView: {
		marginLeft: 20,
		width: "83%",
	},
	leftView: {
		flexDirection: "row",
		height: "100%",
	},
	time: {
		color: "#d5d6e5",
		fontSize: 42 / PixelRatio.get(),
	},
	title: {
		color: "#605b76",
		fontSize: 60 / PixelRatio.get(),
		width: "100%",
	},
});

export default function ArchiveMiniCard({ color, date, time, onClick }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onClick}>
			<View style={styles.leftView}>
				<View style={[styles.block, { backgroundColor: color }]} />
				<View style={styles.textView}>
					<Text style={styles.time}>{time}</Text>
					<Text style={styles.title} numberOfLines={1}>
						{date}
					</Text>
				</View>
			</View>
			<MaterialCommunityIcons name="chevron-right" size={24} color="#c8c9de" />
		</TouchableOpacity>
	);
}
