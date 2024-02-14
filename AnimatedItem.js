import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import Item, { ITEM_HEIGHT as DEFAULT_ITEM_HEIGHT } from "./Item";

export const BUFFER = 10;
export const ITEM_HEIGHT = DEFAULT_ITEM_HEIGHT + BUFFER * 2;

const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 30;
const styles = StyleSheet.create({
	item: {
		marginVertical: BUFFER,
		alignSelf: "center",
	},
});

const AnimatedItem = ({ propitems, y, index }) => {
	const position = Animated.subtract(index * ITEM_HEIGHT, y);
	const isDisappearing = -ITEM_HEIGHT;
	const isTop = 0;
	const isBottom = height - ITEM_HEIGHT;
	const isAppearing = height;

	// const translateY = Animated.add(
	// 	Animated.add(
	// 		y,
	// 		y.interpolate({
	// 			inputRange: [0, 0.0001 + index * ITEM_HEIGHT],
	// 			outputRange: [0, -index * ITEM_HEIGHT], // Adjusted inputRange
	// 			extrapolateRight: "clamp",
	// 		})
	// 	),
	// 	position.interpolate({
	// 		inputRange: [isBottom, isAppearing],
	// 		outputRange: [0, -ITEM_HEIGHT / 4],
	// 		extrapolate: "clamp",
	// 	})
	// );

	const translateY = Animated.add(
		y,
		y.interpolate({
			inputRange: [0, index * ITEM_HEIGHT],
			outputRange: [0, -index * ITEM_HEIGHT], // Adjusted inputRange
			extrapolateRight: "clamp",
		})
	);

	const scale = position.interpolate({
		inputRange: [isDisappearing, isTop, isBottom, isAppearing],
		outputRange: [0.5, 1, 1, 0.5],
		extrapolate: "clamp",
	});

	const opacity = position.interpolate({
		inputRange: [isDisappearing, isTop, isBottom, isAppearing],
		outputRange: [0.5, 1, 1, 0.5],
	});

	return (
		<Animated.View
			style={[
				styles.item,
				{ opacity, transform: [{ translateY }, { scale }] },
			]}
			key={index}
		>
			<Item color={propitems.color} text={propitems.text} />
		</Animated.View>
	);

	// return (
	// 	<Animated.View
	// 		style={[styles.item, { transform: { translateY } }]}
	// 		key={index}
	// 	>
	// 		<Item color={propitems.color} text={propitems.text} />
	// 	</Animated.View>
	// );
};

export default AnimatedItem;
