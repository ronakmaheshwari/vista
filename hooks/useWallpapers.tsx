// hooks/useWallpapers.ts
import { useState, useEffect } from 'react';

export interface Wallpaper {
  name: string;
  url: string;
}

export default function useWallpapers(pageSize = 10) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = async () => {
    if (loadingMore) return;
    setLoadingMore(true);

    const newItems = Array.from({ length: pageSize }, (_, i) => {
      const id = wallpapers.length + i + 1;
      return {
        name: `Wallpaper #${id}`,
        url: `https://picsum.photos/800/1200?random=${id}`,
      };
    });

    await new Promise((res) => setTimeout(res, 500)); // simulate loading
    setWallpapers((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setLoadingMore(false);
  };

  useEffect(() => {
    loadMore().then(() => setLoading(false));
  }, []);

  return {
    wallpapers,
    loading,
    loadMore,
    loadingMore,
    canLoadMore: wallpapers.length < 100,
  };
}
