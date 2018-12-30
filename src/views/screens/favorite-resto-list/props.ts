import { AppStyleProps } from '../../styles'

export interface FavoriteRestoListScreenProps
  extends Partial<AppStyleProps>,
    Partial<FavoriteRestoListScreenStateProps>,
    Partial<FavoriteRestoListScreenActionProps> {}

export interface FavoriteRestoListScreenStateProps {
  restoFavoriteRestoList: Resto[]
}

export interface FavoriteRestoListScreenActionProps {
  removeFavorite: (payload: Resto) => void
  clearFavorites: () => void
}
