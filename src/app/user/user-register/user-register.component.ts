import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  registerationForm!: FormGroup;
  fg: FormGroup | undefined;
  constructor() {
  }
  ngOnInit(): void {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userEmail: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(14), Validators.pattern('^[0-9]*$')]),
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl) : ValidationErrors | null =>  {
    return control.value.password === control.value.confirmPassword ? null : {notmached: true};
  }

  onSubmit() {
    console.log(this.registerationForm);  
  }

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get userEmail() {
    return this.registerationForm.get('userEmail') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
}
