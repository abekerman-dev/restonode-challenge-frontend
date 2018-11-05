import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { RestaurantService } from '../service/restaurant.service'

import { Restaurant } from '../model/restaurant.model'

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.scss']
})
export class ListMealsComponent implements OnInit {
  restaurantId: number
	restaurant: Restaurant

  constructor(
  	private restaurantService: RestaurantService,
  	private route: ActivatedRoute
  ) {
  	this.route.params.subscribe(
  		params => this.restaurantId = params.restaurantId
  	)
  }

  async ngOnInit() {
  	const restaurant = await this.restaurantService.getRestaurantById(this.restaurantId)
  	this.restaurant = restaurant
  }

}
