import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
	{
		path: '',
		component: ListOrdersComponent

	},
	{
		path: 'list-orders',
		component: ListOrdersComponent

	},
	{
		path: 'create-order',
		component: CreateOrderComponent

	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
