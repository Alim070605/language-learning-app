import React, { useState } from 'react';
import WelcomeScreen from './pages/welcome';
import GoalScreen from './pages/goal';
import LevelScreen from './pages/level';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  if (currentScreen === 'goal') {
    return (
      <GoalScreen
        onNext={() => setCurrentScreen('level')}
        onClose={() => setCurrentScreen('welcome')}
      />
    );
  }

  if (currentScreen === 'level') {
    return (
      <LevelScreen
        onClose={() => setCurrentScreen('goal')}
      />
    );
  }

  return <WelcomeScreen onStart={() => setCurrentScreen('goal')} />;
}
