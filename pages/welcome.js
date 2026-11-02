import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen({ onStart }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6FA" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>Слово</Text>
        </View>

        <View style={styles.cardWrapper}>
          <View style={styles.heroCard}>
            <Text style={styles.wordText}>hello</Text>
            <Text style={styles.translationText}>привет</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Английский по{\n}10 минут в день
          </Text>
          <Text style={styles.subtitle}>
            Короткие уроки, карточки и повторение слов в удобное время.
          </Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.primaryButton} 
            activeOpacity={0.8}
            onPress={onStart}
          >
            <Text style={styles.primaryButtonText}>Начать</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <Text style={styles.secondaryButtonText}>У меня уже есть аккаунт</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    marginTop: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#3B3BF0',
  },
  cardWrapper: {
    alignItems: 'center',
    marginVertical: 12,
  },
  heroCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 36,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-4deg' }],
    shadowColor: '#14141F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 3,
  },
  wordText: {
    fontSize: 40,
    fontWeight: '800',
    color: '#14141F',
    marginBottom: 6,
  },
  translationText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#5C6072',
  },
  textContainer: {
    marginVertical: 8,
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
    fontWeight: '400',
    color: '#5C6072',
    lineHeight: 22,
  },
  actionsContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#3B3BF0',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D5D8E4',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#14141F',
    fontSize: 16,
    fontWeight: '600',
  },
});
