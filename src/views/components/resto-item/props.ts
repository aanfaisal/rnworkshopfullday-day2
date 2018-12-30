import { Resto } from '../../../services/models/restaurant'
import { AppStyleProps } from '../../styles'

export interface RestoItemProps extends Partial<AppStyleProps> {
  item: Resto
}
