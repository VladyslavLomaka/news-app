import { Navigation } from './screens/Navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
  });

  return <Navigation />;
}
