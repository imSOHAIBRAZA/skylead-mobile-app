import React, { useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';

const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Scale animation
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();

    // Continuous rotation animation for the outer ring
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();

    // Pulse animation for the loading text
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.themedContainer}>
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Outer rotating ring */}
          <Animated.View
            style={[
              styles.outerRing,
              {
                transform: [{ rotate }],
              },
            ]}
          />

          {/* Inner gradient circle */}
          <View style={styles.innerCircle}>
            <View style={styles.gradientCircle}>
              {/* Loading spinner */}
              <ActivityIndicator 
                size="large" 
                color="#4ade80" 
                style={styles.spinner}
              />
            </View>
          </View>

          {/* Loading text with pulse animation */}
          <Animated.View
            style={[
              styles.textContainer,
              {
                transform: [{ scale: pulseAnim }],
              },
            ]}
          >
            <Text style={styles.loadingText}>Loading</Text>
            <View style={styles.dotsContainer}>
              <Animated.Text style={[styles.dot, { opacity: pulseAnim }]}>.</Animated.Text>
              <Animated.Text style={[styles.dot, { opacity: pulseAnim }]}>.</Animated.Text>
              <Animated.Text style={[styles.dot, { opacity: pulseAnim }]}>.</Animated.Text>
            </View>
          </Animated.View>

          {/* Subtitle */}
          <Text style={styles.subtitle}>Please wait while we load your content</Text>

          {/* Decorative elements */}
          <View style={styles.decorativeElements}>
            <View style={[styles.floatingDot, styles.dot1]} />
            <View style={[styles.floatingDot, styles.dot2]} />
            <View style={[styles.floatingDot, styles.dot3]} />
            <View style={[styles.floatingDot, styles.dot4]} />
          </View>
        </Animated.View>

        {/* Background pattern */}
        <View style={styles.backgroundPattern}>
          <View style={[styles.patternCircle, styles.circle1]} />
          <View style={[styles.patternCircle, styles.circle2]} />
          <View style={[styles.patternCircle, styles.circle3]} />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themedContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  outerRing: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'transparent',
    borderTopColor: '#4ade80',
    borderRightColor: '#4ade80',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  gradientCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4ade80',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  spinner: {
    transform: [{ scale: 1.2 }],
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4ade80',
    letterSpacing: 1,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  dot: {
    fontSize: 24,
    color: '#4ade80',
    fontWeight: 'bold',
    marginHorizontal: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.8,
  },
  decorativeElements: {
    position: 'absolute',
    width: width,
    height: height,
  },
  floatingDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4ade80',
    opacity: 0.3,
  },
  dot1: {
    top: '20%',
    left: '15%',
    backgroundColor: '#4ade80',
  },
  dot2: {
    top: '30%',
    right: '20%',
    backgroundColor: '#34C759',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  dot3: {
    bottom: '25%',
    left: '25%',
    backgroundColor: '#FF9500',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dot4: {
    bottom: '35%',
    right: '15%',
    backgroundColor: '#FF3B30',
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  patternCircle: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.05,
  },
  circle1: {
    width: 300,
    height: 300,
    backgroundColor: '#4ade80',
    top: -150,
    left: -150,
  },
  circle2: {
    width: 200,
    height: 200,
    backgroundColor: '#34C759',
    bottom: -100,
    right: -100,
  },
  circle3: {
    width: 250,
    height: 250,
    backgroundColor: '#FF9500',
    top: '40%',
    right: -125,
  },
});

export default LoadingScreen;