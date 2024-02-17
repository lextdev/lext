import { Tabs, Text, View } from "@ynssenem/lext";
import React from "react";

const TwoScreen = () => {
  const [active, setActive] = React.useState(0);
  return (
    <View>
      <Tabs
        onChangeTabs={index => setActive(index)}
        data={[
          <Text>😀</Text>,
          <Text>Tab 2</Text>,
          <Text>Tab 3</Text>,
          <Text>Tab 4</Text>,
          <Text>Tab 5</Text>,
          <Text>Tab 6</Text>,
          <Text>Tab 7</Text>,
          <Text>Tab 8</Text>,
          <Text>Tab 9</Text>,
          <Text>Tab 10</Text>,
          <Text>Tab 11</Text>,
          <Text>Tab 12</Text>,
          <Text>Tab 13</Text>,
          <Text>Tab 14</Text>,
        ]}
        scrollEnabled={true}
        initialScrollIndex={0}
      />
      {active === 0 && <Text>Tab 1</Text>}
      {active === 1 && <Text>Tab 2</Text>}
    </View>
  );
};

export default TwoScreen;
