import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';

function Timer({ interval, style }) {
  const pad = (n) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <View style={styles.timerContainer}>
      <Text style={[style, styles.textSpacing]}>{pad(duration.minutes())}:</Text>
      <Text style={[style, styles.textSpacing]}>{pad(duration.seconds())}.</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  );
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ButtonsRow({ children }) {
  return <View style={styles.buttonsRow}>{children}</View>;
}

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
      elapsed: 0,
      stopped: false,
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0],
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 100);
  };

  lap = () => {
    const timestamp = new Date().getTime();
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    });
  };

  formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

  stop = () => {
    clearInterval(this.timer);
    const { now, start } = this.state;
    const elapsed = now - start


    this.setState({
      elapsed,
      stopped: true,
    });

    const formattedTime = this.formatTime(Math.floor(elapsed / 1000));
    if (this.props.onStop) {
        this.props.onStop(formattedTime);
    }
}


  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
      elapsed: 0,
      stopped: false,
    })
  }
  resume = () => {
    const now = new Date().getTime()
    this.setState(state => ({
      start: now - state.elapsed,
      now,
      stopped: false,
    }))
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 100);
  };

  logTime = () => {
    const { now, start, laps } = this.state;
    const timer = now - start;
    const totalMilliseconds = laps.reduce((total, curr) => total + curr, 0) + timer;
    const duration = moment.duration(totalMilliseconds);
    const formattedTime = `${duration.hours()}:${duration.minutes()}:${duration.seconds()}.${Math.floor(
      duration.milliseconds() / 10
    )}`;
    console.log(formattedTime);
  };

  render() {
    const { now, start, laps, stopped } = this.state
    const timer = stopped ? this.state.elapsed : (now - start)
    return (
      <View style={styles.container}>
        <Timer
          interval={timer}
          style={styles.timer}
        />
        {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton 
            title='START' 
            color='#000000' 
            background='#C1FF72'
            onPress={this.start}/>
            
            <RoundButton 
            title='RESET' 
            color='#000000' 
            background='#FFDE59'
            onPress={this.reset}/>
            
          </ButtonsRow> 
        )}
        

          {laps.length > 0 && stopped == false && (
            <ButtonsRow>
              <RoundButton 
              title='STOP' 
              color='#000000' 
              background='#FF3131'
              onPress={this.stop}/>


          </ButtonsRow>
          )}

{laps.length > 0 && stopped === true && (
          <ButtonsRow>
            <RoundButton 
            title='START' 
            color='#000000' 
            background='#C1FF72'
            onPress={this.resume}/>

            <RoundButton 
              title='RESET' 
              color='#000000' 
              background='#FFDE59'
              onPress={this.reset}
            />
          </ButtonsRow>
        )}

        {start > 0 && (
          <ButtonsRow>
            <RoundButton
              title='STOP'
              color='#000000'
              background='#FF3131'
              onPress={() => {
                this.stop();
                this.logTime();
              }}
            />
          </ButtonsRow>
        )}

        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <RoundButton
              title='START'
              color='#000000'
              background='#C1FF72'
              onPress={this.resume}
            />
            <RoundButton
              title='RESET'
              color='#000000'
              background='#FFDE59'
              onPress={this.reset}
            />
          </ButtonsRow>
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({                
    container: {
      flex: 1,
      // backgroundColor: "#5271FF",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 5, 
    },
    timer: {
      color:'#FFFFFF',
      fontSize: 50,
      fontWeight: '200',
      width: 80,
      justifyContent:'center',
      alignItems:'center',
    },
    button: {
      width: 80,
      height: 30,
      borderRadius: 30,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonTitle: {
      fontSize: 16,
    },
    buttonsRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 60,
    },
    timerContainer: {
      flexDirection: 'row',
    },
    timerText: {
      fontFamily: 'monospace',
    },
    textSpacing: {
      marginRight: -5,
    }
})
