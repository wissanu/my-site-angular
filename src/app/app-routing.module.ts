import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path:'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path:'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule'
  },
  {
    path:'orders/:id',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path:'',
    redirectTo:'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
