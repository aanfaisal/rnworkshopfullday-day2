import React from 'react'
import { Text, View } from 'react-native'
import { RestoListScreenProps } from './props'
import { RestoListScreenState } from './state'

export class RestoListScreen extends React.Component<
  RestoListScreenProps,
  RestoListScreenState
> {
  constructor(props: RestoListScreenProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <View>
        <Text>RestoListScreen</Text>
      </View>
    )
  }
}
