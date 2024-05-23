import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DynamicParamScreen = () => {
	const { dynamicParam } = useLocalSearchParams();
	console.log(dynamicParam);

	return (
		<View>
			<Text>Dynamic param is: {dynamicParam} </Text>
		</View>
	);
};

export default DynamicParamScreen;

const styles = StyleSheet.create({});
