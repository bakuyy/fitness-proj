import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import moment from 'moment'


function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}.</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}


function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  
  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    })
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    })
  }
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
  }
  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  render() {
    const { now, start, laps } = this.state
    const timer = now - start
    return (
      <View style={styles.container}>
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
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
        

          {start > 0 && (
            <ButtonsRow>
              <RoundButton 
              title='STOP' 
              color='#000000' 
              background='#FF3131'
              onPress={this.stop}/>


          </ButtonsRow>
          )}

{laps.length > 0 && start === 0 && (
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
              onPress={this.reset}/>

          </ButtonsRow>
        )}

      </View>
    )
  }
}


const styles = StyleSheet.create({                
    container: {
        flex: 1,
        backgroundColor: '#5271FF',
        alignItems: 'center',
        paddingTop: 130,
        paddingHorizontal: 20,
    },
    timer: {
      color:'#FFFFFF',
      fontSize: 76,
      fontWeight: '200',
      width: 120,
    },
    button: {
      width: 100,
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
      fontSize: 20,
    },
    buttonsRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 80,
    },
    timerContainer: {
      flexDirection: 'row',
    },
    timerText: {
      fontFamily: 'monospace',
    }
})
