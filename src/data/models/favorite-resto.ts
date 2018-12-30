import { Column, Primary } from 'sqlite-ts'
import { Resto } from '../../services/models/restaurant'

export class FavoriteResto implements Resto {
  @Primary('NVARCHAR')
  id: string = ''

  @Column('NVARCHAR')
  name: string = ''

  @Column('NVARCHAR')
  address: string = ''
}
