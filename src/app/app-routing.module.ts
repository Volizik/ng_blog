import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/index/index.module#IndexModule'},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
