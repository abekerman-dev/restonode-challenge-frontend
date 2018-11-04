import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Order, OrderConfirmationMessage } from '../model/order.model'


@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.BaseUrl + '/orders'

  async getOrders(): Promise<Order[]> {
    const orders = (await this.http.get<any>(this.baseUrl).toPromise()) as Order[]
    return orders
  }

  /*async getUserById(id: string): Promise<User> {
    return (await this.http.get<any>(this.baseUrl + '/' + id).toPromise())
      .data as User
  }*/

  async createOrder(order: Order): Promise<OrderConfirmationMessage> {
    return (await this.http.post<any>(this.baseUrl, order).toPromise()) as DeliveryOrderConfirmationMessage
  }

}
