import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees: Employee[] | undefined;
  
  constructor(private employeeService: EmployeeService){

  }
  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees():void{
    this.employeeService.getEmployees().subscribe((response: Employee[])=>{
      this.employees = response
    },
    (error: Error)=>{
      alert(error.message);
    })
  }
}
