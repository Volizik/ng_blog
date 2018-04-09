import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../core/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AdminComponent,
    SidebarComponent,
    MainComponent,
    AddPostComponent,
    PostListComponent
  ]
})
export class AdminModule { }
