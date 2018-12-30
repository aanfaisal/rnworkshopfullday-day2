import { Resto } from '../../../services/models/restaurant'

type RestoActions =
  | {
      type: 'RESTO/ADD'
      payload: Resto
    }
  | {
      type: 'RESTO/REMOVE'
      payload: Resto
    }
  | {
      type: 'RESTO/CLEAR'
    }

export default RestoActions
