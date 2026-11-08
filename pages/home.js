import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6FB" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greetingTitle}>Привет, Анна</Text>
          <View style={styles.streakBadge}>
            <Text style={styles.streakText}>7 дней подряд</Text>
          </View>
        </View>

        <View style={styles.dailyGoalCard}>
          <Text style={styles.cardTitle}>Цель дня</Text>
          <View style={styles.progressRow}>
            <View style={styles.progressTrack}>
              <View style={styles.progressBar} />
            </View>
            <Text style={styles.progressText}>6 из 10 мин</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Раздел 2 · В кафе</Text>

        <View style={styles.lessonCardRow}>
          <Text style={styles.cardTitle}>Заказ напитка</Text>
          <View style={styles.completedBadge}>
            <Text style={styles.completedBadgeText}>Пройден</Text>
          </View>
        </View>

        <View style={[styles.lessonCardColumn, styles.activeLessonCard]}>
          <Text style={styles.cardTitle}>Меню и цены</Text>
          <Text style={styles.subtext}>Осталось 3 упражнения</Text>

          <TouchableOpacity style={styles.continueButton} activeOpacity={0.8}>
            <Text style={styles.continueButtonText}>Продолжить</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lessonCardColumn}>
          <Text style={styles.cardTitle}>Попросить счёт</Text>
          <Text style={styles.subtext}>Откроется после предыдущего урока</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navText, styles.navTextActive]}>Учёба</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Слова</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Прогресс</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  greetingTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },
  streakBadge: {
    backgroundColor: '#FDE68A',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  streakText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E293B',
  },
  dailyGoalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    marginRight: 16,
    overflow: 'hidden',
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#3B3BF0',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 12,
  },
  lessonCardRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonCardColumn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
  },
  activeLessonCard: {
    borderWidth: 2,
    borderColor: '#3B3BF0',
  },
  completedBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  completedBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#15803D',
  },
  subtext: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  continueButton: {
    backgroundColor: '#3B3BF0',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#F4F6FB',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  navTextActive: {
    color: '#3B3BF0',
    fontWeight: '700',
  },
});