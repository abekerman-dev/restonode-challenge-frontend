import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Restaurant } from '../model/restaurant.model'
import { Meal } from '../model/meal.model'

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.BaseUrl + '/restaurants'

  async getRestaurants(): Promise<Restaurant[]> {
    const restaurants = (await this.http.get<any>(this.baseUrl).toPromise()) as Restaurant[]
    return restaurants
  }

  async getRestaurantById(restaurantId: number): Promise<Restaurant> {
    const restaurant = (await this.http.get<any>(this.baseUrl + '/' + restaurantId).toPromise()) as Restaurant
    return restaurant
  }

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return (await this.http.post<any>(this.baseUrl, restaurant).toPromise()) as Restaurant
  }

  async addMealToRestaurant(restaurantId: number, meal: Meal): Promise<Meal> {
    return (await this.http.post<any>(this.baseUrl + '/' + restaurantId + '/meal', meal).toPromise()) as Meal
  }

}
