import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ApiInvited } from '../../services/api-invited';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { NgIcon } from '@ng-icons/core';


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NgIcon],
  templateUrl: './register.html',
  styleUrl: './register.less',
})
export class Register implements OnInit {
  private fb = inject(FormBuilder);
  name : string = '';
  invitedForm!:FormGroup;

  constructor(private apiInvited: ApiInvited,private spinner: NgxSpinnerService) {
    
  }

  ngOnInit(): void {
      this.invitedForm = this.fb.group({
        name: ['', [Validators.required]],
        firstSurname: ['', [Validators.required]],
        secondSurname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
      });
  }
  
  onSubmit() {
    this.spinner.show();
    this.apiInvited.setInvited(this.invitedForm.value).subscribe(
      {
        next: (res)=>{
          console.log(res);
          this.spinner.hide();
          Swal.fire({
            title: 'Success!',
            text: 'Your changes have been saved.',
            icon: 'success',
            confirmButtonText: 'Great'
          });
        },
        error: (err)=>{
          console.log(err);
          this.spinner.hide();
          Swal.fire({
            title: 'Error!',
            text: err.error.message,
            icon: 'error',
            confirmButtonText: 'Accept'
          });
        }
      }
    );
    console.log(this.invitedForm.value);
  }
}
