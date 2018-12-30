import { AppThunkAction } from '..'
import { Resto } from '../../services/models/restaurant'

export function addFavoriteAction(payload: Resto): AppThunkAction {
  return (dispatch, getState) => {
    const { favoriteRestoList } = getState().resto

    if (favoriteRestoList.find(r => r.id === payload.id)) {
      return
    }

    dispatch({ type: 'RESTO/ADD', payload })
  }
}

export function removeFavoriteAction(payload: Resto): AppThunkAction {
  return dispatch => {
    dispatch({ type: 'RESTO/REMOVE', payload })
  }
}

export function clearFavoritesAction(): AppThunkAction {
  return dispatch => {
    dispatch({ type: 'RESTO/CLEAR' })
  }
}
