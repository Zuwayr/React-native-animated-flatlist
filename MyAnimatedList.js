import React from "react";
import { Animated, FlatList } from "react-native";

import AnimatedItem from "./AnimatedItem";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const colors = [
	"#FF99A1",
	"#FFCC66",
	"#FFFFB3",
	"#B3FF99",
	"#99C2FF",
	"#E0CCFF",
];

const data = Array.from({ length: 10 }, (_, index) => ({
	key: `item${index}`,
	text: `Item ${index + 1}`,
	color: colors[index % colors.length],
}));

const MyAnimatedList = () => {
	const y = new Animated.Value(0);
	const onScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { y } } }],
		{
			useNativeDriver: false,
		}
	);
	const renderItem = ({ index, item }) => (
		<AnimatedItem propitems={item} y={y} index={index} />
	);

	return (
		<AnimatedFlatList
			scrollEventThrottle={1}
			showsVerticalScrollIndicator={false}
			data={data}
			renderItem={renderItem}
			keyExtractor={(_, index) => index.toString()}
			{...{ onScroll }}
		/>
	);
};

export default MyAnimatedList;
