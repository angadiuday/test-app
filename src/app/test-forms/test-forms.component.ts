import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-test-forms',
  standalone: true,
  imports:  [CommonModule, ReactiveFormsModule],
  templateUrl: './test-forms.component.html',
  styleUrl: './test-forms.component.scss'
})
export class TestFormsComponent implements OnInit{

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender:new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^[6-9][0-9]{9}$')]),
      addresses: this.fb.array([]),
      // qualifications: this.fb.array([])
    })

  //   this.userForm.patchValue({
  //     "name": "uday",
  //     "email": "dsd@asa.com",
  //     "gender": "male",
  //     "phoneNumber": 9877772222
  // })
  this.addAddress();
  }

  get addresses(): FormArray{
    return this.userForm.get('addresses') as FormArray<FormGroup>
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  newAddress(): FormGroup{
    return this.fb.group({
      line1: new FormControl(''),
      line2: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    })
  }

  addAddress() {
    this.addresses.push(this.newAddress());
  }

  removeAddress(index:number) {
    this.addresses.removeAt(index);

  }

  onSubmit() {
    if(this.userForm.valid){
      const user: User = this.userForm.value;
      console.log('Form submitted', user);
    }
  }

}
