import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

import { RestaurantService } from '../service/restaurant.service'
import { Restaurant } from '../model/restaurant.model'

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {
	restaurant = new Restaurant()

	submitted = false

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  async onSubmit() { 
  	this.submitted = true
  	try {
  		delete this.restaurant.id
  		delete this.restaurant.meals
  		this.restaurant = await this.restaurantService.createRestaurant(this.restaurant)
  	} catch(e) {
  		console.error('error has occurred ->', e)
  	}
 	}

}
