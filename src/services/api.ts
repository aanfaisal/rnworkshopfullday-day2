import axios from 'axios'
import { Resto } from './models/restaurant'

export class Api {
  static async loadRestaurants(): Promise<Resto[]> {
    return new Promise<Resto[]>((resolve, reject) => {
      axios
        .get('https://developers.zomato.com/api/v2.1/search?count=5', {
          headers: {
            'user-key': '94630c5ae766254997bd3788d3c3bb68'
          }
        })
        .then(response => {
          const restaurants = response.data.restaurants.map(
            ({ restaurant }: any) => {
              return {
                id: restaurant.id,
                name: restaurant.name,
                address: restaurant.location.address
              }
            }
          )
          resolve(restaurants)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
