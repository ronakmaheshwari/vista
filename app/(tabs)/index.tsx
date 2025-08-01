// app/(tabs)/index.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useWallpapers, { Wallpaper } from '@/hooks/useWallpapers';

const screenWidth = Dimensions.get('window').width;
const spacing = 16;

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ExplorePage() {
  const isDark = useColorScheme() === 'dark';
  const { wallpapers, loading, loadMore, loadingMore, canLoadMore } =
    useWallpapers();

  const [shuffled, setShuffled] = useState<Wallpaper[]>([]);

  useEffect(() => {
    if (wallpapers.length > 0) {
      setShuffled(shuffleArray(wallpapers));
    }
  }, [wallpapers]);

  const handleShuffle = () => {
    setShuffled(shuffleArray(wallpapers));
  };

  const renderItem = ({ item }: { item: Wallpaper }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.url }} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const ListFooter = () =>
    loadingMore ? <ActivityIndicator style={{ margin: 20 }} /> : null;

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, isDark && styles.safeDark]}>
        <ActivityIndicator size="large" style={{ marginTop: 60 }} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, isDark && styles.safeDark]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <FlatList
        data={shuffled}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={[styles.content, isDark && styles.contentDark]}
        ListHeaderComponent={
          <>
            <View style={styles.hero}>
              <Image
                source={{
                  uri: shuffled[0]?.url ??
                    'https://via.placeholder.com/800x1200.png?text=No+Image',
                }}
                style={styles.heroImg}
              />
            </View>
            <TouchableOpacity style={styles.shuffleBtn} onPress={handleShuffle}>
              <Text style={styles.shuffleText}>🔀 Shuffle Wallpapers</Text>
            </TouchableOpacity>
          </>
        }
        onEndReached={() => canLoadMore && loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooter}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  safeDark: { backgroundColor: '#000' },
  content: { paddingHorizontal: spacing, paddingBottom: 40 },
  contentDark: { backgroundColor: '#121212' },
  column: { justifyContent: 'space-between', marginBottom: spacing },
  hero: {
    overflow: 'hidden',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: spacing,
  },
  heroImg: { width: screenWidth, height: 420 },
  shuffleBtn: {
    marginHorizontal: spacing,
    marginBottom: spacing,
    paddingVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  shuffleText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    width: (screenWidth - spacing * 3) / 2,
    height: 260,
    marginBottom: spacing,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: { width: '100%', height: '100%' },
  name: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 12,
  },
});
