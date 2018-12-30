import { Reducer } from 'redux'
import RestoActions from './actions'
import RestoState from './state'

const RestoReducer: Reducer<RestoState, RestoActions> = (
  state = {
    favoriteRestoList: []
  },
  action
) => {
  switch (action.type) {
    case 'RESTO/ADD':
      return {
        ...state,
        favoriteRestoList: [...state.favoriteRestoList, action.payload]
      }

    case 'RESTO/REMOVE':
      return {
        ...state,
        favoriteRestoList: state.favoriteRestoList.filter(
          r => r.id !== action.payload.id
        )
      }

    case 'RESTO/CLEAR':
      return { ...state, favoriteRestoList: [] }

    default:
      return state
  }
}

export default RestoReducer
