import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatPaginatorModule,
      MatListModule
  ],
  exports: [
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatPaginatorModule,
      MatListModule
  ]
})
export class MaterialModule { }
