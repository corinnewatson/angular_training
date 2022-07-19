import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './app.SupplierComponent';
import { SupplierRoutes } from '../Routing/app.SupplierRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

    SupplierComponent

  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
