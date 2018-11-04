import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ListOrdersComponent } from './list-orders/list-orders.component'
import { CreateOrderComponent } from './create-order/create-order.component';

import { OrderService } from './service/order.service';
import { RestaurantService } from './service/restaurant.service';
import { MealService } from './service/meal.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreateOrderComponent,
    ListOrdersComponent
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
    MealService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
