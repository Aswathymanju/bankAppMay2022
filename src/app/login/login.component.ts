import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties

  aim="Perfect Banking Partner"
  accno="Account Number Please"
  acno=""
  pswd=""

    //database
  // db:any = {
  //   1000:{"acno":1000,"username":"Neer","password":1000,"balance":5000},
  //   1001:{"acno":1001,"username":"Laisha","password":1001,"balance":5000},
  //   1002:{"acno":1002,"username":"vypm","password":1002,"balance":3000}
 //}

 //dependancy injection
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  //userdefind function
  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno)
    
  }

  pswdChange(event:any){
    this.pswd= event.target.value
    console.log(this.pswd)
    
  }

//two way binding

  login(){
    var acno = this.acno
    var pswd = this.pswd

  const result= this.ds.login(acno,pswd)

    if(result){
      alert("login Successful")
      this.router.navigateByUrl('dashboard')
    } 
  
   }

  //template  referencing variable

  
  // login(a:any, p:any){
  //   console.log(a.value);    

  //   var acno = a.value
  //   var pswd = p.value

  //   let db=this.db
  //   if(acno in db){
  //       if(pswd==db[acno]["password"]){
  //         alert("login Successful")
  //       }
  //         else{
  //         alert("Incorrect Password")
  //       }
  //   } 
  //   else{
  //     alert("user does not exist!!!")
  //   }
  //  }


}
