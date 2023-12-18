import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headlineText}>Breaking News</Text>
      </View>
      <View style={styles.newsContainer}>
        <Image
          source={{
            uri: 'https://topindoku.co.id/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Flarge_Kerjasama_Topindoku_and_BI_1_2936cb7fac.jpg&w=1920&q=75',
          }} // Replace with your image URL
          style={styles.newsImage}
        />
        <Text style={styles.newsTitle}>News Title 1</Text>
        <Text style={styles.newsContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          libero id libero ullamcorper.
        </Text>
      </View>
      <View style={styles.newsContainer}>
        <Image
          source={{uri: 'https://example.com/news_image_2.jpg'}} // Replace with your image URL
          style={styles.newsImage}
        />
        <Text style={styles.newsTitle}>News Title 2</Text>
        <Text style={styles.newsContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          libero id libero ullamcorper.
        </Text>
      </View>
      {/* Add more news items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headlineContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headlineText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  newsContainer: {
    marginBottom: 16,
  },
  newsImage: {
    width: '100%', // Adjust the width as needed
    height: 200, // Adjust the height as needed
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsContent: {
    fontSize: 16,
  },
});

export default HomeScreen;
