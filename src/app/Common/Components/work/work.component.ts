import { Router } from '@angular/router';
import { WorkServiceService } from './../../Service/work-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

   
  workForm:FormGroup;
  work:any;
  date:any;
  someValue:string="";
  someValues:Array<string>=new Array<string>();
   
  constructor(public formBuilder:FormBuilder,public toastr:ToastrService,public WorkServiceService:WorkServiceService,public router:Router) {

     this.workForm=this.formBuilder.group({
       
       work:['',[Validators.required]],
       date:['',[Validators.required]]
     })

    

   }

  ngOnInit() {

    this.WorkServiceService.submit().subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  submit(){

    

     
    if(this.workForm.valid){

      this.workForm.reset();
      
      // this.router.navigate(['data'])
      this.toastr.success("Your data is stored",undefined,{
        positionClass:'toast-bottom-right',
        
      });

      


    this.someValues.push(this.someValue);
    this.someValue;



    
  
      
      
    }else{
      this.toastr.error("Please fill the mandatory details",undefined,{
        positionClass:'toast-bottom-right',
      });
  
    }

  }

}
