import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeecontect',
  imports: [],
  templateUrl: './employeecontect.component.html',
  styleUrl: './employeecontect.component.css'
})
export class EmployeecontectComponent implements OnInit {
  ngOnInit(): void {
    this.getEmpList();
  }
  empList:any[]=[];
 http=inject(HttpClient)
 getEmpList(){
  
  this.http.get("https://localhost:7025/api/EmployeeMaster").subscribe((restlt:any)=>{
    this.empList=restlt;
  })
 }

}
