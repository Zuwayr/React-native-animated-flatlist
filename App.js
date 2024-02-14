import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MyAnimatedList from "./MyAnimatedList";

export default function App() {
	return (
		<View style={styles.container}>
			<Text
				style={{
					color: "black",
					fontSize: 30,
					fontFamily: "Helvetica",
					height: 30,
				}}
			>
				Animated List
			</Text>
			<MyAnimatedList />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
