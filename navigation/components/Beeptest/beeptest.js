import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

const beepSound = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Failed to load the sound', error);
  }
});

const BeepTest = () => {
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);
  const [nextLevelTime, setNextLevelTime] = useState(60);
  const [beepCountdown, setBeepCountdown] = useState(Math.round(calculateBeepTime(8.5)));
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(8.5);

  function calculateBeepTime(speed) {
    const speedInMetersPerSec = speed / 3.6;
    return Math.round(20 / speedInMetersPerSec);
  }

  function playBeep(times = 1) {
    let count = 0;
    const beepInterval = setInterval(() => {
      beepSound.play((success) => {
        if (!success) {
          console.log('Failed to play the beep');
        }
      });
      count++;
      if (count >= times) clearInterval(beepInterval);
    }, 500); // 500ms interval between beeps
  }

  useEffect(() => {
    if (running && level === 21) {
      setRunning(false);
      alert('Test completed at level 21');
    }
  }, [level, running]);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setNextLevelTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 60));

        if (nextLevelTime === 1) {
          const newSpeed = speed + 0.5;
          setSpeed(newSpeed);
          setLevel((prevLevel) => prevLevel + 1);
          setBeepCountdown(Math.round(calculateBeepTime(newSpeed)));
          playBeep(2); // Play beep twice for level change
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running, speed, nextLevelTime]);

  useEffect(() => {
    let beepIntervalId;

    if (running) {
      beepIntervalId = setInterval(() => {
        setBeepCountdown((prevCountdown) => {
          let newCountdown = prevCountdown - 1;
          if (newCountdown <= 0) {
            playBeep(); // Play a single beep when countdown reaches 0
            return Math.round(calculateBeepTime(speed)); // Reset countdown
          }
          return newCountdown;
        });
      }, 1000);
    }

    return () => clearInterval(beepIntervalId);
  }, [running, speed]);

  const toggleRunning = () => {
    setRunning((prevRunning) => !prevRunning);
    if (!running) {
      setTime(0);
      setLevel(1);
      setSpeed(8.5);
      setNextLevelTime(60);
      setBeepCountdown(Math.round(calculateBeepTime(8.5)));
      playBeep(2); // Play beep twice when starting
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEEP TEST</Text>
      <Text>Level: {level}</Text>
      <Text>Time: {new Date(time * 1000).toISOString().substr(14, 5)}</Text>
      <Text>Next Level In: {nextLevelTime} secs</Text>
      <Text>Beep Countdown: {beepCountdown} secs</Text>
      <Text>Speed: {speed.toFixed(1)} Kph</Text>
      <TouchableOpacity style={styles.button} onPress={toggleRunning} disabled={level === 21}>
        <Text style={styles.buttonText}>{running ? 'STOP' : 'START'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BeepTest;
