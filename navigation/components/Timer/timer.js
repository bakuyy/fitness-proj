import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5271FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "100%",
    margin:20,
  },
  button: {
    borderWidth: 10,
    borderColor: "#C1FF72",
    width: 120,
    height: 120,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1
  },
  buttonStop: {
    borderColor: "#FF3131"
  },
  buttonText: {
    fontSize: 30,
    color: "#C1FF72"
  },
  buttonTextStop: {
    color: "#FF3131"
  },
  timerText: {
    color: "#fff",
    fontSize: 40
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  picker: {
    flex: 1,
    ...Platform.select({
      android: {
        backgroundColor: "rgba(92, 92, 92, 0.206)",
        borderRadius: 8,
        marginHorizontal: 10,
        height: 50,
        color: '#fff'
      },
    })
  },
  pickerItem: {
    color: "#fff",
    fontSize: 2,
  }
});

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) }
}

const createArray = length => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }
  return arr;
}

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

export default class Timer extends Component {
  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: "0",
    selectedSeconds: "5"
  }

  interval = null;

  componentDidUpdate = (prevProp, prevState) => {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop();
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  start = () => {
    this.setState(state => ({
      remainingSeconds:
        parseInt(state.selectedMinutes, 10) * 60 +
        parseInt(state.selectedSeconds, 30),
      isRunning: true
    }));
    this.interval = setInterval(() => {
      this.setState(state => ({
        remainingSeconds: state.remainingSeconds - 1
      }));
    }, 1000);
  }

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      remainingSeconds: 5,
      isRunning: false
    })
  }

  renderPickers = () => (
    <View style={styles.pickerContainer}>
      <View style={styles.picker}>
        <Picker
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedMinutes}
          onValueChange={itemValue => {
            this.setState({ selectedMinutes: itemValue });
          }}
          mode="dropdown"
        >
          {AVAILABLE_MINUTES.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
      </View>
      <Text style={styles.pickerItem}>minutes</Text>
      <View style={styles.picker}>
        <Picker
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedSeconds}
          onValueChange={itemValue => {
            this.setState({ selectedSeconds: itemValue });
          }}
          mode="dropdown"
        >
          {AVAILABLE_SECONDS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
      </View>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  );

  render() {
    const { minutes, seconds } = getRemaining(this.state.remainingSeconds);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          this.renderPickers()
        )}
        {this.state.isRunning ? (
          <TouchableOpacity
            onPress={this.stop}
            style={[styles.button, styles.buttonStop]}
          >
            <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={this.start}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
