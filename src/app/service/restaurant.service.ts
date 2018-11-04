import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Restaurant } from '../model/restaurant.model'

import { environment } from '../../environments/environment'

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.BaseUrl + '/restaurants'

  async getRestaurants(): Promise<Restaurant[]> {
    const restaurants = (await this.http.get<any>(this.baseUrl).toPromise()) as Restaurant[]
    return restaurants
  }

  /*async getUserById(id: string): Promise<User> {
    return (await this.http.get<any>(this.baseUrl + '/' + id).toPromise())
      .data as User
  }*/

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return (await this.http.post<any>(this.baseUrl, restaurant).toPromise()) as Restaurant
  }

}
