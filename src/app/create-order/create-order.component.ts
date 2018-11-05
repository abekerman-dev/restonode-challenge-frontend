import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'

import { RestaurantService } from '../service/restaurant.service'
import { Restaurant } from '../model/restaurant.model'

import { Meal } from '../model/meal.model'

import { OrderService } from '../service/order.service'
import { Order, OrderConfirmationMessage } from '../model/order.model'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
	restaurants: Restaurant[]
	meals: Meal[]
	order = new Order()
	confirmationMessage = new OrderConfirmationMessage()

	submitted = false

  constructor(
  	private restaurantService: RestaurantService,
  	private orderService: OrderService,
  ) {}

  async ngOnInit() {
  	const restaurants = await this.restaurantService.getRestaurants()
  	this.restaurants = restaurants
  }

  async getMealsByRestaurantId(restaurantId: number) {
  	const restaurant = await this.restaurantService.getRestaurantById(restaurantId)
  	this.meals = restaurant.meals
  }

  selectChangeHandler(event: any) {
  	let selectedRestaurantId = event.target.value
  	if (selectedRestaurantId === '-1' ) {
  		this.meals = []
  	} else {
  		this.getMealsByRestaurantId(selectedRestaurantId)
  	}
  }

  async onSubmit() { 
  	this.submitted = true
  	try {
  		delete this.order.id
  		delete this.order.meals
  		delete this.order.totalAmount
      this.confirmationMessage = await this.orderService.createOrder(this.order)
  	} catch(e) {
  		console.error('error has occurred ->', e)
  	}
 	}

}
