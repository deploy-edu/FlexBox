import { useRef, useState } from "react";
import {
  PanResponder,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

const DEFAULT_HEIGHT = 100;

export default function App() {
  const [topHeight, setTopHeight] = useState(DEFAULT_HEIGHT);
  const [bottomHeight, setBottomHeight] = useState(DEFAULT_HEIGHT);
  const { height } = useWindowDimensions();

  /// 손가락에 따라서 움직이는 것을 감지하는 것
  const panResponderRef = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {},
      onPanResponderMove: (e, gestureState) => {
        const { moveY, y0 } = gestureState;
        const distance = y0 - moveY;
        console.log("distance", distance);
      },
      onPanResponderRelease: () => {},
    })
  );

  return (
    <View style={styles.container} {...panResponderRef.current.panHandlers}>
      <View
        style={{
          height: topHeight,
          backgroundColor: "red",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
        }}
      />
      <View
        style={{
          height: bottomHeight,
          backgroundColor: "blue",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
