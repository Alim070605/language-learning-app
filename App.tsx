import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WelcomeScreen from './pages/welcome';
import GoalScreen from './pages/goal';
import LevelScreen from './pages/level';
import HomeScreen from './pages/home';

type Screen = 'welcome' | 'goal' | 'level' | 'home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'goal':
        return (
          <GoalScreen
            onNext={() => setCurrentScreen('level')}
            onClose={() => setCurrentScreen('welcome')}
          />
        );

      case 'level':
        return (
          <LevelScreen
            onClose={() => setCurrentScreen('goal')}
            onContinue={(levelId: string) => {
              setCurrentScreen('home');
            }}
          />
        );

      case 'home':
        return <HomeScreen />;

      default:
        return <WelcomeScreen onStart={() => setCurrentScreen('goal')} />;
    }
  };

  return <SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});