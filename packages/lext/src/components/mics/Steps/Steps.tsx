import React, { forwardRef, ReactElement } from "react";
import {
  FlatList,
  StyleProp,
  useWindowDimensions,
  ViewStyle,
} from "react-native";
import View from "../View/View";

type StepsProps = {
  initialScrollIndex?: number;
  style?: StyleProp<ViewStyle>;
  onChangeSteps?: (index: number) => void;
  data: Array<ReactElement>;
  scrollEnabled?: boolean;
};

const Steps = forwardRef<FlatList<ReactElement>, StepsProps>((props, ref) => {
  const { width } = useWindowDimensions();

  return (
    <FlatList
      ref={ref}
      horizontal
      pagingEnabled
      data={props.data}
      windowSize={1}
      bounces={false}
      scrollEnabled={props.scrollEnabled ?? false}
      style={[{ flex: 1 }, props.style]}
      keyExtractor={(_item, index) => index.toString()}
      initialScrollIndex={props.initialScrollIndex ?? 0}
      renderItem={({ item, index }) => (
        <View key={index} style={{ flex: 1, width }}>
          {item}
        </View>
      )}
      onMomentumScrollEnd={event => {
        const index = Math.floor(
          Math.floor(event.nativeEvent.contentOffset.x) /
            Math.floor(event.nativeEvent.layoutMeasurement.width)
        );

        if (props.onChangeSteps) props.onChangeSteps(index);
      }}
    />
  );
});

export default Steps;
