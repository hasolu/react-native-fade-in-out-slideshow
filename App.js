import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Animated } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Slideshow = (props) => {
  const [animate] = useState(new Animated.Value(1));
  const [slideCount, setCount] = useState(0);

  const fadeIn = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animate, {
      toValue: 0,
      duration: 1000,
    }).start();
  };

  useEffect(() => {
    setTimeout(() => {
      if (slideCount != props.data.length - 1) {
        fadeOut();
        setTimeout(() => {
          setCount(slideCount + 1);
          fadeIn();
        }, props.fadeDuration + 100 || 1100);
      } else {
        fadeOut();
        setTimeout(() => {
          setCount(0);
          fadeIn();
        }, props.fadeDuration || 1000);
      }
    }, props.duration || 5000);
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: animate }}>
        <Image
          style={props.style || { width: windowWidth, height: 400 }}
          source={{ uri: props.data[slideCount].image }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
  },
  photo: {},
  text: {
    fontSize: 35,
    textAlign: "center",
  },
});

export default Slideshow;
