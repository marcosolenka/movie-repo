import { SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import MovieFormScreen from './screens/MovieFormScreen';

export default function App() {

  return (
    <SafeAreaView>
      <ScrollView>
        <MovieFormScreen />
      </ScrollView>
    </SafeAreaView>
  );
}