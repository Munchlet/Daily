import Constants from "expo-constants";
import React from "react";
import { PixelRatio, ScrollView, StyleSheet, Text, View } from "react-native";
import EditorToolbar from "../component/EditorToolbar";
import EmojiBoard from "../component/EmojiBoard";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eeeef2",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: Constants.statusBarHeight + 20,
		marginHorizontal: 20,
	},
	title: {
		flex: 1,
		fontFamily: "opensans-semibold",
		fontSize: 92 / PixelRatio.get(),
		color: "#534d6b",
	},
	switch: {
		flex: 1,
	},
	date: {
		marginHorizontal: 20,
		color: "#cacbdf",
		fontSize: 58 / PixelRatio.get(),
	},
	editor: {
		borderRadius: 30,
		backgroundColor: "#fbfbfb",
		flex: 1,
		marginHorizontal: 10,
		marginTop: 36,
		marginBottom: 10,
	},
	bodyView: {
		padding: 32,
	},
	body: {
		color: "#b2b5bd",
		fontFamily: "opensans",
		lineHeight: 32,
		fontSize: 46 / PixelRatio.get(),
	},
});

export default function NotebookEditor({ route }) {
	const {
		params: { color, date, time, title },
	} = route;

	const [switchValue, setSwitchValue] = React.useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text numberOfLines={1} style={styles.title}>
					{title}
				</Text>
				{/* <Switch
					style={styles.switch}
					value={switchValue}
					onValueChange={(v) => {
						setSwitchValue(v);
					}}
				/> */}
			</View>
			<Text style={styles.date}>{date}</Text>
			<EditorToolbar />
			<View style={styles.editor}>
				<ScrollView style={styles.bodyView} showsVerticalScrollIndicator={false}>
					<Text style={styles.body}>
						So often in life, we end up doing things because we convince ourselves that we have to. Other times, we simply decide that we like doing
						things without really thinking about why. Keeping a record of things that you're truly grateful for helps you figure out what really
						matters to you, and what you should spend your time and energy on. So often in life, we end up doing things because we convince ourselves
						that we have to. Other times, we simply decide that we like doing things without really thinking about why. Keeping a record of things
						that you're truly grateful for helps you figure out what really matters to you, and what you should spend your time and energy on.{"\n"}So
						often in life, we end up doing things because we convince ourselves that we have to. Other times, we simply decide that we like doing
						things without really thinking about why. Keeping a record of things that you're truly grateful for helps you figure out what really
						matters to you, and what you should spend your time and energy on. So often in life, we end up doing things because we convince ourselves
						that we have to. Other times, we simply decide that we like doing things without really thinking about why. Keeping a record of things
						that you're truly grateful for helps you figure out what really matters to you, and what you should spend your time and energy on.{"\n"}So
						often in life, we end up doing things because we convince ourselves that we have to. Other times, we simply decide that we like doing
						things without really thinking about why. Keeping a record of things that you're truly grateful for helps you figure out what really
						matters to you, and what you should spend your time and energy on. So often in life, we end up doing things because we convince ourselves
						that we have to. Other times, we simply decide that we like doing things without really thinking about why. Keeping a record of things
						that you're truly grateful for helps you figure out what really matters to you, and what you should spend your time and energy on.{"\n"}
					</Text>
				</ScrollView>
				<EmojiBoard />
			</View>
		</View>
	);
}
