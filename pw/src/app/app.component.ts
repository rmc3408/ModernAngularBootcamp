import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';


  onButtonClick() {
    this.password = 'tested';
    //console.log('clicked!');
    //console.log(this.password);
  }
  // getPassword() {
  //   return this.password;
  // }
}
