import { useRef, useState } from "react";
import {
  PanResponder,
  StyleSheet,
  Text,
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
      onPanResponderMove: (e, gestureState) => {
        const { moveY, y0 } = gestureState;
        const distance = y0 - moveY;
        // distance가 0보다 작으면 topHeight를 늘리고, 0보다 크면 bottomHeight를 늘림
        if (distance < 0) {
          const newHeight = DEFAULT_HEIGHT - distance;
          const maxHeight = height - DEFAULT_HEIGHT;
          if (newHeight > maxHeight) {
            setTopHeight(maxHeight);
            return;
          }
          setTopHeight(newHeight);
        } else if (distance > 0) {
          const newHeight = DEFAULT_HEIGHT + distance;
          const maxHeight = height - DEFAULT_HEIGHT;
          if (newHeight > maxHeight) {
            setBottomHeight(maxHeight);
            return;
          }
          setBottomHeight(newHeight);
        }
      },
      onPanResponderRelease: () => {
        // 손가락을 뗐을 때 초기화
        setTopHeight(DEFAULT_HEIGHT);
        setBottomHeight(DEFAULT_HEIGHT);
      },
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
          }}
        >
          Center
        </Text>
      </View>
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
