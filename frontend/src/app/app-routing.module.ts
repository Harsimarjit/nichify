import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'product/:id',component:ProductPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'checkout',component:CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
