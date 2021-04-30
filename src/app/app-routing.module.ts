import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import './module/user/user.module';

const routes: Routes = [
  { path: '', loadChildren: './module/user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
