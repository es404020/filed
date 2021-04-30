import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from 'src/app/pages/details/details.component';
import { UserGrid } from 'src/app/pages/user/user.component';


const routes: Routes = [{ path: '', component: UserGrid },{
  path:'user',component:DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
