import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {TodoComponent} from './todo/todo.component';
import {LibraryComponent} from './library/library.component';
import {MainComponent} from './main.component';

const routes: Routes = [
    {path: '', component: MainComponent, children: [
        {path: '', component: IndexComponent},
        {path: 'todo', component: TodoComponent},
        {path: 'library', component: LibraryComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
