import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { MainPageComponent } from '../../components/main-page/main-page.component';
import { ArticlePageComponent } from '../../components/article-page/article-page.component';
import { SharedModule } from '../../core/shared.module';
import { AboutComponent } from '../../components/about/about.component';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', component: MainPageComponent},
      {path: 'article/:id', component: ArticlePageComponent}
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    IndexComponent,
    MainPageComponent,
    ArticlePageComponent,
    AboutComponent,
    ArticleComponent,
    ArticleListComponent,
  ]
})
export class IndexModule { }
