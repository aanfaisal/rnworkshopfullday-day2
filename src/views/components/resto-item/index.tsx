import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
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
      theme: { styles },
      onPress,
    } = this.props as Required<RestoItemProps>
    return (
      <TouchableOpacity onPress={onPress} style={styles.restoItemContainer}>
        <Text style={styles.restoItemName}>{item.name}</Text>
        <Text>{item.address}</Text>
      </TouchableOpacity>
    )
  }
}
