import React from "react";
import { View, Text } from "react-native";

export const ITEM_WIDTH = 360;
export const ITEM_HEIGHT = 180;

const Item = ({ color, text }) => {
	return (
		<View
			style={{
				width: ITEM_WIDTH,
				height: ITEM_HEIGHT,
				backgroundColor: color,
				borderRadius: 20,
				justifyContent: "center", // Center the text vertically
				alignItems: "center", // Center the text horizontally
			}}
		>
			<Text
				style={{
					color: "black",
					fontSize: 30,
					fontFamily: "Helvetica",
				}}
			>
				{text}
			</Text>
		</View>
	);
};

export default Item;
