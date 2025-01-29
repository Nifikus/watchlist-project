import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from '../modules/watchlist/movies-list';
import BookList from '../modules/watchlist/books-list';
import SeriesList from '../modules/watchlist/series-list';
import AnimeList from '../modules/watchlist/anime-list';
import AddScreen from '../modules/add-title-screen';

const WatchlistTabsNavigator = createBottomTabNavigator({
    backBehavior: 'firstRoute',
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Book: BookList,
      Movies: MovieList,
      Series: SeriesList,
      Anime: AnimeList,
    },
  });

  const RootStack = createNativeStackNavigator({
    screens: {
        WatchList: {
          screen: WatchlistTabsNavigator,
        },
        AddTitle: AddScreen,
    }
});

export default createStaticNavigation(RootStack);
