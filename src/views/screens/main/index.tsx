import React from 'react'
import { StatusBar, View } from 'react-native'
import { MainScreenNav } from './nav'
import { MainScreenProps } from './props'

export class MainScreen extends React.Component<MainScreenProps> {
  constructor(props: MainScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <MainScreenNav />
      </View>
    )
  }
}
