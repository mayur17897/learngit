import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'header', 
    loadComponent: () => import('./header-company/header-company.component').then(c => c.HeaderCompanyComponent)
  },
  {path: 'details', 
    loadComponent: () => import('./details-company/details-company.component').then(c => c.DetailsCompanyComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
