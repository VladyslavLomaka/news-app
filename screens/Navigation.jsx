import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPost } from './FullPost';
import { HomeScreen } from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name='FullPost'
          component={FullPost}
          options={{ title: 'New Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
