import { AppLoading, Asset } from 'expo'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AppData } from './data'
import { AppStore } from './store'
import { MainScreen } from './views/screens/main'
import { AppStyle } from './views/styles'

interface State {
  ready: boolean
  error?: string
}

/**
 * Application root component.
 */
export default class App extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      ready: false
    }

    this.prepare = this.prepare.bind(this)
  }

  render() {
    const { ready, error } = this.state

    if (!ready) {
      return (
        <AppLoading
          startAsync={this.prepare}
          onFinish={() => {
            this.setState({ ready: true })
          }}
          onError={err => {
            this.setState({ ready: true, error: err.message })
          }}
        />
      )
    }

    if (error) {
      return this.renderError(error)
    }

    return this.renderMain()
  }

  /**
   * Render main view of application.
   * Do not rename this function -- anoa will look this function
   * to wrap your main view with neccessary provider as if needed.
   */
  renderMain() {
    return (
      <AppStyle.Provider
        getDefault={async () => {
          return 'blue'
        }}
      >
        <AppStore.Provider>
          <MainScreen />
        </AppStore.Provider>
      </AppStyle.Provider>
    )
  }

  /**
   * Show this view when preparation were failed.
   * @param error error message
   */
  renderError(error: string) {
    // TODO: do nicer error handler
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          padding: 60
        }}
      >
        <Text>Oops!</Text>
        <Text style={{ color: 'white' }}>{error}</Text>
      </View>
    )
  }

  /**
   * Prepare application before showing main view.
   * Do not rename this function -- anoa will look this function
   * to add necessary calls as if needed.
   */
  async prepare(): Promise<void> {
    await Asset.loadAsync(require('../assets/logo.png'))
    await AppData.init()
    await AppStore.init({
      initialState: {
        resto: {
          favoriteRestoList: await AppData.RestoProvider.getFavorites()
        }
      }
    })
  }
}
