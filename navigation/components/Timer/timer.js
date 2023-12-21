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
    width: '100%', 
    backgroundColor: "#5271FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '5%',
    paddingVertical: '10%', 
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 5,
    borderColor: "#C1FF72",
    width: 70,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  buttonStop: {
    borderColor: "#FF3131",
  },
  buttonText: {
    fontSize: 10,
    color: "#C1FF72"
  },
  buttonTextStop: {
    color: "#FF3131"
  },
  timerText: {
    color: "#fff",
    fontSize: 20
  },
  picker: {
    flex: 1,
    width: 100,
    height:37,
    ...Platform.select({
      ios: {
        color: "#fff",
        backgroundColor: "rgba(92, 92, 92, 0.206)",
      },
      android: {
        color: "#fff",
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    height:'100%',

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
  const seconds = time % 60; 
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
                       parseInt(state.selectedSeconds, 10),
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
