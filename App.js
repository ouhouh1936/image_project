import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: `700`,
            color: '#999',
          }}>
          BLUE & GRAY
        </Text>
      </View>

      <TextInput style={styles.inputstyle} placeholder="ID" />
      <TextInput style={styles.inputstyle} placeholder="PASSWORD" />

      <View style={styles.findBox}>
        <TouchableOpacity>
          <Text style={styles.findText}>Forget Your ID?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.findText}>Find Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.findBox}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },
  inputstyle: {
    width: `80%`,
    height: 45,

    marginBottom: 15,

    borderColor: `#999`,
    borderBottomWidth: 1,
    borderBottomWidth: 1,

    padding: 10,
    borderRadius: 5,
    shadowColor: `#777`,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  findBox: {
    width: `80%`,
    padding: 5,
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginBottom: 100,
  },

  findText: {
    color: `#0984e3`,
    fontWeight: `600`,
  },

  findBox2: {
    width: `80%`,
    padding: 5,
    alignItems: `center`,
    justifyContent: `center`,
    marginTop: 60,
    marginBottom: 60,
  },

  btn1: {
    width: `50%`,
    height: 50,
    marginRight: 5,
    borderRadius: 5,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#192a56`,
  },

  btn2: {
    width: `50%`,
    height: 50,
    marginLeft: 5,
    borderRadius: 5,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#273c75`,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default App;
