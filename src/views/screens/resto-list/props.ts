import { Resto } from '../../../services/models/restaurant'
import { AppStyleProps } from '../../styles'

export interface RestoListScreenProps
  extends Partial<AppStyleProps>,
    Partial<RestoListScreenActionProps> {}

export interface RestoListScreenActionProps {
  addFavorite: (payload: Resto) => void
}
