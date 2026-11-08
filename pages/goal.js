import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const GOALS = [
  { id: '5', title: '5 минут', subtitle: 'Спокойный темп' },
  { id: '10', title: '10 минут', subtitle: 'Оптимально' },
  { id: '15', title: '15 минут', subtitle: 'Быстрый прогресс' },
  { id: '20', title: '20 минут', subtitle: 'Интенсив' },
];

export default function GoalScreen({ onNext, onClose }) {
  const [selectedGoal, setSelectedGoal] = useState('10');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6FA" />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '33%' }]} />
          </View>

          <Text style={styles.stepText}>1/3</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Сколько времени {'\n'}в день?</Text>
          <Text style={styles.subtitle}>
            Выберите цель, её можно изменить позже.
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {GOALS.map((item) => {
            const isSelected = selectedGoal === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => setSelectedGoal(item.id)}
                style={[
                  styles.optionCard,
                  isSelected && styles.optionCardSelected,
                ]}
              >
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity 
          style={styles.primaryButton} 
          activeOpacity={0.8}
          onPress={onNext}
        >
          <Text style={styles.primaryButtonText}>Продолжить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  closeButton: {
    padding: 4,
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: '600',
    color: '#14141F',
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#E8E9F1',
    borderRadius: 4,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B3BF0',
    borderRadius: 4,
  },
  stepText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5C6072',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#14141F',
    lineHeight: 38,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#5C6072',
  },
  optionsContainer: {
    gap: 12,
    flex: 1,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    borderColor: '#3B3BF0',
    backgroundColor: '#EEF0FF',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14141F',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#5C6072',
  },
  primaryButton: {
    backgroundColor: '#3B3BF0',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
