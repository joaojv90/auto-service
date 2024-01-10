import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { CarsComponent } from './screens/cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './screens/error404/error404.component';
import { LoginComponent } from './screens/login/login.component';
import { PrivateComponent } from './screens/private/private.component';
import { UsComponent } from './screens/us/us.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CarListComponent,
        NavBarComponent,
        HomeComponent,
        CarsComponent,
        Error404Component,
        LoginComponent,
        PrivateComponent,
        UsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
