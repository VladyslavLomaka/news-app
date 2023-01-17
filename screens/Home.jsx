import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Post } from '../components/Post';
import React from 'react';
import axios from 'axios';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://63bc40dbfa38d30d85c1efd0.mockapi.io/news');
      setItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={fetchPosts}
              />
            }
            data={items}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('FullPost', {
                    id: item.id,
                    title: item.title,
                    imageUrl: item.imageUrl,
                    text: item.text,
                  })
                }>
                <Post
                  title={item.title}
                  imageUrl={item.imageUrl}
                  createdAt={item.createdAt}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </>
  );
};
