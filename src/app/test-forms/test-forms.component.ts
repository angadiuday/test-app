import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      address: this.fb.array([])
    })

    this.userForm.patchValue({
      "name": "uday",
      "email": "uday@sds.com",
      "gender": "male",
      "phoneNumber": 9877772222
  })
  this.addAddress();
  }

  get address(): FormArray{
    return this.userForm.get('address') as FormArray
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  newAddress(): FormGroup{
    return this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl('')
    })
  }

  addAddress() {
    this.address.push(this.newAddress());
  }

  removeAddress(index:number) {
    this.address.removeAt(index);

  }

  onSubmit() {
    if(this.userForm.valid){
      console.log('Form submitted', this.userForm.value);
    }
  }

}
