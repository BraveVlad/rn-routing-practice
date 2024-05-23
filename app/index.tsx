import { NavButton } from "@/components/NavButton";
import { StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
	return (
		<View style={styles.main}>
			<Text>This is the main screen</Text>

			<View>
				<Text>Links:</Text>
				<NavButton href={"/about"}>
					<Text>About</Text>
				</NavButton>
				<NavButton href={"/profile/main"}>
					<Text>Profile</Text>
				</NavButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignSelf: "center",
		width: "90%",
		alignContent: "center",
		backgroundColor: "white",
	},
});
