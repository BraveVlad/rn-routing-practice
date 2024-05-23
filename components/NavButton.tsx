import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import { ReactChild } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

function NavButton(props: LinkProps) {
	return (
		<Link {...props} style={styles.navButton} asChild>
			<Pressable>{props.children}</Pressable>
		</Link>
	);
}

export { NavButton };

const styles = StyleSheet.create({
	navButton: {
		alignItems: "center",
		margin: "1%",
		padding: "1%",
		backgroundColor: "#0000ff",
		borderRadius: 25,
	},
});
