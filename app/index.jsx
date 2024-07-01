import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { TextInput, HelperText } from "react-native-paper";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { loginUser } from "../api/auth";

export default function Index() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onHandlePress = () => {
    setError(false);
    setErrorMsg("");
    const user = { username: username, password: password };
    loginUser(user)
      .then((res) => {
        if (res?.ok) {
          dispatch(login(res.data));
          router.replace({ pathname: "/home" });
        } else {
          setError(true);
          setErrorMsg(res.message ?? "Something went wrong");
        }
      })
      .catch((e) => {
        setError(true);
        setErrorMsg(e.message ?? "Something went wrong");
        console.error(e.message);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.logo}
      />
      <TextInput
        label={"Username"}
        mode="outlined"
        style={styles.input}
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        label={"Password"}
        mode="outlined"
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={toggleShowPassword}
          />
        }
      />
      {error && (
        <HelperText type="error" style={styles.errorText}>
          {errorMsg}
        </HelperText>
      )}
      <Pressable style={styles.button} onPress={onHandlePress}>
        <Text style={styles.buttonText}>Login Now!!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#09f",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
