import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public faAirFreshener = faAirFreshener;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let sid = "null";
  }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;


    // ajax call
    const url = 'http://localhost:3000/validate';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.status) {                                                                          //true
      sessionStorage.setItem('sid', data.email);                                                 //sessionStorage.setItem('sid', 'pkalpesh1996@gmail.com');   
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
