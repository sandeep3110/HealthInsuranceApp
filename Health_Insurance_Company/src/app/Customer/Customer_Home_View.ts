
import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';



"use strict";

@Component({
    selector : 'Customer-HomeView',
    templateUrl: './Customer_Home_View.html',
    styleUrls : ['./Customer_Home_View.css'],


  })

export class CustomerHomeView{

<<<<<<<<< Temporary merge branch 1
    customerData: JSON;

||||||||| merged common ancestors
    customerData: JSON;
  
=========
    customerData: JSON; /* Mentioning Json type is optional */
  
    /* Either Local storage or session storage application is throughing error while 
    restarting the app --> "User Data doesn't exist on storage" */
>>>>>>>>> Temporary merge branch 2
    constructor() {
<<<<<<<<< Temporary merge branch 1
    // this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
||||||||| merged common ancestors
    this.customerData = JSON.parse(sessionStorage.userData); /* Mentioning Json type is optional */
=========
    this.customerData = JSON.parse(sessionStorage.userData); 
    /* this.customerData = JSON.parse(localStorage.userData); */
>>>>>>>>> Temporary merge branch 2
   }






}
