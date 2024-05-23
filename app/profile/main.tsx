import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavButton } from "@/components/NavButton";

const MainProfileScreen = () => {
	return (
		<View>
			<Text>MainProfileScreen</Text>

			<NavButton href="./prefferences">
				<Text>Prefferences</Text>
			</NavButton>
			<NavButton href="./followers">
				<Text>Followers</Text>
			</NavButton>
			{/* <NavButton push href="/">
				<Text>Back to main screen</Text>
			</NavButton> */}
		</View>
	);
};

export default MainProfileScreen;

const styles = StyleSheet.create({});
