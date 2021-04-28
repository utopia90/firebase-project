import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor( private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
    });
  }

  login() {
    if (this.loginForm.value.mail && this.loginForm.value.password) {
      this.authService.login(this.loginForm.value.mail, this.loginForm.value.password);
 
}}

  }


