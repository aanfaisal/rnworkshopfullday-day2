import React from 'react'
import { Button, FlatList, View } from 'react-native'
import { AppStore } from '../../../store'
import {
  clearFavoritesAction,
  removeFavoriteAction
} from '../../../store/actions/resto'
import { RestoItem } from '../../components/resto-item'
import { AppStyle } from '../../styles'
import {
  FavoriteRestoListScreenActionProps,
  FavoriteRestoListScreenProps,
  FavoriteRestoListScreenStateProps
} from './props'

@AppStyle.withThemeClass()
@AppStore.withStoreClass<
  FavoriteRestoListScreenStateProps,
  FavoriteRestoListScreenActionProps
>(
  state => ({ restoFavoriteRestoList: state.resto.favoriteRestoList }),
  dispatch => ({
    removeFavorite: payload => dispatch(removeFavoriteAction(payload)),
    clearFavorites: () => dispatch(clearFavoritesAction())
  })
)
export class FavoriteRestoListScreen extends React.Component<
  FavoriteRestoListScreenProps
> {
  constructor(props: FavoriteRestoListScreenProps) {
    super(props)
  }

  public render() {
    const {
      theme: { styles },
      restoFavoriteRestoList,
      removeFavorite,
      clearFavorites
    } = this.props as Required<FavoriteRestoListScreenProps>
    return (
      <View style={styles.screenContainer}>
        <FlatList
          data={restoFavoriteRestoList}
          keyExtractor={r => r.id}
          renderItem={val => (
            <RestoItem
              item={val.item}
              onPress={() => {
                removeFavorite(val.item)
              }}
            />
          )}
        />
        <Button title="Clear" onPress={clearFavorites} />
      </View>
    )
  }
}
