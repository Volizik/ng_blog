import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
