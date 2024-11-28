import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from '../firebase';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error("Login error: ", error.message);
      setErrorMessage("There was a problem logging you into Aroma. \nPlease try again.");
    }
  };

  const defineVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/logo.webp')}
          style={{ width: 180, height: 170 }}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={defineVisibility}>
            <Icon
              name="visibility"
              size={20}
              color='gray'
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
        >
          <Text style={styles.logInText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.guestText}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          Guest
        </Text>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate('UsernamePasswordScreen')}
        >
          Sign Up
        </Text>
        {errorMessage? (
          <Text 
            style={styles.errorMessageText}
          >{errorMessage}</Text>
        ): null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  formContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 15,
  },
  inputContainer: {
    position: 'relative',
    width: 200,
    marginBottom: 7,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 1,
    padding: 10,
    paddingRight: 40,
  },
  buttonContainer: {
    width: 200,
    backgroundColor: 'rgb(135,206,235)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guestText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    bottom: -1,
    left: 10,
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    right: 5,
  },
  errorMessageText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12.5,
    marginTop: 20,
  }
});

export default LoginScreen;