import {useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {ItemProps} from '../types';

const Banner = ({item}: ItemProps) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % item.data.length;

      // Scroll to the next banner
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});

      // Update the current index
      setCurrentIndex(nextIndex);
    }, 3000); // Change the interval duration (in milliseconds) as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <View>
      {/* Banner FlatList */}
      <FlatList
        ref={flatListRef}
        horizontal
        data={item.data}
        keyExtractor={banner => banner.id}
        renderItem={({item: banner}) => (
          <Image source={{uri: banner.image}} style={styles.banner} />
        )}
        pagingEnabled // Enable paging for smooth scrolling
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {width: 300, height: 150, marginRight: 10},
});

export default Banner;
