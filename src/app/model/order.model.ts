import { Meal } from '../model/meal.model'

export class Destination {
	constructor(
		public lat: number = 0,
		public lng: number = 0
	) {}
}

export class Order {
	constructor(
		public id: number = 0,
		public meals: Meal[] = [],
	  public totalAmount: number = 0,
	  public address: string = '',
		public destination: Destination = new Destination(0, 0)
	) {}
}

export class Duration {
	constructor(
	  public inSeconds: number,
	  public humanReadable: string
	) {}
}

export class TotalAmount {
	constructor(
	  public totalAmount: number,
	) {}
}

export class OrderConfirmationMessage {
	constructor(
		public duration: Duration = new Duration(0, ''),
		public totalAmount: TotalAmount = new TotalAmount(0)
	) {}
}