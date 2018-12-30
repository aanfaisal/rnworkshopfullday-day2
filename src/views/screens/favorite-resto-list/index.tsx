import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { FavoriteRestoListScreenProps } from './props'

@AppStyle.withThemeClass()
export class FavoriteRestoListScreen extends React.Component<
  FavoriteRestoListScreenProps
> {
  constructor(props: FavoriteRestoListScreenProps) {
    super(props)
  }

  public render() {
    const { theme } = this.props as Required<FavoriteRestoListScreenProps>
    return (
      <View style={theme.styles.screenContainer}>
        <Text>FavoriteRestoListScreen</Text>
      </View>
    )
  }
}
