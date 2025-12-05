// src/components/loginPage.tsx
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#999"
        />

        {/* LOGIN BUTTON → goes to /home */}
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* BACK BUTTON → goes to Welcome */}
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Back to Welcome</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F4",
  },
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    color: "#FF8719",
    textAlign: "center",
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    color: "#333",
  },

  /* ---------- BUTTONS ---------- */

  button: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  buttonText: {
    color: "#606162",
  },

  /* LOGIN BUTTON (Orange) */
  loginButton: {
    backgroundColor: "#FF8719",
    marginTop: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
