import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""
//form group
 registerForm = this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
   acno:[''],
   pswd:['']
   
 })

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
  
    
    // alert("Register Clicked!!")
    console.log(this.registerForm);
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

  //  if(this.registerForm.get('uname')?.errors){
  //    alert("invalid username")
  //  }
    

    if(this.registerForm.valid){
      const result = this.ds.register(uname, acno, pswd)
    if (result) {
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else {
      alert("Already Existing customer....Please Login!!!")
    }
    }
else{
  alert("invalid form")
}
    
  }

}
