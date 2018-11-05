import { Component, OnInit } from '@angular/core'

import { RestaurantService } from '../service/restaurant.service'
import { Restaurant } from '../model/restaurant.model'

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.scss']
})
export class ListRestaurantsComponent implements OnInit {
	restaurants: Restaurant[]

  constructor(private restaurantService: RestaurantService) { }

  async ngOnInit() {
  	const restaurants = await this.restaurantService.getRestaurants()
  	this.restaurants = restaurants
  }
  
}
