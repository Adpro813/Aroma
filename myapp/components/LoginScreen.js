// components/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { auth } from '../firebase';

/**
 * loading screen component
 *
 * this screen shows a logo while checking if the user is logged in.
 * based on the auth status, it navigates to the home screen or the start screen
 */
const LoadingScreen = ({ navigation }) => {
  /**
   * useEffect runs when the component mounts
   * it checks the authentication status of the user
   */
  useEffect(() => {
    const checkAuthStatus = () => {
      // listen for auth state changes
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // if user is logged in, go to home screen
          navigation.replace('HomeScreen');
        } else {
          // if not, go to start screen
          navigation.replace('Start Screen');
        }
      });

      // clean up the listener when the component unmounts
      return () => unsubscribe();
    };

    // call the auth check function
    checkAuthStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* display the logo image */}
      <Image
        source={require('../images/logo.webp')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

/**
 * styles for the loading screen centers the logo and sets the background color
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
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
  logInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  guestText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    bottom: 0,
    left: 5,
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
});

export default LoginScreen;