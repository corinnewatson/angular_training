import { Component } from '@angular/core';
import {Customer} from "../app.model"
import {ILogger, ConsoleLogger} from "../Utility/app.Logger"
import {HttpClient} from "@angular/common/http"

@Component({
  templateUrl: './app.CustomerView.html',

})
export class CustomerComponent {
  title = 'CustomerApplication2';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>;
  LogObj: ILogger = new ConsoleLogger()


  // constructor(){
  //   this.LogObj.Log();
  // }

  Add() {

    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // clear UI + attach new customer

    
  }
}
