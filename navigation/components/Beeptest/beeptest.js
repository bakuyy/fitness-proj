import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Sound from 'react-native-sound';

export default function BeepTest() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [timer, setTimer] = useState(null);
  const [levelCountdown, setLevelCountdown] = useState(3); // Countdown for each beep test level

  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  const playSound = () => {
    const sound = new Sound('beep.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  const startTest = () => {
    if (timer) clearInterval(timer);

    let level = 1;
    const interval = setInterval(() => {
      setCurrentLevel(level);
      setLevelCountdown(3); // Reset countdown for each level
      initiateLevelCountdown(level); // Start countdown for the level

      // Check conditions to increase level or stop
      if (level < 20) {  // Example: stop after 20 levels
        level++;
      } else {
        clearInterval(interval); // Stop the interval
      }
    }, 4000); // Each level has a 3-second countdown + 1-second buffer

    setTimer(interval);
  };

  const initiateLevelCountdown = (level) => {
    let countdownValue = 3;
    const levelInterval = setInterval(() => {
      setLevelCountdown(countdownValue);

      if (countdownValue === 0) {
        clearInterval(levelInterval); // Stop the countdown for this level
        playSound(); // Play the beep sound after countdown
      }

      countdownValue--;
    }, 1000);
  };

  const stopTest = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      setCurrentLevel(0);
      setLevelCountdown(3); // Reset countdown value if needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Level: {currentLevel}</Text>
      <Text style={styles.countdownText}>Countdown: {levelCountdown} seconds</Text>
      <Button title="Start Test" onPress={startTest} />
      <Button title="Stop Test" onPress={stopTest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
