import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type DownloadPicProps = {
  onClose: () => void;
};

const DownloadPic: React.FC<DownloadPicProps> = ({ onClose }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const screenHeight = Dimensions.get('window').height;

  const snapPoints = useMemo(() => [screenHeight * 0.99], [screenHeight]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      bottomSheetRef.current?.expand();
    }, 50); // Give layout a moment to complete

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <BottomSheet
        onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        detached
        style={styles.sheetContainer}
        onChange={handleSheetChanges}
        enablePanDownToClose
        index={0} // start expanded
        handleIndicatorStyle={{height:0}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={{ fontSize: 18 }}>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    marginTop: 20, // Important with detached to avoid overlap
  },
  contentContainer: {
    flex: 1, // This ensures the content fills the full snap point height
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default DownloadPic;
