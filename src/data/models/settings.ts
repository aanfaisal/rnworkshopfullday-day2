import { Column, Primary } from 'sqlite-ts'

export class Settings {
  @Primary()
  id?: number = 0

  @Column('NVARCHAR')
  theme: string = ''
}
