import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Modal,
  Easing,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  type: 'accepted' | 'declined';
  callerName: string;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClose,
  type,
  callerName,
  message,
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const iconRotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      // Reset animations
      scaleAnim.setValue(0);
      fadeAnim.setValue(0);
      slideAnim.setValue(50);
      iconRotateAnim.setValue(0);
      pulseAnim.setValue(1);

      // Start entrance animation
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.out(Easing.back(1.2)),
        }),
      ]).start();

      // Icon rotation animation
      Animated.timing(iconRotateAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }).start();

      // Pulse animation for icon
      const pulseAnimation = () => {
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.sin),
          }),
        ]).start(() => {
          if (visible) {
            pulseAnimation();
          }
        });
      };
      
      setTimeout(pulseAnimation, 400);

      // Auto close after 3 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  const getModalContent = () => {
    const isAccepted = type === 'accepted';
    
    return {
      title: isAccepted ? 'Call Accepted!' : 'Call Declined',
      subtitle: isAccepted 
        ? `Connecting call with ${callerName}...` 
        : `Call from ${callerName} was declined`,
      icon: isAccepted ? 'phone-alt' : 'phone-slash',
      iconColor: isAccepted ? '#10b981' : '#ef4444',
      backgroundColor: isAccepted ? '#10b981' : '#ef4444',
      gradientColors: isAccepted 
        ? ['#34d399', '#10b981', '#059669'] 
        : ['#f87171', '#ef4444', '#dc2626'],
    };
  };

  const modalContent = getModalContent();
  
  const iconRotation = iconRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={handleClose}
    >
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <BlurView intensity={20} style={StyleSheet.absoluteFill}>
          <TouchableOpacity 
            style={styles.overlayTouchable} 
            activeOpacity={1}
            onPress={handleClose}
          >
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform: [
                    { scale: scaleAnim },
                    { translateY: slideAnim },
                  ],
                },
              ]}
            >
              {/* Gradient Background */}
              <View style={[styles.gradientBackground, { backgroundColor: modalContent.backgroundColor }]}>
                {/* Success Icon with Pulse Animation */}
                <Animated.View
                  style={[
                    styles.iconContainer,
                    {
                      transform: [
                        { rotate: iconRotation },
                        { scale: pulseAnim },
                      ],
                    },
                  ]}
                >
                  <View style={styles.iconBackground}>
                    <FontAwesome5 
                      name={modalContent.icon} 
                      size={32} 
                      color="white" 
                    />
                  </View>
                </Animated.View>

                {/* Content */}
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>{modalContent.title}</Text>
                  <Text style={styles.subtitle}>{modalContent.subtitle}</Text>
                  
                  {message && (
                    <Text style={styles.message}>{message}</Text>
                  )}
                </View>

                {/* Loading Dots Animation (for accepted calls) */}
                {type === 'accepted' && (
                  <View style={styles.loadingContainer}>
                    <View style={styles.loadingDots}>
                      <LoadingDot delay={0} />
                      <LoadingDot delay={200} />
                      <LoadingDot delay={400} />
                    </View>
                  </View>
                )}

                {/* Close Button */}
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={handleClose}
                  activeOpacity={0.7}
                >
                  <FontAwesome5 name="times" size={16} color="rgba(255,255,255,0.8)" />
                </TouchableOpacity>
              </View>

              {/* Decorative Elements */}
              <View style={[styles.decorativeCircle, styles.circle1, { backgroundColor: modalContent.iconColor }]} />
              <View style={[styles.decorativeCircle, styles.circle2, { backgroundColor: modalContent.iconColor }]} />
              <View style={[styles.decorativeCircle, styles.circle3, { backgroundColor: modalContent.iconColor }]} />
            </Animated.View>
          </TouchableOpacity>
        </BlurView>
      </Animated.View>
    </Modal>
  );
};

// Loading Dot Component for accepted calls
const LoadingDot: React.FC<{ delay: number }> = ({ delay }) => {
  const dotAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(dotAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnim, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };

    const timer = setTimeout(() => {
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={[
        styles.loadingDot,
        {
          opacity: dotAnim,
          transform: [{ scale: dotAnim }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    width: width * 0.85,
    maxWidth: 320,
    position: 'relative',
  },
  gradientBackground: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 20,
  },
  iconContainer: {
    marginBottom: 24,
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 20,
  },
  loadingContainer: {
    marginTop: 8,
  },
  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.1,
  },
  circle1: {
    width: 100,
    height: 100,
    top: -20,
    left: -30,
  },
  circle2: {
    width: 60,
    height: 60,
    bottom: -10,
    right: -20,
  },
  circle3: {
    width: 40,
    height: 40,
    top: 50,
    right: -10,
  },
});

export default SuccessModal;