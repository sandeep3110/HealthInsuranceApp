import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import {DBConnection} from './../RESTFul_API_Service/DBConn.service';
import { Router } from '@angular/router';


"use strict";

@Component({
    selector : 'Customer-Header',
    templateUrl: './Customer_Header.html',
    styleUrls : ['./../DefaultHome/Header.css'],


  })
export class CustomerHeader{

<<<<<<<<< Temporary merge branch 1
  // id:number = JSON.parse(sessionStorage.userData).memberId ; // Fetching the memberId for URL
||||||||| merged common ancestors
  id:number = JSON.parse(sessionStorage.userData).memberId ; // Fetching the memberId for URL
=========
  /* Either Local storage or session storage application is throughing error while 
    restarting the app --> "User Data doesn't exist on storage" */
   id:number = JSON.parse(sessionStorage.userData).memberId ; // Fetching the memberId for URL
   /* id:number = JSON.parse(localStorage.userData).memberId ; */
>>>>>>>>> Temporary merge branch 2

  constructor(private router: Router) { }

       /* To make Log Out tab have a pointer cursor */
        pointer() : any {
          let myStyles = {

            'cursor' : 'pointer',
          }
          return myStyles;
        }

        /* Log out from the session and clearing the storage */

        logOut(){
             sessionStorage.removeItem("userData");
             this.router.navigate(['/login']);
        }

}
