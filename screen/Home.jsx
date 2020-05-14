import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, PixelRatio, StyleSheet, Text, TextInput, View } from "react-native";
import ArchiveMiniCard from "../component/ArchiveMiniCard";
import HomeHeader from "../component/HomeHeader";
import Notebook from "../component/Notebook";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eeeef2",
	},
	search: {
		marginTop: 28,
		marginHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 16,
		paddingLeft: 20,
		paddingRight: 12,
		backgroundColor: "white",
		borderRadius: 20,
	},
	searchInput: {
		height: 20,
		width: "90%",
		fontWeight: "bold",
	},
	titleView: {
		marginHorizontal: 20,
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontFamily: "opensans-semibold",
		fontSize: 92 / PixelRatio.get(),
		color: "#534d6b",
	},
	notebooksList: {
		marginTop: 32,
		flexGrow: 0,
	},
	archiveView: {
		marginTop: 30,
		marginHorizontal: 30,
	},
	fab: {
		position: "absolute",
		bottom: 20,
		right: 20,
		height: 60,
		width: 60,
		backgroundColor: "#4449e1",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 300,
	},
});

export default function Home({ navigation }) {
	const [search, setSearch] = React.useState("");
	const [notebooks] = React.useState([
		{ color: "#ff76bd", title: "2019" },
		{ color: "#7378ff", title: "2018" },
		{ color: "#8bc773", title: "2017" },
		{ color: "#d6926b", title: "2016" },
		{ color: "#d0d258", title: "2015" },
	]);

	const [entries] = React.useState([
		{
			color: "#ff76bd",
			time: "10:00am",
			date: "December 12",
			title: "My mom visited me today!",
		},
		{
			color: "#ff76bd",
			time: "11:07am",
			date: "December 10",
			title: "was down with a cold on a summer",
		},
		{
			color: "#7378ff",
			time: "07:46pm",
			date: "December 09",
			title: "Janet called me early this morning when i had",
		},
		{
			color: "#d6926b",
			time: "02:34pm",
			date: "December 05",
			title: "Watched Money Heist. WOW!",
		},
	]);

	const onClick = (entry) => navigation.navigate("NotebookEditor", entry);

	return (
		<View style={styles.container}>
			<View style={styles.fab}>
				<MaterialCommunityIcons name="pencil-outline" size={24} color="#c8c9de" />
			</View>
			<HomeHeader />
			<View style={styles.search}>
				<TextInput style={styles.searchInput} onChangeText={(text) => setSearch(text)} value={search} placeholder="Search Entries" />
				<FontAwesome name="search" size={18} color="#cbccdf" />
			</View>
			<View style={styles.titleView}>
				<Text style={styles.title}>Notebooks</Text>
				<MaterialCommunityIcons name="dots-horizontal" size={32} color="#cbccdf" />
			</View>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				style={styles.notebooksList}
				data={notebooks}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => <Notebook {...item} />}
			/>
			<View style={styles.archiveView}>
				{entries.map((entry) => (
					<ArchiveMiniCard {...entry} key={entry.title} onClick={() => onClick(entry)} />
				))}
			</View>
		</View>
	);
}
