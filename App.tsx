import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
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
          flex: 1,
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
