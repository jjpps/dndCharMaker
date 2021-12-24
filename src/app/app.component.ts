import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  logged: boolean = false;
  user: string | undefined;
  checkoutForm = this.formBuilder.group({
    user: '',
    password: '',
  });
  ngOnInit(): void {
    console.log(this.logged);
  }
  isLoggedIn() {
    return this.logged;
  }

  onSubmit(event: Event): void {
    // Process checkout data here
    event.preventDefault();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.logged = true;
    this.user = this.checkoutForm.value['user'];
    this.checkoutForm.reset();
  }
}
