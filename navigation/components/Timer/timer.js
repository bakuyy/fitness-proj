import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Set width to 100%
    backgroundColor: "#5271FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '5%',
    paddingVertical: '10%', // Add padding for vertical space
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 7,
    borderColor: "#C1FF72",
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1
  },
  buttonStop: {
    borderColor: "#FF3131"
  },
  buttonText: {
    fontSize: 20,
    color: "#C1FF72"
  },
  buttonTextStop: {
    color: "#FF3131"
  },
  timerText: {
    color: "#fff",
    fontSize: 30
  },
  picker: {
    flex: 1,
    maxWidth: '30%',
    ...Platform.select({
      ios: {
        color: "#fff",
        backgroundColor: "rgba(92, 92, 92, 0.206)",
        height: '100%', // Set the height to your desired value
      },
      android: {
        color: "#fff",
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    fontSize: 15,
    ...Platform.select({
      ios: {
        marginLeft: '2%',
        marginRight: '2%',
      }
    })
  },
});

const formatNumber = number => `0${number}` . slice(-2);

const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60; // Use modulo to get seconds
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
}

const createArray = length => {
  const arr = [];
  let i = 0;
  while(i < length){
    arr.push(i.toString());
    i += 1;
  }
  return arr;
}

const AVAILABLE_MINUTES = createArray(60);
const AVAILABLE_SECONDS = createArray(60);


export default class Timer extends Component{
  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: "0",
    selectedSeconds: "5"
  }

  interval = null;

  componentDidUpdate = (prevProp, prevState) => {
    if(this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0){
      this.stop();
    }
  }

  componentWillUnmount() {
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  start = () => {
    this.setState(state => ({
      remainingSeconds: parseInt(state.selectedMinutes, 10) * 60 +
                       parseInt(state.selectedSeconds, 10), // Use base 10 for seconds
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
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedMinutes}
        onValueChange={itemValue => {
          this.setState({selectedMinutes: itemValue});
        }}
        mode="dropDown"
      > 
        {
          AVAILABLE_MINUTES.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))
        }
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedSeconds}
        onValueChange={itemValue => {
          this.setState({selectedSeconds: itemValue});
        }}
        mode="dropDown"
      > 
        {
          AVAILABLE_SECONDS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))
        }
      </Picker>
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
