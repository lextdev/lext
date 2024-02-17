import React, { forwardRef, useState, ReactElement } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, FlatList } from "react-native";

type TabsProps = {
  initialScrollIndex?: number;
  style?: StyleProp<ViewStyle>;
  onChangeTabs?: (index: number) => void;
  data: Array<ReactElement>;
  scrollEnabled?: boolean;
  tabStyle?: StyleProp<ViewStyle>;
  tabActiveStyle?: StyleProp<ViewStyle>;
};

const Tabs = forwardRef<TouchableOpacity, TabsProps>((props, ref) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { scrollEnabled, onChangeTabs, data, tabActiveStyle, tabStyle } = props;

  return (
    <FlatList
      style={[{ paddingBottom: 10 }, props.style]}
      scrollEnabled={scrollEnabled}
      horizontal
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          ref={ref}
          style={[
            { padding: 10 },
            index === selectedTab &&
              (tabActiveStyle ?? {
                borderBottomWidth: 2,
                borderBottomColor: "black",
              }),
            tabStyle,
          ]}
          onPress={() => {
            setSelectedTab(index);
            if (onChangeTabs) onChangeTabs(index);
          }}
        >
          {item}
        </TouchableOpacity>
      )}
    />
  );
});

export default Tabs;
