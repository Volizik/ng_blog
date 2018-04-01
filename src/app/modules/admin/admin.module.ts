import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../core/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }
