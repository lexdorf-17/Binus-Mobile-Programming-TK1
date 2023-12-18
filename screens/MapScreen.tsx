import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapRef = React.useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        // Optionally, you can animate to the user's current location:
        mapRef.current?.animateToRegion(region, 1000);
      },
      error => console.error(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const handleZoomIn = () => {
    // You can adjust the zoom level by changing the delta values.
    const zoomedRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };
    setRegion(zoomedRegion);
    mapRef.current?.animateToRegion(zoomedRegion, 500);
  };

  const handleZoomOut = () => {
    // You can adjust the zoom level by changing the delta values.
    const zoomedOutRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };
    setRegion(zoomedOutRegion);
    mapRef.current?.animateToRegion(zoomedOutRegion, 500);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} ref={mapRef}>
        <Marker
          coordinate={region}
          title="Your Location"
          description="This is your current location"
        />
      </MapView>
      <View style={styles.zoomControls}>
        <TouchableOpacity onPress={handleZoomIn} style={styles.zoomButton}>
          <Text>Zoom In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut} style={styles.zoomButton}>
          <Text>Zoom Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  zoomButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 4,
  },
});

export default MapScreen;
