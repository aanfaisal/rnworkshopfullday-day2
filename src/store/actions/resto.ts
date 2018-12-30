import { AppThunkAction } from '..'
import { AppData } from '../../data'
import { Resto } from '../../services/models/restaurant'

export function addFavoriteAction(payload: Resto): AppThunkAction {
  return async (dispatch, getState) => {
    const { favoriteRestoList } = getState().resto

    if (favoriteRestoList.find(r => r.id === payload.id)) {
      return
    }

    await AppData.RestoProvider.addFavorite(payload)
    dispatch({ type: 'RESTO/ADD', payload })
  }
}

export function removeFavoriteAction(payload: Resto): AppThunkAction {
  return async dispatch => {
    await AppData.RestoProvider.removeFavorite(payload.id)
    dispatch({ type: 'RESTO/REMOVE', payload })
  }
}

export function clearFavoritesAction(): AppThunkAction {
  return async dispatch => {
    await AppData.RestoProvider.clearFavorites()
    dispatch({ type: 'RESTO/CLEAR' })
  }
}
