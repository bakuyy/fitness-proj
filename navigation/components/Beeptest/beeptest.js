import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const BeepTest = () => {
  const [level, setLevel] = useState(1)
  const [time, setTime] = useState(0)
  const [nextLevelTime, setNextLevelTime] = useState(60)
  const [beepCountdown, setBeepCountdown] = useState(Math.round(calculateBeepTime(8.5)))
  const [running, setRunning] = useState(false)
  const [speed, setSpeed] = useState(8.5)
  const [sound, setSound] = useState(null)

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('./beep.mp3') 
    );
    setSound(sound);
  }

  useEffect(() => {
    loadSound()

    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, []);

  function calculateBeepTime(speed) {
    const speedInMetersPerSec = speed / 3.6
    return Math.round(20 / speedInMetersPerSec)
  }

  async function playBeep(times = 1) {
    for (let i = 0; i < times; i++) {
      await sound.replayAsync()
    }
  }

  useEffect(() => {
    if (running && level === 21) {
      setRunning(false)
      alert('Test completed at level 21')
    }
  }, [level, running])

  useEffect(() => {
    let intervalId

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
        setNextLevelTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 60))

        if (nextLevelTime === 1) {
          const newSpeed = speed + 0.5
          setSpeed(newSpeed)
          setLevel((prevLevel) => prevLevel + 1)
          setBeepCountdown(Math.round(calculateBeepTime(newSpeed)))
          playBeep(2)
        }
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [running, speed, nextLevelTime])

  useEffect(() => {
    let beepIntervalId

    if (running) {
      beepIntervalId = setInterval(() => {
        setBeepCountdown((prevCountdown) => {
          let newCountdown = prevCountdown - 1
          if (newCountdown <= 0) {
            playBeep()
            return Math.round(calculateBeepTime(speed))
          }
          return newCountdown
        })
      }, 1000)
    }

    return () => clearInterval(beepIntervalId)
  }, [running, speed])

  const toggleRunning = () => {
    setRunning((prevRunning) => !prevRunning)
    if (!running) {
      setTime(0)
      setLevel(1)
      setSpeed(8.5)
      setNextLevelTime(60)
      setBeepCountdown(Math.round(calculateBeepTime(8.5)))
      playBeep(2)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEEP TEST</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Level</Text>
          <Text style={styles.infoValue}>{level}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Time</Text>
          <Text style={styles.infoValue}>{new Date(time * 1000).toISOString().substr(14, 5)}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Next Level In</Text>
          <Text style={styles.infoValue}>{nextLevelTime} secs</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Beep Countdown</Text>
          <Text style={styles.infoValue}>{beepCountdown} secs</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Speed</Text>
          <Text style={styles.infoValue}>{speed.toFixed(1)} Kph</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={toggleRunning} disabled={level === 21}>
        <Text style={styles.buttonText}>{running ? 'STOP' : 'START'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 40,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoBox: {
    alignItems: 'center',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})


export default BeepTest;
