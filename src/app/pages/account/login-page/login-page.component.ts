import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      cpf: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],

    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem('petshop.token');

    if (token) {
      this.busy = true;
      this
        .service
        .refreshToken()
        .subscribe({
          next: (v: any) => { localStorage.setItem('petshop.token', v.token); this.busy = false},
          error: (err) => { console.log(err); localStorage.clear(); this.busy = false }
        })
    }
  }

  submit(): void {
    this
      .service
      .authenticate(this.form.value)
      .subscribe({
        next: (v: any) => { localStorage.setItem('petshop.token', v.token) },
        error: (err) => console.log(err)
      })
  }

}
