import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './page/ecommerce/ecommerce.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'TrangChu' },
  {
    path: 'TrangChu',
    component: EcommerceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
