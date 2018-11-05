import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms'

import { RestaurantService } from '../service/restaurant.service'
import { Meal } from '../model/meal.model'

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.scss']
})
export class CreateMealComponent implements OnInit {
  restaurantId: number
	meal = new Meal()
	submitted = false

  constructor(
  	private restaurantService: RestaurantService,
  	private route: ActivatedRoute
  ) {
  	this.route.params.subscribe(
  		params => this.restaurantId = params.restaurantId
  	)
  }

  ngOnInit() {
  }

	async onSubmit() { 
  	this.submitted = true
  	try {
  		delete this.meal.id
  		this.meal = await this.restaurantService.addMealToRestaurant(this.restaurantId, this.meal)
  	} catch(e) {
  		console.error('error has occurred ->', e)
  	}
 	}

}
