import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  passType="password";

  constructor(public formbulider:FormBuilder,public router:Router,public toastr:ToastrService) {
    
    this.loginForm=this.formbulider.group({
        
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  

   }

  ngOnInit() {
  }

  work(){
   if(this.loginForm.valid){
    this.router.navigate(["work"])
    this.loginForm.reset();
   }else{
    this.toastr.error("Please fill the mandatory details",undefined,{
      positionClass:'toast-bottom-right',
    });

   }
  }

  showPwd(){
    debugger;
    if (this.passType == "password"){
      this.passType = "text";
    }else{
      this.passType = "password";
    }
  }

}
