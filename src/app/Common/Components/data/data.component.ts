import { WorkServiceService } from './../../Service/work-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

   data:any;
  constructor(public WorkServiceService:WorkServiceService) { }

  ngOnInit() {

      this.WorkServiceService.submit().subscribe(
        (result:any)=>{
          this.data=result.data
        }
      )
  }

}
