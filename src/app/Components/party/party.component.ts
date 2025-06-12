import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { EmployeeData } from './employee-data';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [TableModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})
export class PartyComponent {


   selectedEmployeeId: number | null = null;
  employeeName: string = '';
  selectedParty: any = null;
  selectedEmployee: any = null;
  checkButton: boolean = false
  partyDetails: any;
  index: any;
  isEditMode!: string | null;
  id : number | undefined
  mobailNo : number | undefined;


  data = [...EmployeeData]; 
  lastName: string = '';
  age: number | null = null;
  emailId : string = '';
  city:string = '';
  isUpdate: boolean = false;
  firstName:any;




   constructor(private router: Router, private route: ActivatedRoute,private dataService: DataService) {
    this.route.queryParamMap.subscribe(params => {

        });
  }


  employeeData: any;
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if (params['data']) {

        this.data = JSON.parse(params['data']);
        this.isEditMode = JSON.parse(params['isEditMode']);

        console.log("Received Employee Data:", this.employeeData);
      }
    });
  }
  
  viewdata() {
    if (this.selectedEmployee) {
      this.router.navigate(['/party-details'], {
        queryParams: { data: JSON.stringify(this.selectedEmployee), isEditMode: true }
      });
      console.log("Editing Employee:", this.selectedEmployee);
    } else {
      alert("Please select a row to edit!");
    }
  }
  
  creat(){
    this.router.navigate(['/party-details', ]),{
      queryParams: {isEditMode:false}
    }
  } 

  
  selectedRowData(emp: any) {
    this.selectedEmployee = emp;
  }

  editEmployee() {
    if (this.selectedEmployee) {
      this.router.navigate(['/party-details'], {
        queryParams: { data: JSON.stringify(this.selectedEmployee), isEditMode: true }
      });
      console.log("Editing Employee:", this.selectedEmployee);
    } else {
      alert("Please select a row to edit!");
    }
  }

 

  handleDelete() {
    if (this.selectedEmployee) {
      alert("Are You Shower Delete Employees")
      this.data = this.data.filter(e => e.id !== this.selectedEmployee.id);
      this.selectedEmployee = null;
    } else {
      alert('Select an employee first!');
    }
  }
}
