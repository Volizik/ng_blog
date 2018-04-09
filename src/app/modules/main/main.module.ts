import {NgModule} from '@angular/core';
import {SharedModule} from '../../core/shared.module';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {TodoComponent} from './todo/todo.component';
import {IndexComponent} from './index/index.component';
import {LibraryComponent} from './library/library.component';
import {AboutComponent} from './index/components/about/about.component';
import {ArticleComponent} from './index/components/article/article.component';
import {ArticleListComponent} from './index/components/article-list/article-list.component';
import {ArticlePageComponent} from './index/components/article-page/article-page.component';
import {MainPageComponent} from './index/components/main-page/main-page.component';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
    imports: [
        SharedModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        LayoutComponent,
        TodoComponent,
        IndexComponent,
        LibraryComponent,
        AboutComponent,
        ArticleComponent,
        ArticleListComponent,
        ArticlePageComponent,
        MainPageComponent
    ]
})
export class MainModule {
}
