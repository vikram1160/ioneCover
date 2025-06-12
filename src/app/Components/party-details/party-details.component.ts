import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeData } from '../party/employee-data';

@Component({
  selector: 'app-party-details',
  standalone: true,
  imports: [ InputTextModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,],
  templateUrl: './party-details.component.html',
  styleUrl: './party-details.component.css'
})
export class PartyDetailsComponent {
 data = [...EmployeeData];
  firstName: string = '';
  lastName: string = '';
  age: number | null = null;
  id: number = 0;
  isUpdate: boolean = false;
  EmployeeData: any;
  selectedEmployee: any;
  isEditMode = "false";
  index!: number;
  mobailNo: number | null = null;

  employeeData: any = {};



  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {

        this.employeeData = JSON.parse(params['data']); // Convert string back to object
        this.isEditMode = JSON.parse(params['isEditMode']);

        console.log("Received Employee Data:", this.employeeData);
      }
    });
  }

  handleClear(): void {
    this.router.navigate(['/party',]);
  }
  
  handleSave(): void {
    let error = ''; 
  
    if (error === '') {
      if (this.isEditMode === "false") {
        // Create mode - Add new employee
        let newEmployee = {
          id: this.data.length + 1,
          firstName: this.employeeData.firstName,
          lastName: this.employeeData.lastName,
          age: this.employeeData.age!,
          mobailNo: this.employeeData.mobailNo,
          emailId: this.employeeData.emailId || '',
          city: this.employeeData.city || '',
        };
        this.data.push(newEmployee);
        console.log('New employee added:', newEmployee);
      } else {
        // Edit mode - Update existing employee
        let index = this.data.findIndex(item => item.id === this.employeeData.id);
        if (index !== -1) {
          this.data[index] = { ...this.employeeData };
          console.log('Employee updated:', this.employeeData);
        } else {
          console.error('Employee not found with ID:', this.employeeData.id);
        }
      }
  
   
      this.router.navigate(['/party'], {
        queryParams: {
          data: JSON.stringify(this.data),
          isEditMode: this.isEditMode
        }
      });
    } else {
      console.error('Error:', error);
    }
  } 
}
