import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-master',
  imports: [FormsModule],
  templateUrl: './employee-master.component.html',
  styleUrl: './employee-master.component.css'
})
export class EmployeeMasterComponent {
  empObj:any={
     "empId": 0,
  "firstName": "",
  "lastName": "",
  "email": "",
  "contactNo": "",
  "city": "",
  "address": ""
  }
  http=inject(HttpClient);
  route=inject(Router)

    onSave(){
      this.http.post("https://localhost:7025/api/EmployeeMaster",this.empObj).subscribe((res:any)=>{
        alert("data added successfully");
         this.route.navigateByUrl("emp-op");
      })
     
    }
  

}
