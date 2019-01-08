import { Db } from 'sqlite-ts'
import { Models } from '..'

export class SettingsProvider {
  db: Db<Models>
  constructor(db: Db<Models>) {
    this.db = db
  }

  async setTheme(theme: string): Promise<void> {
    await this.db.tables.Settings.upsert({
      id: 1,
      theme
    })
  }

  async getTheme(): Promise<string> {
    const settings = await this.db.tables.Settings.single()
    if (settings) {
      return settings.theme
    }

    return 'default'
  }
}
