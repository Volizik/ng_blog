import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule, MatPaginatorModule],
  exports: [MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule, MatPaginatorModule]
})
export class MaterialModule { }
