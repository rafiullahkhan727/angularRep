import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  ngOnInit(): void {
    this.getEmpList();
    console.log("this is my first"+this.getEmpList());
  }
   empObj:any={
     "empId": 0,
  "firstName": "",
  "lastName": "",
  "email": "",
  "contactNo": "",
  "city": "",
  "address": ""
  };
  @ViewChild('empModal') empModal:ElementRef|undefined;
  empList:any[]=[];
 http=inject(HttpClient);
 getEmpList(){
  
  this.http.get("https://localhost:7025/api/EmployeeMaster").subscribe((restlt:any)=>{
    this.empList=restlt;
  })
 }
 onUpdate(item:any){
  
  if(this.empModal){
    this.empModal.nativeElement.style.display="block";
    //this.http.put("https://localhost:7025/api/EmployeeMaster/"+item.empId).subscribe((res:any)=>{
      
   // })
   this.empObj=item;
 }
}
 onDelete(item:any){
  const isDelete=confirm("Are yoy sure to delete");
  if(isDelete){
     this.http.delete("https://localhost:7025/api/EmployeeMaster/"+item.empId).subscribe((res:any)=>{
      this.getEmpList();
  })
  }
 
 }
 
 onSubmit(){
        const isupdate=confirm("are you sure to update");
        if(isupdate){
          this.http.put("https://localhost:7025/api/EmployeeMaster/"+this.empObj.empId,this.empObj).subscribe((res:any)=>this.getEmpList());
          this.onClose();
        }
  
  }
  onClose(){
    debugger
    if(this.empModal){
    this.empModal.nativeElement.style.display="none"
    this.getEmpList();
    }
  }
 }

