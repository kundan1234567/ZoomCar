import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { BookingComponent } from './component/booking/booking.component';
import { CarsComponent } from './component/cars/cars.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'home', pathMatch:'full'
},
{
  path:"home",component:HomeComponent
},
{
  path:"search",component:SearchComponent
},
{
  path:"boking",component:BookingComponent
},
{
  path:"cars",component:CarsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
