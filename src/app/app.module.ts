import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component'

import { OrderService } from './service/order.service'
import { RestaurantService } from './service/restaurant.service'

import { ListOrdersComponent } from './list-orders/list-orders.component'
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { ListMealsComponent } from './list-meals/list-meals.component';

import { CreateOrderComponent } from './create-order/create-order.component'
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component'
import { CreateMealComponent } from './create-meal/create-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListOrdersComponent,
    ListRestaurantsComponent,
    ListMealsComponent,
    CreateOrderComponent,
    CreateRestaurantComponent,
    CreateMealComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    OrderService,
    RestaurantService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
