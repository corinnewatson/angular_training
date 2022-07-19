import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './app.CustomerComponent';
import { CustomerRoutes } from '../Routing/app.CustomerRouting';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
CustomerComponent],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
