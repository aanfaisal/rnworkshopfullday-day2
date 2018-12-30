import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { RestoItemProps } from './props'

@AppStyle.withThemeClass()
export class RestoItem extends React.Component<RestoItemProps> {
  constructor(props: RestoItemProps) {
    super(props)
  }

  public render() {
    const {
      item,
      theme: { styles }
    } = this.props as Required<RestoItemProps>
    return (
      <View style={styles.restoItemContainer}>
        <Text style={styles.restoItemName}>{item.name}</Text>
        <Text>{item.address}</Text>
      </View>
    )
  }
}
