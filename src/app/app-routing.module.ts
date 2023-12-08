import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

{
  path: '',
  component:HomePageComponent,
},
{
  path: 'card',
  component:CardComponent,
},
{
  path: 'productPage/:id',
  component:ProductPageComponent,
},
{
  path: 'cartPage',
  component:CartPageComponent,
},
{
  path: 'contactPage',
  component:ContactPageComponent,
},
{
  path: '**',
  component:PageNotFoundComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
