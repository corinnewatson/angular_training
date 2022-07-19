import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { GridComponent } from '../Utility/app.GridComponent'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './app.HomeComponent';
import { MasterPageComponent } from './app.MasterPageComponent';
import { MainRoutes } from '../Routing/app.MainRouting';
import { ILogger, ConsoleLogger, DbLogger, BaseLogger } from '../Utility/app.Logger';
import {HttpClient} from "@angular/common/http"

@NgModule({
  declarations: [
   HomeComponent, MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: BaseLogger,
    useClass: ConsoleLogger
  }

  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
