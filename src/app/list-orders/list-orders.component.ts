import { Component, OnInit } from '@angular/core';

import { OrderService } from '../service/order.service'
import { Order } from '../model/order.model'

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
	orders: Order[]

  constructor(private orderService: OrderService) { }

  async ngOnInit() {
  	const orders = await this.orderService.getOrders()
  	this.orders = orders
  }

}
