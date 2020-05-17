import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {CommonModule} from './common/common.module';


const routes: Routes = [
  {path:'common',loadChildren:'./common/common.module#CommonModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
