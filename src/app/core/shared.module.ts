import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {LayoutComponent} from '../modules/main/layout/layout.component';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule],
    exports: [CommonModule, MaterialModule, FormsModule]
})

export class SharedModule {
}

