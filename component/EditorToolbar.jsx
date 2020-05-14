import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Tooltip from "rn-tooltip";
import EditorPalette from "./EditorPalette";

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	colorDot: {
		height: 20,
		width: 20,
		backgroundColor: "#534d6b",
		borderRadius: 20,
	},
});

export default function EditorToolbar() {
	const parent = React.useRef("parent");
	const [visible] = React.useState(true);
	const target = React.useRef("dot");

	return (
		<View style={styles.container} ref={parent}>
			<MaterialIcons name="format-align-left" size={24} color="#645f7a" />
			<MaterialIcons name="format-align-justify" size={24} color="#c9cadf" />
			<MaterialIcons name="format-align-right" size={24} color="#c9cadf" />
			<MaterialIcons name="format-bold" size={24} color="#c9cadf" />
			<MaterialIcons name="format-underlined" size={24} color="#c9cadf" />
			<Tooltip withOverlay={false} pointerColor="#ffffffb8" backgroundColor="#ffffffb8" height={135} popover={<EditorPalette />}>
				<View style={styles.colorDot} ref={target}></View>
			</Tooltip>
		</View>
	);
}
