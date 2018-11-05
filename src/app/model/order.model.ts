import { Meal } from '../model/meal.model'
import { Destination } from '../model/destination.model'

export class Order {
	constructor(
		public id: number = null,
		public meals: Meal[] = [],
	  public address: string = '',
	  public destination: Destination = new Destination(),
		public eta: string = '',
	  public totalAmount: number = null
	) {}
}

export class OrderConfirmationMessage {
	constructor(
		public eta: string = '',
		public totalAmount: number = null
	) {}
}