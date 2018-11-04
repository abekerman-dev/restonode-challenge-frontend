import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Meal } from '../model/meal.model'

import { environment } from '../../environments/environment'

@Injectable()
export class MealService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.BaseUrl + '/meals'

  async getMealsByRestaurantId(restaurantId: number): Promise<Meal[]> {
    const meals = (await this.http.get<any>(this.baseUrl + '?restaurantId=' + restaurantId).toPromise()) as Meal[]
    return meals
  }

  async createMeal(meal: Meal): Promise<Meal> {
    return (await this.http.post<any>(this.baseUrl, meal).toPromise()) as Meal
  }

}
