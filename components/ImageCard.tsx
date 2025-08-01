// components/ImageCard.tsx
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Wallpaper } from '@/hooks/useWallpapers';

const screenWidth = Dimensions.get('window').width;
const spacing = 16;
const cardWidth = (screenWidth - spacing * 3) / 2;

type Props = {
  wallpaper: Wallpaper;
};

export default function ImageCard({ wallpaper }: Props) {
  const cardHeight = Math.floor(cardWidth * 1.6); // Tall height for wallpaper

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: wallpaper.url }}
        style={[styles.image, { height: cardHeight }]}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={1}>
        {wallpaper.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    marginBottom: spacing,
  },
  image: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
  },
});
