import React from 'react'
import { Text, View } from 'react-native'
import { FavoriteRestoListScreenProps } from './props'

export class FavoriteRestoListScreen extends React.Component<
  FavoriteRestoListScreenProps
> {
  constructor(props: FavoriteRestoListScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View>
        <Text>FavoriteRestoListScreen</Text>
      </View>
    )
  }
}
