import { SQLite } from 'expo'
import { Db, ExpoSQLiteDriver } from 'sqlite-ts'
import * as entities from './models'
import * as providers from './providers'

type TProviders = typeof providers
export type Models = typeof entities
export type Providers = { [K in keyof TProviders]: InstanceType<TProviders[K]> }

// @ts-ignore
export const AppData: Providers & { init: () => Promise<void> } = {
  init: async () => {
    const expoDb = SQLite.openDatabase('my-resto-db-1')

    const db = await Db.init({
      driver: new ExpoSQLiteDriver(expoDb),
      entities,
      // createTables: true
    })

    for (const k of Object.keys(providers)) {
      // @ts-ignore
      AppData[k] = new providers[k](db)
    }
  }
}
