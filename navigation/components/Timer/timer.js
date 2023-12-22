import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native'

import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: "#5271FF",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 5,
    borderColor: '#C1FF72',
    width: 70,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonStop: {
    borderColor: '#FF3131',
  },
  buttonText: {
    fontSize: 10,
    color: '#C1FF72',
  },
  buttonTextStop: {
    color: '#FF3131',
  },
  timerText: {
    color: '#fff',
    fontSize: 20,
  },
  picker: {
    flex: 1,
    width: 100,
    height: 40,
    ...(Platform.select({
      ios: {
        color: '#fff',
        backgroundColor: 'rgba(92, 92, 92, 0.206)',
      },
      android: {
        color: '#fff',
      },
    })),
  },
  button2: {
    borderWidth: 5,
    borderColor: '#C1FF72',
    marginTop:10,
    borderRadius:20


  },
  pickerItem: {
    color: '#fff',
    height: '100%',
    fontSize: 14,
    ...(Platform.select({
      ios: {
        marginLeft: '%',
        marginRight: '%',
      },
    })),
  },
})

const formatNumber = number => `0${number}` . slice(-2)

const getRemaining = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) }
}

const createArray = length => {
  const arr = []
  let i = 0
  while(i < length){
    arr.push(i.toString())
    i += 1
  }
  return arr
}

const AVAILABLE_MINUTES = createArray(60)
const AVAILABLE_SECONDS = createArray(60)

const Timer = () => {
  const [remainingSeconds, setRemainingSeconds] = useState(5)
  const [isRunning, setIsRunning] = useState(false)
  const [selectedMinutes, setSelectedMinutes] = useState('0')
  const [selectedSeconds, setSelectedSeconds] = useState('5')

  let interval = null

  useEffect(() => {
    if (remainingSeconds === 0 && isRunning) {
      stop()
    }
  }, [remainingSeconds, isRunning])

  const start = () => {
    setRemainingSeconds(
      parseInt(selectedMinutes, 10) * 60 + parseInt(selectedSeconds, 10)
    )
    setIsRunning(true)

    interval = setInterval(() => {
      setRemainingSeconds(prevSeconds => prevSeconds - 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(interval)
    interval = null
    setRemainingSeconds(5)
    setIsRunning(false)
  }

  const handleTimeChange = () => {
    const timeString = `${selectedMinutes}:${selectedSeconds}`
    console.log('Selected time:', timeString)
    // Do something with the timeString, e.g., save it
  }

  const renderPickers = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedMinutes}
        onValueChange={itemValue => setSelectedMinutes(itemValue)}
        mode="dropdown"
      >
        {AVAILABLE_MINUTES.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={selectedSeconds}
        onValueChange={itemValue => setSelectedSeconds(itemValue)}
        mode="dropdown"
      >
        {AVAILABLE_SECONDS.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  )

  const { minutes, seconds } = getRemaining(remainingSeconds)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isRunning ? (
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
      ) : (
        renderPickers()
      )}
      {isRunning ? (
        <TouchableOpacity
          onPress={stop}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={start} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleTimeChange} style={styles.button2}>
      </TouchableOpacity>
    </View>
  )
}

export default Timer
