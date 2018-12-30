import React from 'react'
import {
  ActivityIndicator,
  Button,
  FlatList,
  TextInput,
  View
} from 'react-native'
import { Api } from '../../../services/api'
import { RestoItem } from '../../components/resto-item'
import { AppStyle } from '../../styles'
import { RestoListScreenProps } from './props'
import { RestoListScreenState } from './state'

@AppStyle.withThemeClass()
export class RestoListScreen extends React.Component<
  RestoListScreenProps,
  RestoListScreenState
> {
  constructor(props: RestoListScreenProps) {
    super(props)
    this.state = {
      restaurants: [],
      query: '',
      loading: false
    }
  }

  loadData() {
    this.setState({ loading: true }, async () => {
      const restaurants = await Api.loadRestaurants(this.state.query)
      this.setState({ restaurants, loading: false, query: '' })
    })
  }

  public render() {
    const { theme } = this.props as Required<RestoListScreenProps>
    const { query } = this.state

    return (
      <View style={theme.styles.screenContainer}>
        <TextInput
          style={theme.styles.textInput}
          value={query}
          onChangeText={val => this.setState({ query: val })}
        />
        <Button
          title="Cari"
          onPress={() => {
            this.loadData()
          }}
        />

        {this.renderList()}
      </View>
    )
  }

  renderList() {
    const { restaurants, loading } = this.state
    const { theme } = this.props as Required<RestoListScreenProps>

    if (loading) {
      return <ActivityIndicator color={theme.vars.colors.text} />
    }

    return (
      <FlatList
        data={restaurants}
        keyExtractor={r => r.id}
        renderItem={val => <RestoItem item={val.item} />}
      />
    )

    // return (
    //   <View>
    //     {restaurants.map(r => (
    //       <RestoItem key={r.id} item={r} />
    //     ))}
    //   </View>
    // )
  }
}
