import React from 'react'
import { Text, View, Button } from 'react-native'
import { AppStyle } from '../../styles'
import { SettingsScreenProps } from './props'

@AppStyle.withThemeClass()
export class SettingsScreen extends React.Component<SettingsScreenProps> {
  constructor(props: SettingsScreenProps) {
    super(props)
  }

  public render() {
    const { theme } = this.props as Required<SettingsScreenProps>

    return (
      <View style={theme.styles.screenContainer}>
        <Text>Select Theme:</Text>
        <Button
          title="Orange"
          onPress={() => {
            theme.change('default')
          }}
        />
        <Button
          title="Blue"
          onPress={() => {
            theme.change('blue')
          }}
        />
      </View>
    )
  }
}
