import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Slot, router } from "expo-router";
import { NavButton } from "@/components/NavButton";

const MainLayout = () => {
	return (
		<>
			<CustomTopNavbar />
			<Slot />
		</>
	);
};

function goBack() {
	router.back();
}

function CustomTopNavbar() {
	return (
		<View style={styles.topnav}>
			<Pressable style={styles.topnavButton} onPress={goBack}>
				Back
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	topnav: {
		width: "100%",
		padding: 8,
	},
	topnavButton: {
		width: "10%",
		padding: 4,
		fontWeight: "bold",
		borderColor: "red",
		borderWidth: 2,
		borderRadius: 25,
		alignItems: "center",
	},
});
export default MainLayout;
