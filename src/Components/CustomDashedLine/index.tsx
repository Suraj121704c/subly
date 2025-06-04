import React from 'react';
import {View, StyleSheet} from 'react-native';

const CustomDashedLine = ({
  color,
  dashWidth,
  dashGap,
  lineWidth,
  lineHeight,
}: any) => {
  const lineStyle = {
    backgroundColor: color,
    width: dashWidth,
    height: lineHeight,
    marginRight: dashGap,
  };

  const dashCount = Math.ceil(lineWidth / (dashWidth + dashGap));

  return (
    <View style={[styles.container, {width: lineWidth, height: lineHeight}]}>
      {Array.from({length: dashCount}).map((_, index) => (
        <View key={index} style={lineStyle} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomDashedLine;
