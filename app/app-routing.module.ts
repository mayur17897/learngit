import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent,
    children:[
      {path: 'index', component:IndexComponent},
      
      {
        path: 'product',
        loadChildren: () => import('./product/product-routing.module').then(c => c.ProductRoutingModule)
      },

       {
        path: 'sell',
        loadChildren: () => import('./startsell/startsell-routing.module').then(c => c.StartsellRoutingModule)
      },
	  
	   {
        path: 'company',
        loadChildren: () => import('./company/company-routing.module').then(c => c.CompanyRoutingModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
