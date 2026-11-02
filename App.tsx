import React, { useState } from 'react';
import WelcomeScreen from './pages/welcome';
import GoalScreen from './pages/goal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  if (currentScreen === 'goal') {
    return <GoalScreen onClose={() => setCurrentScreen('welcome')} />;
  }

  return <WelcomeScreen onStart={() => setCurrentScreen('goal')} />;
}