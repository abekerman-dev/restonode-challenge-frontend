import { Destination } from '../model/destination.model'
import { Meal } from './meal.model'

export class Restaurant {
	constructor(
		public id: number = null,
	  public name: string = null,
		public location: Destination = new Destination(),
	  public email: string = null,
	  public meals: Meal[] = []
  ) {}
}
