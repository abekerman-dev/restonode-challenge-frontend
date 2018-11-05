import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ListOrdersComponent } from './list-orders/list-orders.component'
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component'
import { ListMealsComponent } from './list-meals/list-meals.component'

import { CreateOrderComponent } from './create-order/create-order.component'
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component'
import { CreateMealComponent } from './create-meal/create-meal.component'


const routes: Routes = [
	{
		path: '',
		component: ListOrdersComponent

	},
	{
		path: 'list-restaurants',
		component: ListRestaurantsComponent

	},
	{
		path: 'list-meals/:restaurantId',
		component: ListMealsComponent

	},
	{
		path: 'create-order',
		component: CreateOrderComponent

	},
	{
		path: 'create-restaurant',
		component: CreateRestaurantComponent

	},
	{
		path: 'create-meal/:restaurantId',
		component: CreateMealComponent

	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
