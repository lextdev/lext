import React, { type PropsWithChildren } from 'react';
import { View } from 'react-native';

function Flex({ children }: PropsWithChildren) {
  return (
    <View
      style={{
        backgroundColor: 'blue',
      }}
    >
      {children}
    </View>
  );
}

export { Flex };
