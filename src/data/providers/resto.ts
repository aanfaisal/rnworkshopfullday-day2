import { Db } from 'sqlite-ts'
import { Models } from '..'
import { Resto } from '../../services/models/restaurant'

export class RestoProvider {
  db: Db<Models>
  constructor(db: Db<Models>) {
    this.db = db
  }

  async getFavorites(): Promise<Resto[]> {
    return await this.db.tables.FavoriteResto.select()
  }

  async addFavorite(resto: Resto) {
    await this.db.tables.FavoriteResto.insert({
      id: resto.id,
      name: resto.name,
      address: resto.address
    })
  }

  async removeFavorite(id: string) {
    await this.db.tables.FavoriteResto.delete().where(r => r.equals({ id }))
  }

  async clearFavorites() {
    await this.db.tables.FavoriteResto.delete()
  }
}
