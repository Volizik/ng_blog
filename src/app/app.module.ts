import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { DataService } from './core/data.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlePageComponent,
    ArticleListComponent,
    ArticleComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.fireconfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
