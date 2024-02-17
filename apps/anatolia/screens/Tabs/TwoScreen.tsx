import { Accordion, ArrowLeft, Box, Text, View } from "@ynssenem/lext";
import React, { useState } from "react";

const TwoScreen = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Box>
      <Accordion isActive={isCollapsed} onToggle={setIsCollapsed} title="Text">
        <Text>Text 12</Text>
      </Accordion>
    </Box>
  );
};

export default TwoScreen;
