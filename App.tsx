import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DEFAULT_HEIGHT = 100;

export default function App() {
  const [topHeight, setTopHeight] = useState(DEFAULT_HEIGHT);
  const [bottomHeight, setBottomHeight] = useState(DEFAULT_HEIGHT);

  return (
    <View style={styles.container}>
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
