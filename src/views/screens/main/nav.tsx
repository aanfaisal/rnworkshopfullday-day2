import { createMaterialTopTabNavigator } from 'react-navigation'
import { FavoriteRestoListScreen } from '../favorite-resto-list'
import { RestoListScreen } from '../resto-list'
import { SettingsScreen } from '../settings'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    RestoList: {
      screen: RestoListScreen,
      navigationOptions: {
        title: 'Resto List'
      }
    },
    FavoriteRestoList: {
      screen: FavoriteRestoListScreen,
      navigationOptions: {
        title: 'Favorite Resto List'
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings'
      }
    }
  },
  {
    initialRouteName: 'RestoList'
  }
)
